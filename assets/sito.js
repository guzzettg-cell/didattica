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

function voce(m, conMateria) {
  const dettagli = [maiuscola(m.classe)];
  if (conMateria) dettagli.unshift(MATERIE[m.materia]?.nome || m.materia);
  if (m.unita) dettagli.push(m.unita);
  return el("li", { class: "voce", style: `--c: var(--${m.materia})` },
    el("a", { href: BASE + m.link },
      el("h3", null, m.titolo),
      m.descrizione ? el("p", null, m.descrizione) : null,
      el("p", { class: "dettagli" }, el("span", { class: "tipo" }, m.tipo || "Materiale"), dettagli.join(", "))
    )
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
    const n = MATERIALI.filter(m => m.materia === id).length;
    griglia.append(el("a", { class: "materia", href: id + "/", style: `--c: var(--${id})` },
      el("h3", null, info.nome),
      el("p", null, info.descr),
      el("p", { class: "conta" }, n === 0 ? "Materiali in arrivo" : n === 1 ? "1 materiale" : n + " materiali")
    ));
  }
  elencoUda(document.getElementById("uda"), () => true, "Le UDA interdisciplinari arriveranno presto.");

  const recenti = document.getElementById("recenti");
  const ordinati = [...MATERIALI].sort((a, b) => (b.data || "").localeCompare(a.data || "")).slice(0, 6);
  if (!ordinati.length) recenti.replaceWith(el("p", { class: "vuoto" }, "Non ci sono ancora materiali. Aggiungili nel file materiali.js."));
  else ordinati.forEach(m => recenti.append(voce(m, true)));
}

/* ---------- pagina di una materia ---------- */
function paginaMateria(id) {
  const tutti = MATERIALI.filter(m => m.materia === id);
  const area = document.getElementById("materiali");
  const campo = document.getElementById("cerca");
  const pulsanti = document.querySelectorAll(".classi button");
  let classe = new URLSearchParams(location.search).get("classe") || "tutte";

  function disegna() {
    pulsanti.forEach(b => b.setAttribute("aria-pressed", b.dataset.classe === classe));
    const q = campo.value.trim().toLowerCase();
    const scelti = tutti.filter(m =>
      (classe === "tutte" || m.classe === classe) &&
      (!q || [m.titolo, m.descrizione, m.unita, m.tipo].join(" ").toLowerCase().includes(q))
    );
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
      const unita = [...new Set(diClasse.map(m => m.unita || "Altri materiali"))];
      for (const u of unita) {
        const lista = el("ul", { class: "elenco" });
        diClasse.filter(m => (m.unita || "Altri materiali") === u).forEach(m => lista.append(voce(m, false)));
        gruppo.append(el("h3", { class: "unita" }, u), lista);
      }
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
