/* Costruisce le pagine a partire dal catalogo in materiali.js.
   Di solito non c'è bisogno di modificare questo file. */

const MATERIE = {
  "geografia":         { nome: "Geografia",         descr: "La Terra, i climi, la popolazione, l'economia e gli Stati del mondo." },
  "storia":            { nome: "Storia",            descr: "Fonti, periodi, linee del tempo e grandi trasformazioni." },
  "italiano":          { nome: "Italiano",          descr: "Lettura, scrittura, grammatica e laboratori di scrittura creativa." },
  "educazione-civica": { nome: "Educazione civica", descr: "Costituzione, cittadinanza, ambiente e vita in comunità." }
};
const CLASSI = ["prima", "seconda", "terza"];

const corpo = document.body;
const BASE = corpo.dataset.base || "";

function el(tag, attrs, ...figli) {
  const n = document.createElement(tag);
  for (const k in attrs || {}) {
    if (k === "class") n.className = attrs[k];
    else if (k === "style") n.setAttribute("style", attrs[k]);
    else n.setAttribute(k, attrs[k]);
  }
  for (const f of figli) if (f != null) n.append(f);
  return n;
}
const maiuscola = s => s.charAt(0).toUpperCase() + s.slice(1);

const ELENCO_MODULI = typeof MODULI !== "undefined" ? MODULI : [];
const nomeModulo = mod => (mod.numero ? "Modulo " + mod.numero + " – " : "") + mod.titolo;

/* tutte le attività, con l'indicazione di dove si trovano */
function tutteLeAttivita(moduli) {
  const elenco = [];
  for (const mod of moduli) {
    (mod.lezioni || []).forEach(lez =>
      (lez.attivita || []).forEach(a => elenco.push({ ...a, mod, lez })));
    (mod.attivita || []).forEach(a => elenco.push({ ...a, mod, lez: null }));
  }
  return elenco;
}

/* scheda di un'attività per "Aggiunti di recente" */
function voceRecente(a) {
  const dove = [MATERIE[a.mod.materia]?.nome, maiuscola(a.mod.classe || ""), nomeModulo(a.mod)];
  if (a.lez) dove.push(a.lez.titolo);
  return el("li", { class: "voce", style: `--c: var(--${a.mod.materia})` },
    el("a", { href: BASE + a.link },
      el("h3", null, a.titolo),
      a.descrizione ? el("p", null, a.descrizione) : null,
      el("p", { class: "dettagli" }, el("span", { class: "tipo" }, a.tipo || "Attività"),
        dove.filter(Boolean).join(", "))
    )
  );
}

/* riga di un'attività dentro una lezione */
function rigaAttivita(a) {
  return el("li", { class: "attivita" },
    el("a", { href: BASE + a.link },
      el("span", { class: "tipo" }, a.tipo || "Attività"),
      el("span", { class: "titolo-attivita" }, a.titolo)),
    a.descrizione ? el("p", null, a.descrizione) : null
  );
}

/* ---------- UDA interdisciplinari ---------- */
const ELENCO_UDA = typeof UDA !== "undefined" ? UDA : [];

function schedaUda(u) {
  const materie = (u.materie || []).filter(id => MATERIE[id]);
  const n = materie.length || 1;
  const striscia = materie.length
    ? materie.map((id, i) => `var(--${id}) ${i * 100 / n}% ${(i + 1) * 100 / n}%`).join(", ")
    : "var(--inchiostro) 0 100%";
  const etichette = el("p", { class: "dettagli" });
  materie.forEach(id => etichette.append(
    el("span", { class: "tipo", style: `--c: var(--${id})` }, MATERIE[id].nome)));
  const extra = [u.classe ? "Classe " + u.classe : null, u.periodo].filter(Boolean).join(", ");
  if (extra) etichette.append(extra);
  return el("li", { class: "voce uda" },
    el("span", { class: "striscia", style: `background: linear-gradient(to bottom, ${striscia})`, "aria-hidden": "true" }),
    el("a", { href: BASE + u.link },
      el("h3", null, u.titolo),
      u.descrizione ? el("p", null, u.descrizione) : null,
      etichette
    )
  );
}

function elencoUda(contenitore, filtro, vuoto) {
  if (!contenitore) return;
  const scelte = ELENCO_UDA.filter(filtro);
  if (!scelte.length) { contenitore.replaceWith(el("p", { class: "vuoto" }, vuoto)); return; }
  scelte.forEach(u => contenitore.append(schedaUda(u)));
}

/* ---------- home ---------- */
function home() {
  const griglia = document.getElementById("materie");
  for (const [id, info] of Object.entries(MATERIE)) {
    const moduli = ELENCO_MODULI.filter(m => m.materia === id);
    const n = tutteLeAttivita(moduli).length;
    const nl = moduli.reduce((t, m) => t + (m.lezioni || []).length, 0);
    const plurale = (x, uno, tanti) => x === 1 ? "1 " + uno : x + " " + tanti;
    let conta = "Materiali in arrivo";
    if (moduli.length) {
      conta = [plurale(moduli.length, "modulo", "moduli"),
               nl ? plurale(nl, "lezione", "lezioni") : null,
               n ? plurale(n, "attività", "attività") : null].filter(Boolean).join(", ");
    }
    griglia.append(el("a", { class: "materia", href: id + "/", style: `--c: var(--${id})` },
      el("h3", null, info.nome),
      el("p", null, info.descr),
      el("p", { class: "conta" }, conta)
    ));
  }
  elencoUda(document.getElementById("uda"), () => true, "Le UDA interdisciplinari arriveranno presto.");

  const recenti = document.getElementById("recenti");
  const lezioniConPagina = ELENCO_MODULI.flatMap(mod =>
    (mod.lezioni || []).filter(l => l.link).map(l => ({ ...l, tipo: "Lezione", mod, lez: null })));
  const ordinati = [...lezioniConPagina, ...tutteLeAttivita(ELENCO_MODULI)]
    .filter(a => a.data)
    .sort((a, b) => b.data.localeCompare(a.data))
    .slice(0, 6);
  if (!ordinati.length) recenti.replaceWith(el("p", { class: "vuoto" }, "Non ci sono ancora materiali."));
  else ordinati.forEach(a => recenti.append(voceRecente(a)));
}

/* ---------- pagina di una materia ---------- */
function paginaMateria(id) {
  const tutti = ELENCO_MODULI.filter(m => m.materia === id);
  const area = document.getElementById("materiali");
  const campo = document.getElementById("cerca");
  const pulsanti = document.querySelectorAll(".classi button");
  let classe = new URLSearchParams(location.search).get("classe") || "tutte";
  const aperti = new Set();          // moduli aperti dall'utente
  const idModulo = m => ["modulo", m.classe, m.numero || m.titolo].join("-").toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  if (location.hash) aperti.add(location.hash.slice(1));

  const contiene = (q, ...testi) => testi.join(" ").toLowerCase().includes(q);

  /* restituisce il modulo ridotto alle sole parti che corrispondono alla ricerca */
  function filtra(mod, q) {
    if (!q || contiene(q, mod.titolo, mod.descrizione || "", mod.numero || "")) return mod;
    const att = a => contiene(q, a.titolo, a.descrizione || "", a.tipo || "");
    const lezioni = (mod.lezioni || []).map(l =>
      contiene(q, l.titolo, l.descrizione || "") ? l : { ...l, attivita: (l.attivita || []).filter(att) }
    ).filter(l => contiene(q, l.titolo, l.descrizione || "") || l.attivita.length);
    const attivita = (mod.attivita || []).filter(att);
    return lezioni.length || attivita.length ? { ...mod, lezioni, attivita } : null;
  }

  function disegnaModulo(mod, cercando) {
    const lezioni = mod.lezioni || [];
    const nAtt = tutteLeAttivita([mod]).length;
    const chiave = idModulo(mod);
    const riepilogo = lezioni.length || nAtt
      ? [lezioni.length === 1 ? "1 lezione" : lezioni.length + " lezioni",
         nAtt === 1 ? "1 attività" : nAtt + " attività"].join(", ")
      : "In preparazione";

    const box = el("details", { class: "modulo", id: chiave });
    if (cercando || aperti.has(chiave)) box.open = true;
    box.addEventListener("toggle", () => {
      if (cercando) return;
      box.open ? aperti.add(chiave) : aperti.delete(chiave);
    });

    box.append(el("summary", null,
      el("span", { class: "numero-modulo" }, mod.numero ? "Modulo " + mod.numero : "Modulo"),
      mod.link
        ? el("a", { class: "titolo-modulo", href: BASE + mod.link, title: "Apri la pagina del modulo" }, mod.titolo)
        : el("span", { class: "titolo-modulo" }, mod.titolo),
      el("span", { class: "riepilogo" }, riepilogo)
    ));

    const dentro = el("div", { class: "contenuto-modulo" });
    if (mod.descrizione) dentro.append(el("p", { class: "descr-modulo" }, mod.descrizione));

    if (lezioni.length) {
      const ol = el("ol", { class: "lezioni" });
      lezioni.forEach((lez, i) => {
        const titolo = lez.link
          ? el("a", { href: BASE + lez.link }, lez.titolo)
          : lez.titolo;
        const li = el("li", { class: "lezione" },
          el("p", { class: "numero-lezione" },
            "Lezione " + (i + 1) + (lez.pagine ? ", " + (/[–-]/.test(lez.pagine) ? "pp. " : "p. ") + lez.pagine : "")),
          el("h4", null, titolo),
          lez.descrizione ? el("p", { class: "descr-lezione" }, lez.descrizione) : null);
        const att = lez.attivita || [];
        if (att.length) {
          const ul = el("ul", { class: "attivita-elenco" });
          att.forEach(a => ul.append(rigaAttivita(a)));
          li.append(ul);
        } else if (!lez.link) {
          li.append(el("p", { class: "attesa" }, "Attività in preparazione"));
        }
        ol.append(li);
      });
      dentro.append(ol);
    } else if (!(mod.attivita || []).length) {
      dentro.append(el("p", { class: "attesa" }, "Le lezioni di questo modulo sono in preparazione."));
    }

    if ((mod.attivita || []).length) {
      const ul = el("ul", { class: "attivita-elenco" });
      mod.attivita.forEach(a => ul.append(rigaAttivita(a)));
      dentro.append(el("div", { class: "fine-modulo" },
        el("h4", null, "Per tutto il modulo"), ul));
    }
    box.append(dentro);
    return box;
  }

  function disegna() {
    pulsanti.forEach(b => b.setAttribute("aria-pressed", b.dataset.classe === classe));
    const q = campo.value.trim().toLowerCase();
    const scelti = tutti
      .filter(m => classe === "tutte" || m.classe === classe)
      .map(m => filtra(m, q))
      .filter(Boolean);
    area.replaceChildren();
    if (!scelti.length) {
      area.append(el("p", { class: "vuoto" },
        tutti.length ? "Nessun materiale corrisponde ai filtri scelti." : "I materiali di questa materia arriveranno presto."));
      return;
    }
    for (const c of CLASSI) {
      const diClasse = scelti.filter(m => m.classe === c);
      if (!diClasse.length) continue;
      const gruppo = el("section", { class: "gruppo" }, el("h2", null, "Classe " + c));
      diClasse.forEach(m => gruppo.append(disegnaModulo(m, !!q)));
      area.append(gruppo);
    }
  }

  pulsanti.forEach(b => b.addEventListener("click", () => {
    classe = b.dataset.classe;
    const url = new URL(location);
    classe === "tutte" ? url.searchParams.delete("classe") : url.searchParams.set("classe", classe);
    history.replaceState(null, "", url);
    disegna();
  }));
  campo.addEventListener("input", disegna);
  disegna();

  const conUda = ELENCO_UDA.filter(u => (u.materie || []).includes(id));
  if (conUda.length) {
    const lista = el("ul", { class: "elenco" });
    area.after(el("section", { class: "gruppo sezione-uda" },
      el("h2", null, "UDA interdisciplinari"), lista));
    conUda.forEach(u => lista.append(schedaUda(u)));
  }
}

if (corpo.dataset.materia) paginaMateria(corpo.dataset.materia);
else home();
