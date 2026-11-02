#!/usr/bin/env python3
"""
INDICE PER LA RICERCA NEL SITO · strumenti/crea-indice-ricerca.py

Legge tutte le pagine .html del sito e scrive assets/indice-ricerca.js,
il file che la pagina «Cerca» (cerca.html) usa per trovare le parole
anche dentro le pagine, non solo nei titoli del catalogo.

Non serve lanciarlo a mano: su GitHub lo fa da solo l'azione
.github/workflows/indice-ricerca.yml a ogni modifica del sito.
Per lanciarlo sul computer, dalla cartella principale del sito:
    python3 strumenti/crea-indice-ricerca.py
"""
import html, json, os, re, sys
from datetime import datetime, timezone
from html.parser import HTMLParser

RADICE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
USCITA = os.path.join(RADICE, "assets", "indice-ricerca.js")
MATERIE = ("geografia", "storia", "italiano", "educazione-civica")
MAX_TESTO = 12000         # caratteri di testo per pagina
MAX_TITOLETTI = 40

ESCLUSE = {"index.html", "cerca.html"} | {m + "/index.html" for m in MATERIE}
SALTA = {"script", "style", "noscript", "template", "svg", "head", "math"}
BLOCCO = {"p", "div", "li", "td", "th", "h1", "h2", "h3", "h4", "h5", "h6", "section",
          "article", "header", "footer", "br", "tr", "dt", "dd", "blockquote", "figcaption",
          "summary", "details", "label", "button", "option", "aside", "nav", "main", "ul", "ol", "table"}


class Lettore(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.titolo, self.descr, self.titoletti, self.pezzi, self.script = "", "", [], [], []
        self.salta = 0
        self.in_title = False
        self.in_h = None
        self.buf_h = []
        self.in_script = False
        self.svg = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "meta" and (a.get("name") or "").lower() == "description":
            self.descr = a.get("content") or ""
        if tag == "svg":
            self.svg += 1
        if tag == "title" and not self.svg and not self.titolo:
            self.in_title = True
        if tag == "script" and (a.get("type") or "text/javascript") in ("text/javascript", "module", "application/json", "application/ld+json"):
            self.in_script = True
        if tag in SALTA:
            self.salta += 1
            return
        if tag in ("h1", "h2", "h3") and not self.salta:
            self.in_h, self.buf_h = tag, []
        if tag in BLOCCO:
            self.pezzi.append("\n")
        if tag == "img" and a.get("alt"):
            self.pezzi.append(" " + a["alt"] + " ")

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "svg":
            self.svg = max(0, self.svg - 1)
        if tag == "script":
            self.in_script = False
        if tag in SALTA:
            self.salta = max(0, self.salta - 1)
            return
        if self.in_h == tag:
            t = pulisci(" ".join(self.buf_h))
            if t:
                self.titoletti.append(t)
            self.in_h = None
        if tag in BLOCCO:
            self.pezzi.append("\n")

    def handle_data(self, data):
        if self.in_title:
            self.titolo += data
            return
        if self.in_script:
            self.script.append(data)
            return
        if self.salta:
            return
        self.pezzi.append(data)
        if self.in_h:
            self.buf_h.append(data)


def pulisci(s):
    return re.sub(r"\s+", " ", s).strip()


STRINGA = re.compile(r'"((?:[^"\\\n]|\\.){25,})"|\'((?:[^\'\\\n]|\\.){25,})\'|`((?:[^`\\]|\\.){25,})`', re.S)


def testo_negli_script(sorgenti):
    """Molte pagine costruiscono il testo con JavaScript: si prendono le stringhe
    che sembrano frasi (parole e spazi), lasciando stare il codice."""
    frasi = []
    for src in sorgenti:
        for m in STRINGA.finditer(src):
            s = m.group(1) or m.group(2) or m.group(3) or ""
            if m.group(3) is not None:
                s = re.sub(r"\$\{[^}]*\}", " ", s)
            try:
                s = json.loads('"' + s.replace('"', '\\"').replace("\\'", "'") + '"') if "\\" in s else s
            except Exception:
                pass
            if "<" in s and ">" in s:
                s = re.sub(r"<[^>]+>", " ", s)
            s = pulisci(html.unescape(s))
            parole = s.split()
            if len(parole) < 4:
                continue
            lettere = sum(c.isalpha() or c.isspace() for c in s)
            if lettere / max(1, len(s)) < 0.82:
                continue
            if re.search(r"(function|=>|\bvar |\bconst |\blet |document\.|\.style|querySelector|px\b|rgba?\(|#[0-9a-f]{3,6}\b|\{|\}|;\s*\w+\s*:)", s):
                continue
            if re.match(r"^[\w-]+(\s+[\w-]+)*$", s) and not re.search(r"[A-Za-zÀ-ÿ]{3,}\s+[a-zà-ÿ]{2,}\s+[a-zà-ÿ]{2,}", s):
                continue
            frasi.append(s)
    return frasi


def leggi(percorso):
    with open(percorso, encoding="utf-8", errors="replace") as f:
        sorgente = f.read()
    p = Lettore()
    try:
        p.feed(sorgente)
        p.close()
    except Exception:
        pass
    righe = [pulisci(r) for r in "".join(p.pezzi).split("\n")]
    # via le scritte dei pulsanti (A−, 100%, Chiudi…): restano le righe con almeno tre parole
    righe = [r for r in righe if len(r.split()) >= 3 and sum(c.isalpha() for c in r) >= 12]
    # via i link di navigazione («← Torna a…», «Vai al contenuto»…)
    righe = [r for r in righe if not re.match(r"^(←|⌂|→|Vai al contenuto|Salta al contenuto|Torna |Materiali didattici$)", r)
             and not re.search(r"tutti i moduli$", r)]
    righe += testo_negli_script(p.script)
    visti, testo = set(), []
    for r in righe:
        if len(r) < 2:
            continue
        k = r.lower()
        if k in visti:
            continue
        visti.add(k)
        testo.append(r)
    corpo = " · ".join(testo)
    if len(corpo) > MAX_TESTO:
        corpo = corpo[:MAX_TESTO].rsplit(" ", 1)[0] + " …"
    tit = []
    for t in p.titoletti:
        if t not in tit:
            tit.append(t)
    return {
        "t": pulisci(html.unescape(p.titolo)),
        "d": pulisci(p.descr),
        "h": tit[:MAX_TITOLETTI],
        "x": corpo,
    }


def main():
    pagine = []
    for cartella, sottocartelle, file in os.walk(RADICE):
        sottocartelle[:] = sorted(d for d in sottocartelle if not d.startswith(".") and d not in ("strumenti", "node_modules"))
        for nome in sorted(file):
            if not nome.lower().endswith((".html", ".htm")):
                continue
            completo = os.path.join(cartella, nome)
            rel = os.path.relpath(completo, RADICE).replace(os.sep, "/")
            if rel in ESCLUSE:
                continue
            voce = leggi(completo)
            voce = {"u": rel, **{k: v for k, v in voce.items() if v}}
            pagine.append(voce)
    # se le pagine non sono cambiate, il file resta com'è (anche la data)
    try:
        with open(USCITA, encoding="utf-8") as f:
            vecchio = f.read()
        vecchio = json.loads(vecchio[vecchio.index("INDICE_RICERCA = ") + 17:].strip().rstrip(";"))
        if vecchio.get("pagine") == pagine:
            print("Indice già aggiornato:", len(pagine), "pagine")
            return 0
    except Exception:
        pass
    dati = {"aggiornato": datetime.now(timezone.utc).strftime("%Y-%m-%d"), "pagine": pagine}
    with open(USCITA, "w", encoding="utf-8") as f:
        f.write("/* =============================================================\n"
                "   INDICE PER LA RICERCA · FILE GENERATO: non modificarlo a mano.\n"
                "   Lo crea strumenti/crea-indice-ricerca.py leggendo le pagine del sito.\n"
                "   ============================================================= */\n")
        f.write("var INDICE_RICERCA = ")
        json.dump(dati, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")
    print("Pagine indicizzate:", len(pagine), "· file:", os.path.relpath(USCITA, RADICE),
          "·", round(os.path.getsize(USCITA) / 1024), "KB")


if __name__ == "__main__":
    sys.exit(main())
