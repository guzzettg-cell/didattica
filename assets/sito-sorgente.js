/* CODICE ORIGINALE del sito, scritto per i browser moderni.
   Il sito NON carica questo file: carica assets/sito.js, che è la stessa cosa
   convertita per funzionare anche nei browser vecchi. Dopo una modifica qui,
   va rigenerato assets/sito.js. */
const MATERIE = {
  "geografia":         { nome: "Geografia",         descr: "Come sono fatti i luoghi in cui viviamo? Come li trasformiamo e come ci influenzano?" },
  "storia":            { nome: "Storia",            descr: "Come vivevano le persone nel passato? Come è cambiato il mondo e perché?" },
  "italiano":          { nome: "Italiano",          descr: "Come possiamo capire e raccontare storie, idee ed emozioni? Come scegliamo le parole per farci capire?" },
  "educazione-civica": { nome: "Educazione civica", descr: "Come possiamo vivere bene insieme? Quali diritti e responsabilità abbiamo?" }
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

const ELENCO_MODULI = typeof MODULI !== "undefined" ? MODULI.filter(function (m) { return m.attivo !== false; }) : [];
const nomeModulo = mod => (mod.etichetta ? mod.etichetta + " – " : mod.numero ? "Modulo " + mod.numero + " – " : "") + mod.titolo;

/* ---------- segno delle lezioni nella programmazione di dipartimento ---------- */
function segnoDipartimento(lez) {
  if (!lez.dipartimento) return null;
  const altra = typeof lez.dipartimento === "string";
  return el("span", {
    class: "dip",
    title: altra ? "Argomento della programmazione di dipartimento di " + lez.dipartimento
                 : "Argomento della programmazione di dipartimento"
  }, "◆ Programma di dipartimento" + (altra ? " (" + lez.dipartimento + ")" : ""));
}

/* ---------- etichette dei libri (definite in materiali.js, in LIBRI) ---------- */
const ELENCO_LIBRI = typeof LIBRI !== "undefined" ? LIBRI : {};
const libriDi = x => ((x && x.libri) || []).filter(id => ELENCO_LIBRI[id]);
function etichetteLibri(ids) {
  if (!ids.length) return null;
  const p = el("p", { class: "libri" });
  ids.forEach(id => p.append(el("span", {
    class: "libro",
    style: `--lc: ${ELENCO_LIBRI[id].colore || "#555"}`,
    title: "Lezione che parte dal libro " + ELENCO_LIBRI[id].nome
  }, ELENCO_LIBRI[id].nome)));
  return p;
}

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
        dove.filter(Boolean).join(", ")),
      etichetteLibri(libriDi(a.lez || a))
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
  if (u.standby) etichette.append(el("span", { class: "segno-standby" }, "In revisione"));
  return el("li", u.standby
      ? { class: "voce uda in-standby", title: "UDA in revisione: per ora non è disponibile" }
      : { class: "voce uda" },
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
  griglia.innerHTML = "";
  for (const [id, info] of Object.entries(MATERIE)) {
    const anni = el("nav", { class: "materia-classi", "aria-label": "Anni di " + info.nome });
    CLASSI.forEach(classe => anni.append(el("a", {
      href: id + "/index.html?classe=" + classe,
      "aria-label": info.nome + ": classe " + classe
    }, maiuscola(classe))));
    griglia.append(el("article", { class: "materia", style: `--c: var(--${id})` },
      el("h3", null, info.nome), el("p", null, info.descr), anni));
  }
  elencoUda(document.getElementById("uda"), () => true, "Le UDA interdisciplinari arriveranno presto.");

  const recenti = document.getElementById("recenti");
  const lezioniConPagina = ELENCO_MODULI.filter(function (m) { return !m.standby; }).flatMap(mod =>
    (mod.lezioni || []).filter(l => l.link).map(l => ({ ...l, tipo: "Lezione", mod, lez: null })));
  const ordinati = [...lezioniConPagina, ...tutteLeAttivita(ELENCO_MODULI.filter(function (m) { return !m.standby; }))]
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
  /* il filtro di classe si ricorda durante la visita: tornando da una lezione all'indice resta quello scelto */
  const leggiClasse = () => { try { return sessionStorage.getItem("filtro-classe"); } catch (e) { return null; } };
  const salvaClasse = c => { try { sessionStorage.setItem("filtro-classe", c); } catch (e) {} };
  let classe = new URLSearchParams(location.search).get("classe") || leggiClasse() || "tutte";
  if (classe !== "tutte" && !new URLSearchParams(location.search).get("classe")) {
    const u0 = new URL(location); u0.searchParams.set("classe", classe); history.replaceState(null, "", u0);
  }
  let libro = new URLSearchParams(location.search).get("libro") || "tutti";
  /* numero originale di ogni lezione, che resta uguale anche quando si filtra */
  tutti.forEach(m => (m.lezioni || []).forEach((l, i) => { l._posizione = i + 1; }));

  /* pulsanti dei libri: solo quelli usati in questa materia */
  const libriUsati = Object.keys(ELENCO_LIBRI).filter(idL =>
    tutti.some(m => (m.lezioni || []).some(l => libriDi(l).includes(idL))));
  if (!libriUsati.includes(libro)) libro = "tutti";
  let pulsantiLibro = [];
  if (libriUsati.length) {
    const gruppoLibri = el("div", { class: "classi libri-filtro", role: "group", "aria-label": "Filtra per libro" },
      el("span", { class: "etichetta-filtro" }, "Libro:"),
      el("button", { type: "button", "data-libro": "tutti" }, "Tutti"));
    libriUsati.forEach(idL => gruppoLibri.append(
      el("button", { type: "button", "data-libro": idL, style: `--lc: ${ELENCO_LIBRI[idL].colore || "#555"}` }, ELENCO_LIBRI[idL].nome)));
    campo.before(gruppoLibri);
    pulsantiLibro = gruppoLibri.querySelectorAll("button");
    pulsantiLibro.forEach(b => b.addEventListener("click", () => {
      libro = b.dataset.libro;
      const url = new URL(location);
      libro === "tutti" ? url.searchParams.delete("libro") : url.searchParams.set("libro", libro);
      history.replaceState(null, "", url);
      disegna();
    }));
  }
  /* Il programma di dipartimento resta un'indicazione delle singole lezioni. */
  function aggiornaFiltri() {
    var libroUnico = id === "geografia" && (classe === "prima" || classe === "seconda");
    var gruppoLibri = document.querySelector(".libri-filtro");
    if (gruppoLibri) gruppoLibri.style.display = libroUnico ? "none" : "";
    var url = new URL(location);
    var daAggiornare = url.searchParams.has("dipartimento");
    url.searchParams.delete("dipartimento");
    if (libroUnico) {
      libro = "tutti";
      daAggiornare = daAggiornare || url.searchParams.has("libro");
      url.searchParams.delete("libro");
    }
    if (daAggiornare) history.replaceState(null, "", url);
  }
  /* Tiene solo le lezioni del libro scelto. */
  function perLibro(mod) {
    if (libro === "tutti") return mod;
    const lezioni = (mod.lezioni || []).filter(l =>
      (libro === "tutti" || libriDi(l).includes(libro)));
    /* un modulo senza lezioni (solo attività, come l'introduzione) resta se il libro è del modulo */
    if (!(mod.lezioni || []).length) return libriDi(mod).includes(libro) ? mod : null;
    return lezioni.length ? { ...mod, lezioni } : null;
  }
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
    if (mod.standby) {
      return el("div", { class: "modulo modulo-in-standby", "aria-disabled": "true" },
        el("div", { class: "modulo-sospeso" },
          el("span", { class: "numero-modulo" }, mod.etichetta || (mod.numero ? "Modulo " + mod.numero : "Modulo")),
          el("span", { class: "titolo-modulo" }, mod.titolo),
          el("span", { class: "segno-standby" }, "In revisione")));
    }

    const lezioni = mod.lezioni || [];

    const chiave = idModulo(mod);


    const box = el("details", { class: "modulo", id: chiave });
    if (cercando || aperti.has(chiave)) box.open = true;
    box.addEventListener("toggle", () => {
      if (cercando) return;
      box.open ? aperti.add(chiave) : aperti.delete(chiave);
    });

    box.append(el("summary", null,
      el("span", { class: "numero-modulo" }, mod.etichetta || (mod.numero ? "Modulo " + mod.numero : "Modulo")),
      mod.link && !mod.revisione
        ? el("a", { class: "titolo-modulo", href: BASE + mod.link, title: "Apri la pagina del modulo" }, mod.titolo)
        : el("span", { class: "titolo-modulo" }, mod.titolo),
      mod.revisione ? el("span", { class: "segno-standby" }, "In revisione") : null
    ));

    const dentro = el("div", { class: "contenuto-modulo" });
    if (mod.descrizione) dentro.append(el("p", { class: "descr-modulo" }, mod.descrizione));

    if (lezioni.length) {
      const ol = el("ol", { class: "lezioni" });
      lezioni.forEach((lez, i) => {
        const titolo = lez.link
          ? el("a", { href: BASE + lez.link }, lez.titolo)
          : lez.titolo;
        const li = el("li", lez.standby
            ? { class: "lezione in-standby", title: "Lezione in revisione: per ora non è disponibile" }
            : { class: "lezione" },
          el("p", { class: "numero-lezione" },
            "Lezione " + (lez._posizione || i + 1) + (lez.pagine ? ", " + (/[–-]/.test(lez.pagine) ? "pp. " : "p. ") + lez.pagine : ""),
            segnoDipartimento(lez),
            lez.standby ? el("span", { class: "segno-standby" }, "In revisione") : null),
          el("h4", null, titolo),
          etichetteLibri(libriDi(lez)),
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
      dentro.append(el("div", { class: "fine-modulo" + (mod.revisione ? " in-standby" : "") },
        el("h4", null, (mod.lezioni || []).length ? "Per tutto il modulo" : "Attività"), ul));
    }
    box.append(dentro);
    return box;
  }

  function aggiungiPercorsi(gruppo, moduli, cercando) {
    if (id !== "geografia") {
      moduli.forEach(function (m) { gruppo.append(disegnaModulo(m, cercando)); });
      return;
    }
    var anno = moduli[0].classe;
    var territori = {
      prima: "L’Italia e le sue regioni",
      seconda: "L’Europa e i suoi Stati",
      terza: "I continenti e gli Stati del mondo"
    };
    var percorsi = [
      { id: "come", titolo: "Come", sottotitolo: "Gli strumenti per capire", descrizione: "Strumenti e concetti per leggere paesaggi e territori." },
      { id: "cosa", titolo: "Cosa", sottotitolo: territori[anno], descrizione: "Mettiamo in pratica quello che abbiamo imparato per conoscere i territori." },
      { id: "roma", titolo: "Alla scoperta di Roma", sottotitolo: "La geografia sul campo", descrizione: "Osserviamo la città, raccogliamo informazioni e costruiamo un atlante dei quartieri." }
    ];
    /* i moduli di introduzione (percorso: "intro") stanno in cima, da soli, senza titolo di sezione */
    moduli.filter(function (m) { return m.percorso === "intro"; }).forEach(function (m) { gruppo.append(disegnaModulo(m, cercando)); });
    percorsi.forEach(function (percorso) {
      var scelti = moduli.filter(function (m) { return (m.percorso || "come") === percorso.id; });
      if (!scelti.length) return;
      var titoloId = "percorso-" + anno + "-" + percorso.id;
      var sezione = el("section", { class: "percorso-geografia" + (scelti.every(function (m) { return m.standby; }) ? " percorso-in-standby" : ""), "aria-labelledby": titoloId },
        el("h3", { id: titoloId }, percorso.titolo),
        el("p", { class: "percorso-sottotitolo" }, percorso.sottotitolo),
        el("p", { class: "percorso-descrizione" }, percorso.descrizione));
      scelti.forEach(function (m) { sezione.append(disegnaModulo(m, cercando)); });
      gruppo.append(sezione);
    });
  }

  function disegna() {
    aggiornaFiltri();
    pulsanti.forEach(b => b.setAttribute("aria-pressed", b.dataset.classe === classe));
    pulsantiLibro.forEach(b => b.setAttribute("aria-pressed", b.dataset.libro === libro));
    const q = campo.value.trim().toLowerCase();
    const scelti = tutti
      .filter(m => classe === "tutte" || m.classe === classe)
      .map(perLibro)
      .filter(Boolean)
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
      aggiungiPercorsi(gruppo, diClasse, !!q || libro !== "tutti");
      area.append(gruppo);
    }
  }

  pulsanti.forEach(b => b.addEventListener("click", () => {
    classe = b.dataset.classe;
    salvaClasse(classe);
    const url = new URL(location);
    classe === "tutte" ? url.searchParams.delete("classe") : url.searchParams.set("classe", classe);
    history.replaceState(null, "", url);
    disegna();
  }));
  campo.addEventListener("input", disegna);
  disegna();
  /* il #modulo-... serve solo ad aprire il modulo all'arrivo: si scorre fin lì e poi si toglie dall'indirizzo */
  if (location.hash) {
    const arrivo = document.getElementById(location.hash.slice(1));
    if (arrivo) arrivo.scrollIntoView();
    try { const u = new URL(location); u.hash = ""; history.replaceState(null, "", u.href.replace(/#$/, "")); } catch (e) { }
  }

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
