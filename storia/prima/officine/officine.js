/* =============================================================
   OFFICINE DELLO STORICO · codice comune a tutte le officine
   L'elenco delle officine NON è qui: è in materiali.js.
   Un'officina è una lezione di storia di prima con la riga
       officina: 3,
   (il numero dell'officina) e la riga
       parte: "att-fonti",
   (icona e colore: una delle chiavi di PARTI qui sotto).
   Quando la lezione ha la riga link, l'officina è «aperta»:
   compare nell'indice, nei rimandi avanti e indietro e nella
   striscia in cima a ogni officina. Senza link resta «in arrivo».
   ============================================================= */
(function () {
  "use strict";
  var BASE = "../../../";

  /* icone e colori: gli stessi delle parti della lezione e delle cinque attività */
  var SVG = {
    officina: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    lente: '<circle cx="10.5" cy="10.5" r="6"/><path d="M20 20l-5.2-5.2"/>',
    calendario: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="M9 14.5h2v3M13.5 14.5h2l-1.5 3"/>',
    carta: '<path d="M3 6.5l6-2 6 2 6-2v13l-6 2-6-2-6 2z"/><path d="M9 4.5v13M15 6.5v13"/>',
    lucchetto: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 7.6-1.8"/><circle cx="12" cy="15.5" r="1.3"/><path d="M12 16.8v1.7"/>',
    libro: '<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3"/><path d="M9 7h6M9 10.5h6"/>',
    foglio: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    persone: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.2a4.6 4.6 0 0 1 5 5.3"/>',
    domanda: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.4c-.6.3-1 .9-1 1.6v.6"/><circle cx="12" cy="17" r=".7" fill="currentColor"/>',
    orologio: '<path d="M3.5 12a8.5 8.5 0 1 0 2.5-6"/><path d="M3 4v4.5h4.5"/><path d="M12 7.5V12l3 2"/>',
    chiave: '<circle cx="7.5" cy="15.5" r="4"/><path d="M10.5 12.5L19 4M15.5 7.5l3 3M13 10l2 2"/>',
    schema: '<rect x="9" y="2.5" width="6" height="4.5" rx="1"/><rect x="3" y="15" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M12 7v4M6 15v-4h12v4"/>',
    freccia: '<path d="M4 12h14"/><path d="M13 6l6 6-6 6"/>',
    matita: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    idea: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z"/>'
  };
  var PARTI = {
    "officina":        { c: "#46525a", i: "officina",   n: "Il mestiere dello storico" },
    "attivita":        { c: "#b0215f", i: "lente",      n: "Le cinque attività dello storico" },
    "att-tempo":       { c: "#2a7f6f", i: "calendario", n: "Collocare nel tempo" },
    "att-spazio":      { c: "#b25510", i: "carta",      n: "Collocare nello spazio" },
    "att-fonti":       { c: "#55800f", i: "lucchetto",  n: "Leggere le fonti" },
    "cosa-quando":     { c: "#2a7f6f", i: "calendario", n: "Cosa imparerai – Quando?" },
    "cosa-dove":       { c: "#2a7f6f", i: "carta",      n: "Cosa imparerai – Dove?" },
    "ti-ricordi":      { c: "#3a6ea5", i: "orologio",   n: "Ti ricordi?" },
    "chi-incontrerai": { c: "#8a6a00", i: "persone",    n: "Chi incontrerai?" },
    "leggiamo":        { c: "#2b5f6b", i: "foglio",     n: "Leggiamo" },
    "perche":          { c: "#b25510", i: "domanda",    n: "Perché?" },
    "come":            { c: "#4757a8", i: "schema",     n: "Come?" },
    "quali-idee":      { c: "#55800f", i: "chiave",     n: "Quali idee?" },
    "quali-parole":    { c: "#6b3f8a", i: "libro",      n: "Quali parole?" },
    "fonti":           { c: "#b0215f", i: "lente",      n: "Che cosa dicono le fonti?" },
    "ripassiamo":      { c: "#7a4b1c", i: "matita",     n: "Ripassiamo" },
    "e-dopo":          { c: "#2b5f6b", i: "freccia",    n: "E dopo?" }
  };
  function parte(k) { return PARTI[k] || PARTI.officina; }
  function icona(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + SVG[parte(k).i] + '</svg>'; }

  /* tutte le officine, in ordine di numero, lette da materiali.js */
  function elenco() {
    var out = [];
    if (typeof MODULI === "undefined") return out;
    MODULI.forEach(function (m) {
      if (m.materia !== "storia" || m.classe !== "prima") return;
      (m.lezioni || []).forEach(function (l) {
        if (typeof l.officina !== "number") return;
        out.push({
          n: l.officina,
          titolo: String(l.titolo || "").replace(/^Officina\s+\d+\s*[·:–-]\s*/, ""),
          descrizione: l.descrizione || "",
          parte: l.parte || "officina",
          link: l.link ? BASE + l.link : null,
          modulo: m
        });
      });
    });
    out.sort(function (a, b) { return a.n - b.n; });
    return out;
  }
  function trova(lista, n) { for (var i = 0; i < lista.length; i++) if (lista[i].n === n) return i; return -1; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function tondo(o) { return '<span class="tondo" style="--c:' + parte(o.parte).c + '">' + icona(o.parte) + '</span>'; }

  /* striscia in cima: un tondo per ogni officina, colorato se è aperta */
  function striscia(box, lista, cur) {
    var aperte = lista.filter(function (o) { return o.link; }).length;
    var h = '<p class="striscia-titolo"><a href="index.html">Le officine dello storico</a> · ' +
      aperte + (aperte === 1 ? " aperta" : " aperte") + " su " + lista.length + '</p><ol class="striscia">';
    lista.forEach(function (o) {
      var c = parte(o.parte).c, t = "Officina " + o.n + " · " + o.titolo + (o.link ? "" : " (in arrivo)");
      var cls = (o.n === cur ? "qui " : "") + (o.link ? "aperta" : "chiusa");
      h += '<li class="' + cls + '" style="--c:' + c + '">' + (o.link && o.n !== cur
        ? '<a href="' + esc(o.link) + '" title="' + esc(t) + '" aria-label="' + esc(t) + '">' + o.n + '</a>'
        : '<span title="' + esc(t) + '"' + (o.n === cur ? ' aria-current="page"' : '') + '>' + o.n + '</span>') + '</li>';
    });
    box.innerHTML = h + "</ol>";
  }

  /* in fondo: officina precedente e successiva */
  function scheda(o, verso) {
    var lab = verso === "prima" ? "← Officina precedente" : "Officina successiva →";
    if (!o) return '<div class="naviga-vuoto"></div>';
    var dentro = tondo(o) + '<span class="naviga-testo"><span class="naviga-lab">' + lab +
      (o.link ? "" : " · in arrivo") + '</span><span class="naviga-tit">' + o.n + " · " + esc(o.titolo) + "</span></span>";
    return o.link
      ? '<a class="naviga-scheda ' + verso + '" href="' + esc(o.link) + '">' + dentro + "</a>"
      : '<div class="naviga-scheda ' + verso + ' chiusa">' + dentro + "</div>";
  }
  function naviga(box, lista, cur) {
    var i = trova(lista, cur);
    box.innerHTML = '<nav class="naviga-officine" aria-label="Le altre officine">' +
      scheda(i > 0 ? lista[i - 1] : null, "prima") +
      '<a class="naviga-tutte" href="index.html">Tutte le officine</a>' +
      scheda(i >= 0 && i < lista.length - 1 ? lista[i + 1] : null, "dopo") + "</nav>";
  }

  /* rimandi dentro il testo: <span data-officina-link="4"></span> */
  function rimando(sp, lista) {
    var i = trova(lista, Number(sp.getAttribute("data-officina-link")));
    if (i < 0) return;
    var o = lista[i], t = "officina " + o.n + " · " + o.titolo;
    sp.innerHTML = o.link ? '<a href="' + esc(o.link) + '">' + esc(t) + "</a>" : esc(t) + ' <em class="in-arrivo">(in arrivo)</em>';
  }

  /* l'indice di tutte le officine, raggruppate per modulo */
  function indice(box, lista) {
    if (!lista.length) { box.innerHTML = '<p class="attesa">L\'elenco delle officine non si è caricato. Ricarica la pagina.</p>'; return; }
    var h = "", gruppo = null, aperte = lista.filter(function (o) { return o.link; }).length;
    var cont = document.querySelector("[data-officine-conta]");
    if (cont) cont.textContent = aperte + (aperte === 1 ? " officina aperta" : " officine aperte") + " su " + lista.length;
    lista.forEach(function (o) {
      if (o.modulo !== gruppo) {
        if (gruppo) h += "</ol></section>";
        gruppo = o.modulo;
        var tit = o.modulo.numero ? "All'inizio del modulo " + o.modulo.numero : "Prima di cominciare";
        var sot = o.modulo.numero ? o.modulo.titolo : "Settembre–ottobre, prima del modulo I";
        h += '<section class="gruppo-officine"><h2>' + esc(tit) + '</h2><p class="gruppo-sotto">' + esc(sot) + '</p><ol class="officine-schede">';
      }
      var p = parte(o.parte);
      var corpo = tondo(o) + '<span class="os-testo"><span class="os-num">Officina ' + o.n +
        (o.link ? "" : ' · <span class="in-arrivo">in arrivo</span>') + '</span><span class="os-tit">' + esc(o.titolo) +
        '</span><span class="os-descr">' + esc(o.descrizione) + '</span><span class="os-prepara">Prepara: <strong>' + esc(p.n) + "</strong></span></span>";
      h += '<li class="' + (o.link ? "aperta" : "chiusa") + '" style="--c:' + p.c + '">' +
        (o.link ? '<a href="' + esc(o.link) + '">' + corpo + "</a>" : "<div>" + corpo + "</div>") + "</li>";
    });
    box.innerHTML = h + "</ol></section>";
  }

  window.Officine = { PARTI: PARTI, icona: icona, elenco: elenco };

  function avvia() {
    var lista = elenco();
    Array.prototype.forEach.call(document.querySelectorAll("[data-officine]"), function (box) {
      var cur = Number(box.getAttribute("data-corrente"));
      var tipo = box.getAttribute("data-officine");
      if (tipo === "striscia") striscia(box, lista, cur);
      else if (tipo === "naviga") naviga(box, lista, cur);
      else if (tipo === "indice") indice(box, lista);
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-officina-link]"), function (sp) { rimando(sp, lista); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", avvia); else avvia();
})();
