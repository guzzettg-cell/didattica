#!/usr/bin/env python3
"""
INDICE DELLE PARTI · strumenti/crea-indice-parti.py

Legge le pagine del sito e scrive assets/indice-parti.js: per ogni pagina,
l'elenco delle sue parti, con il titolo preso dal primo <h2>/<h3> della parte.
Le parti sono:
  1. le <section class="parte" id="..."> e gli elementi con data-parte="..." (con data-titolo);
  2. se la pagina non ne ha: le <section> principali (non dentro un'altra section) con un titolo;
     il nome della parte è il loro id oppure p1, p2... secondo l'ordine nella pagina.
     Le presentazioni a diapositive (section class="slide") restano sempre intere.
La stessa regola è in assets/barra.js, che nasconde le parti non scelte.
Serve al sito delle classi per scegliere quali parti di una lezione mostrare
(link del tipo  pagina.html?parti=idea,parole ).

Non serve lanciarlo a mano: lo fa l'azione .github/workflows/indice-ricerca.yml.
Dal computer, nella cartella del sito:
    python3 strumenti/crea-indice-parti.py
"""
import json, os, re
from datetime import datetime, timezone
from html.parser import HTMLParser

RADICE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
USCITA = os.path.join(RADICE, "assets", "indice-parti.js")
MATERIE = ("geografia", "storia", "italiano", "educazione-civica", "uda")
VUOTI = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}


class Lettore(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.esplicite = []   # [id, titolo]
        self.sezioni = []     # section principali: [chiave, titolo, è_slide]
        self.pila = []        # (tag, ("e", i) | ("s", i) | None)
        self.n_sez = 0
        self.cerca = []       # parti di cui cerchiamo ancora il titolo
        self.in_h = False
        self.buf = []
        self.nomi = {}        # nomi delle parti nell'indice laterale (a.voce href="#id" > .nome)
        self.voce = None
        self.in_nome = False
        self.buf_nome = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        segno = None
        classi = (a.get("class") or "").split()
        if tag == "a" and "voce" in classi and (a.get("href") or "").startswith("#"):
            self.voce = a["href"][1:]
        elif self.voce and "nome" in classi and not self.in_nome:
            self.in_nome, self.buf_nome = True, []
        pid = a.get("data-parte") or (a.get("id") if "parte" in classi else None)
        in_esplicita = any(x and x[0] == "e" for _, x in self.pila)
        in_sezione = any(t == "section" for t, _ in self.pila)
        if pid and not in_esplicita and pid not in [p[0] for p in self.esplicite]:
            self.esplicite.append([pid, (a.get("data-titolo") or "").strip()])
            segno = ("e", len(self.esplicite) - 1)
            if not self.esplicite[-1][1]:
                self.cerca.append(segno)
        elif tag == "section" and not in_sezione:
            self.n_sez += 1
            self.sezioni.append([a.get("id") or "p%d" % self.n_sez, "", "slide" in classi])
            segno = ("s", len(self.sezioni) - 1)
            self.cerca.append(segno)
        if tag in ("h2", "h3") and self.cerca and not self.in_h:
            self.in_h, self.buf = True, []
        if tag not in VUOTI:
            self.pila.append((tag, segno))

    def handle_endtag(self, tag):
        if tag == "a" and self.voce:
            if self.in_nome or self.buf_nome:
                t = re.sub(r"\s+", " ", "".join(self.buf_nome)).strip()
                if t:
                    self.nomi.setdefault(self.voce, t)
            self.voce, self.in_nome, self.buf_nome = None, False, []
        elif self.in_nome and tag == "span":
            self.in_nome = False
        if self.in_h and tag in ("h2", "h3"):
            t = re.sub(r"\s+", " ", "".join(self.buf)).strip()
            if t:
                for k, i in self.cerca:
                    (self.esplicite if k == "e" else self.sezioni)[i][1] = t
                self.cerca = []
            self.in_h = False
        for k in range(len(self.pila) - 1, -1, -1):
            if self.pila[k][0] == tag:
                chiusi = [x for _, x in self.pila[k:] if x]
                del self.pila[k:]
                self.cerca = [x for x in self.cerca if x not in chiusi]
                break

    def handle_data(self, data):
        if self.in_nome:
            self.buf_nome.append(data)
        if self.in_h:
            self.buf.append(data)

    def parti(self):
        if self.esplicite:
            return [[i, self.nomi.get(i) or t or i] for i, t in self.esplicite]
        if any(slide for _, _, slide in self.sezioni):
            return []
        return [[i, t] for i, t, _ in self.sezioni if t]


def main():
    indice = {}
    for materia in MATERIE:
        base = os.path.join(RADICE, materia)
        for cartella, sotto, file in os.walk(base):
            sotto[:] = sorted(d for d in sotto if not d.startswith("."))
            for nome in sorted(file):
                if not nome.lower().endswith(".html"):
                    continue
                completo = os.path.join(cartella, nome)
                l = Lettore()
                try:
                    with open(completo, encoding="utf-8", errors="replace") as f:
                        l.feed(f.read())
                except Exception:
                    continue
                parti = l.parti()
                if len(parti) >= 2:
                    indice[os.path.relpath(completo, RADICE).replace(os.sep, "/")] = parti
    try:
        with open(USCITA, encoding="utf-8") as f:
            v = f.read()
        if json.loads(v[v.index("INDICE_PARTI = ") + 15:].strip().rstrip(";")).get("pagine") == indice:
            print("Indice delle parti già aggiornato:", len(indice), "pagine")
            return
    except Exception:
        pass
    dati = {"aggiornato": datetime.now(timezone.utc).strftime("%Y-%m-%d"), "pagine": indice}
    with open(USCITA, "w", encoding="utf-8") as f:
        f.write("/* INDICE DELLE PARTI · FILE GENERATO da strumenti/crea-indice-parti.py: non modificarlo a mano. */\n")
        f.write("var INDICE_PARTI = " + json.dumps(dati, ensure_ascii=False, separators=(",", ":")) + ";\n")
    print("Indice delle parti scritto:", len(indice), "pagine con parti")


if __name__ == "__main__":
    main()
