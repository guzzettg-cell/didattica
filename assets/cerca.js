/* =============================================================
   RICERCA NEL SITO · assets/cerca.js (usato da cerca.html)
   Cerca in due posti:
   1. il catalogo (materiali.js): moduli, lezioni, attività, UDA;
   2. il testo delle pagine (assets/indice-ricerca.js, generato da
      strumenti/crea-indice-ricerca.py).
   Scritto senza funzioni moderne, così funziona anche nei browser vecchi.
   ============================================================= */
(function () {
  "use strict";
  var MATERIE = {
    "geografia": "Geografia", "storia": "Storia", "italiano": "Italiano",
    "educazione-civica": "Educazione civica", "uda": "UDA interdisciplinari"
  };
  var ORDINE_MATERIE = ["geografia", "storia", "italiano", "educazione-civica", "uda"];
  var CLASSI = ["prima", "seconda", "terza"];
  var PESO = { titolo: 12, descr: 5, percorso: 4, titoletti: 4, testo: 1 };
  var VUOTE = {};
  ("il lo la i gli le un uno una un' l' d' di a da in con su per tra fra e ed o od che chi cui non " +
   "del dello della dei degli delle al allo alla ai agli alle dal dallo dalla dai dagli dalle " +
   "nel nello nella nei negli nelle sul sullo sulla sui sugli sulle col coi e' come cosa piu " +
   "anche ma se si ci ne mi ti vi suo sua suoi sue loro questo questa questi queste quello quella " +
   "sono essere ha hanno era fu sia ad").split(" ").forEach(function (w) { VUOTE[w] = true; });

  /* ---------- testo: minuscole senza accenti (stessa lunghezza dell'originale) ---------- */
  var ACCENTI = { "à": "a", "á": "a", "â": "a", "ä": "a", "ã": "a", "å": "a", "è": "e", "é": "e", "ê": "e", "ë": "e",
    "ì": "i", "í": "i", "î": "i", "ï": "i", "ò": "o", "ó": "o", "ô": "o", "ö": "o", "õ": "o", "ù": "u", "ú": "u",
    "û": "u", "ü": "u", "ç": "c", "ñ": "n", "’": "'", "‘": "'" };
  function norm(s) {
    s = String(s || "").toLowerCase();
    var out = "";
    for (var i = 0; i < s.length; i++) { var c = s.charAt(i); out += ACCENTI[c] || c; }
    return out;
  }
  function parole(s) { return norm(s).split(/[^a-z0-9]+/).filter(function (w) { return w.length > 0; }); }
  /* radice: «clima» e «climi», «carta» e «carte», «luogo» e «luoghi» diventano uguali */
  function radice(w) {
    if (w.length <= 3 || /^[0-9]+$/.test(w)) return w;
    if (/[aeiou]$/.test(w) && w.length > 4) {
      w = w.slice(0, -1);
      if (/[cg]h$/.test(w)) w = w.slice(0, -1);
      if (/[aeiou]$/.test(w) && w.length > 5 && !/i$/.test(w)) w = w.slice(0, -1);
    }
    return w;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  /* ---------- i documenti ---------- */
  var DOC = [];
  var perLink = {};
  var nomeModulo = function (m) { return (m.numero ? "Modulo " + m.numero + " – " : "") + m.titolo; };
  var idModulo = function (m) { return ["modulo", m.classe, m.numero || m.titolo].join("-").toLowerCase().replace(/[^a-z0-9-]+/g, "-"); };
  function pulisciLink(l) { return String(l || "").split("#")[0].split("?")[0]; }
  function esterno(l) { return /^(https?:)?\/\//i.test(l || ""); }

  function nuovo(d) {
    d.i = DOC.length; DOC.push(d);
    if (d.proprio && d.link && !esterno(d.link)) perLink[pulisciLink(d.link)] = d;
    return d;
  }
  var GRADO = { "Modulo": 1, "Lezione": 2 };
  function daCatalogo(voce) {
    /* se la pagina c'è già, la si arricchisce con i dati del catalogo */
    /* solo le voci che hanno una pagina loro (non il rimando alla pagina della materia) */
    var k = voce.proprio && voce.link && !esterno(voce.link) ? pulisciLink(voce.link) : null;
    var d = k && perLink[k];
    if (d) {
      d.altriTitoli.push(voce.titolo);
      if (voce.descr) d.descrCat.push(voce.descr);
      var g = GRADO[voce.tipo] || 3, g0 = d.catalogo ? (GRADO[d.tipo] || 3) : 0;
      if (g >= g0) { d.tipo = voce.tipo; d.percorso = voce.percorso; d.materia = voce.materia; d.classe = voce.classe; d.catalogo = true; d.data = voce.data || d.data; }
      return;
    }
    voce.altriTitoli = []; voce.descrCat = voce.descr ? [voce.descr] : []; voce.catalogo = true;
    nuovo(voce);
  }
  function caricaCatalogo() {
    var mod = typeof MODULI !== "undefined" ? MODULI : [];
    var uda = typeof UDA !== "undefined" ? UDA : [];
    for (var i = 0; i < mod.length; i++) {
      var m = mod[i], mat = MATERIE[m.materia] ? m.materia : null;
      var base = [MATERIE[mat] || "", m.classe || ""];
      var ancora = mat + "/index.html" + (m.classe ? "?classe=" + m.classe : "") + "#" + idModulo(m);
      daCatalogo({ tipo: "Modulo", titolo: nomeModulo(m), descr: m.descrizione, link: m.link || ancora, proprio: !!m.link,
        materia: mat, classe: m.classe, percorso: base });
      var lez = m.lezioni || [];
      for (var j = 0; j < lez.length; j++) {
        var l = lez[j];
        daCatalogo({ tipo: "Lezione", titolo: l.titolo, descr: l.descrizione, link: l.link || ancora, proprio: !!l.link,
          materia: mat, classe: m.classe, percorso: base.concat([nomeModulo(m)]), data: l.data });
        var att = l.attivita || [];
        for (var k = 0; k < att.length; k++) {
          var a = att[k];
          daCatalogo({ tipo: a.tipo || "Attività", titolo: a.titolo, descr: a.descrizione, link: a.link || l.link || ancora, proprio: !!(a.link || l.link),
            materia: mat, classe: m.classe, percorso: base.concat([nomeModulo(m), l.titolo]), data: a.data });
        }
      }
      var fin = m.attivita || [];
      for (var f = 0; f < fin.length; f++) {
        var b = fin[f];
        daCatalogo({ tipo: b.tipo || "Attività", titolo: b.titolo, descr: b.descrizione, link: b.link || ancora, proprio: !!b.link,
          materia: mat, classe: m.classe, percorso: base.concat([nomeModulo(m), "Per tutto il modulo"]), data: b.data });
      }
    }
    for (var u = 0; u < uda.length; u++) {
      var x = uda[u];
      daCatalogo({ tipo: "UDA", titolo: x.titolo, descr: x.descrizione, link: x.link || "index.html#uda", proprio: !!x.link,
        materia: "uda", classe: x.classe, percorso: ["UDA interdisciplinari", x.classe || ""], data: x.data });
    }
  }
  function caricaPagine() {
    var ind = typeof INDICE_RICERCA !== "undefined" ? INDICE_RICERCA : null;
    if (!ind) return null;
    var p = ind.pagine || [];
    for (var i = 0; i < p.length; i++) {
      var q = p[i], pezzi = q.u.split("/");
      var mat = MATERIE[pezzi[0]] ? pezzi[0] : null;
      nuovo({ tipo: "Pagina", titolo: q.t || q.u, link: q.u, descr: q.d || "", titoletti: q.h || [], testo: q.x || "",
        materia: mat, classe: CLASSI.indexOf(pezzi[1]) >= 0 ? pezzi[1] : null,
        percorso: [MATERIE[mat] || "", CLASSI.indexOf(pezzi[1]) >= 0 ? pezzi[1] : ""],
        altriTitoli: [], descrCat: [], catalogo: false, proprio: true });
    }
    return ind;
  }

  /* ---------- l'indice delle parole ---------- */
  var VOC = {}, CHIAVI = [];
  function indicizza() {
    for (var i = 0; i < DOC.length; i++) {
      var d = DOC[i], migliore = {}, conta = {};
      var campi = [
        ["titolo", [d.titolo].concat(d.altriTitoli).join(" ")],
        ["descr", [d.descr].concat(d.descrCat).join(" ")],
        ["percorso", (d.percorso || []).join(" ") + " " + (d.tipo || "")],
        ["titoletti", (d.titoletti || []).join(" ")],
        ["testo", d.testo || ""]
      ];
      for (var c = 0; c < campi.length; c++) {
        var peso = PESO[campi[c][0]], ws = parole(campi[c][1]);
        for (var w = 0; w < ws.length; w++) {
          var r = radice(ws[w]);
          if (!migliore[r] || migliore[r] < peso) migliore[r] = peso;
          if (campi[c][0] === "testo") conta[r] = (conta[r] || 0) + 1;
        }
      }
      for (var key in migliore) {
        if (!migliore.hasOwnProperty(key)) continue;
        var punti = migliore[key] + Math.min(3, Math.log(1 + (conta[key] || 0)) / Math.LN2);
        (VOC[key] || (VOC[key] = [])).push([i, punti]);
      }
      d.nTitolo = " " + parole(d.titolo).join(" ") + " ";
      d.nTesto = " " + parole(d.testo || "").join(" ") + " ";
    }
    CHIAVI = Object.keys(VOC).sort();
  }
  function conPrefisso(p) {
    var lo = 0, hi = CHIAVI.length;
    while (lo < hi) { var mid = (lo + hi) >> 1; if (CHIAVI[mid] < p) lo = mid + 1; else hi = mid; }
    var out = [];
    for (var i = lo; i < CHIAVI.length && CHIAVI[i].indexOf(p) === 0; i++) out.push(CHIAVI[i]);
    return out;
  }

  /* ---------- la ricerca ---------- */
  function termini(q) {
    var tutte = parole(q), utili = tutte.filter(function (w) { return !VUOTE[w]; });
    if (!utili.length) utili = tutte;
    var visti = {}, out = [];
    for (var i = 0; i < utili.length; i++) {
      var r = radice(utili[i]);
      if (!visti[r]) { visti[r] = true; out.push({ parola: utili[i], radice: r }); }
    }
    return out;
  }
  function cerca(q) {
    var T = termini(q);
    if (!T.length) return { risultati: [], termini: T, tutte: true };
    var punteggi = [];
    for (var t = 0; t < T.length; t++) {
      var r = T[t].radice, p = {};
      var chiavi = r.length >= 3 ? conPrefisso(r) : (VOC[r] ? [r] : []);
      for (var k = 0; k < chiavi.length; k++) {
        var esatta = chiavi[k] === r, molt = esatta ? 1 : (chiavi[k].length - r.length <= 3 ? 0.8 : 0.55);
        var post = VOC[chiavi[k]];
        for (var j = 0; j < post.length; j++) {
          var v = post[j][1] * molt;
          if (!p[post[j][0]] || p[post[j][0]] < v) p[post[j][0]] = v;
        }
      }
      punteggi.push(p);
    }
    function unisci(tutte) {
      var tot = {};
      for (var t2 = 0; t2 < punteggi.length; t2++) {
        for (var id in punteggi[t2]) {
          if (!punteggi[t2].hasOwnProperty(id)) continue;
          tot[id] = tot[id] || { s: 0, n: 0 };
          tot[id].s += punteggi[t2][id]; tot[id].n++;
        }
      }
      var out = [], frase = " " + parole(q).join(" ") + " ";
      for (var id2 in tot) {
        if (!tot.hasOwnProperty(id2)) continue;
        if (tutte && tot[id2].n < punteggi.length) continue;
        var d = DOC[id2], s = tot[id2].s + tot[id2].n * 2;
        if (frase.length > 5 && T.length > 1) {
          if (d.nTitolo.indexOf(frase) >= 0) s += 15;
          else if (d.nTesto.indexOf(frase) >= 0) s += 6;
        }
        if (d.catalogo) s += 1;
        out.push({ d: d, s: s });
      }
      out.sort(function (a, b) { return b.s - a.s || (a.d.titolo < b.d.titolo ? -1 : 1); });
      return out;
    }
    var ris = unisci(true), tutte = true;
    if (!ris.length && T.length > 1) { ris = unisci(false); tutte = false; }
    return { risultati: ris, termini: T, tutte: tutte };
  }

  /* ---------- estratto con le parole evidenziate ---------- */
  function regTermini(T) {
    return new RegExp("(^|[^a-z0-9])(" + T.map(function (t) { return escRe(t.radice); }).join("|") + ")[a-z0-9]*", "g");
  }
  function evidenzia(orig, T) {
    var n = norm(orig), re = regTermini(T), out = "", pos = 0, m;
    while ((m = re.exec(n))) {
      var a = m.index + m[1].length, b = m.index + m[0].length;
      out += esc(orig.slice(pos, a)) + "<mark>" + esc(orig.slice(a, b)) + "</mark>";
      pos = b;
      if (re.lastIndex === m.index) re.lastIndex++;
    }
    return out + esc(orig.slice(pos));
  }
  function estratto(d, T) {
    var fonti = [d.testo || "", [d.descr].concat(d.descrCat).join(" · ")];
    for (var f = 0; f < fonti.length; f++) {
      var orig = fonti[f]; if (!orig) continue;
      var n = norm(orig), re = regTermini(T), m = re.exec(n);
      if (!m) continue;
      var at = m.index + m[1].length, ini = Math.max(0, at - 90), fine = Math.min(orig.length, at + 170);
      if (ini > 0) { var sp = orig.indexOf(" ", ini); if (sp > 0 && sp < at) ini = sp + 1; }
      if (fine < orig.length) { var sp2 = orig.lastIndexOf(" ", fine); if (sp2 > at) fine = sp2; }
      var pezzo = orig.slice(ini, fine).replace(/^[\s·]+|[\s·]+$/g, "");
      return (ini > 0 ? "… " : "") + evidenzia(pezzo, T) + (fine < orig.length ? " …" : "");
    }
    var dsc = [d.descr].concat(d.descrCat).filter(Boolean)[0] || "";
    return dsc ? evidenzia(dsc.length > 240 ? dsc.slice(0, 240) + " …" : dsc, T) : "";
  }

  /* ---------- pagina ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var stato = { q: "", materia: "tutte", classe: "tutte", quanti: 20 };
  function leggiUrl() {
    var s = location.search.replace(/^\?/, "").split("&");
    for (var i = 0; i < s.length; i++) {
      var kv = s[i].split("="), k = decodeURIComponent(kv[0] || ""), v = decodeURIComponent((kv[1] || "").replace(/\+/g, " "));
      if (k === "q") stato.q = v;
      if (k === "materia" && (MATERIE[v])) stato.materia = v;
      if (k === "classe" && CLASSI.indexOf(v) >= 0) stato.classe = v;
    }
  }
  function scriviUrl() {
    if (!window.history || !history.replaceState) return;
    var p = [];
    if (stato.q) p.push("q=" + encodeURIComponent(stato.q));
    if (stato.materia !== "tutte") p.push("materia=" + stato.materia);
    if (stato.classe !== "tutte") p.push("classe=" + stato.classe);
    try { history.replaceState(null, "", location.pathname + (p.length ? "?" + p.join("&") : "")); } catch (e) {}
  }
  function passa(d, quale, valore) { return valore === "tutte" || d[quale] === valore; }

  function chip(gruppo, valore, etichetta, n, colore) {
    var on = stato[gruppo] === valore;
    return '<button type="button" data-g="' + gruppo + '" data-v="' + valore + '" aria-pressed="' + on + '"' +
      (colore ? ' style="--c: var(--' + colore + ')"' : "") + (n === 0 && !on ? " disabled" : "") + ">" +
      esc(etichetta) + (n != null ? ' <span class="n">' + n + "</span>" : "") + "</button>";
  }
  function disegna() {
    var out = $("risultati"), info = $("stato"), filtri = $("filtri-ricerca");
    var q = stato.q.trim();
    if (!q) {
      filtri.hidden = true; out.innerHTML = ""; info.textContent = "";
      $("suggerimenti").hidden = false;
      return;
    }
    $("suggerimenti").hidden = true;
    var R = cerca(q), tutti = R.risultati;
    var perMat = {}, perCl = {};
    for (var i = 0; i < tutti.length; i++) {
      var d = tutti[i].d;
      if (passa(d, "classe", stato.classe)) perMat[d.materia || "altro"] = (perMat[d.materia || "altro"] || 0) + 1;
      if (passa(d, "materia", stato.materia)) perCl[d.classe || "altro"] = (perCl[d.classe || "altro"] || 0) + 1;
    }
    var vis = tutti.filter(function (r) { return passa(r.d, "materia", stato.materia) && passa(r.d, "classe", stato.classe); });
    filtri.hidden = !tutti.length;
    var nMat = 0; for (var mm in perMat) if (perMat.hasOwnProperty(mm)) nMat += perMat[mm];
    var nCl = 0; for (var cc in perCl) if (perCl.hasOwnProperty(cc)) nCl += perCl[cc];
    var h = '<div class="classi" role="group" aria-label="Materia">' + chip("materia", "tutte", "Tutte le materie", nMat);
    for (var o = 0; o < ORDINE_MATERIE.length; o++) {
      var mk = ORDINE_MATERIE[o];
      if (perMat[mk] || stato.materia === mk) h += chip("materia", mk, MATERIE[mk], perMat[mk] || 0, mk === "uda" ? "inchiostro" : mk);
    }
    h += '</div><div class="classi" role="group" aria-label="Classe">' + chip("classe", "tutte", "Tutte le classi", nCl);
    for (var c = 0; c < CLASSI.length; c++) h += chip("classe", CLASSI[c], CLASSI[c].charAt(0).toUpperCase() + CLASSI[c].slice(1), perCl[CLASSI[c]] || 0);
    filtri.innerHTML = h + "</div>";

    if (!tutti.length) {
      info.textContent = "Nessun risultato per «" + q + "».";
      out.innerHTML = '<li class="vuoto">Prova con un\'altra parola, con meno parole, o controlla come è scritta. ' +
        "Si possono cercare titoli, argomenti, autori, parole del testo delle pagine.</li>";
      return;
    }
    info.innerHTML = (R.tutte ? "" : "Nessuna pagina contiene tutte le parole: ecco quelle che ne contengono almeno una. ") +
      "<b>" + vis.length + "</b> " + (vis.length === 1 ? "risultato" : "risultati") + " per «" + esc(q) + "»" +
      (vis.length < tutti.length ? " (su " + tutti.length + ", con i filtri scelti)" : "") + ".";
    var html = "";
    for (var r = 0; r < vis.length && r < stato.quanti; r++) {
      var x = vis[r].d, col = x.materia === "uda" ? "inchiostro" : (x.materia || "tenue");
      var dove = (x.percorso || []).filter(Boolean).map(function (s) {
        return CLASSI.indexOf(s) >= 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s;
      }).join(" · ");
      var est = esterno(x.link);
      html += '<li class="ris" style="--c: var(--' + col + ')"><a href="' + esc(x.link) + '"' + (est ? ' target="_blank" rel="noopener"' : "") + ">" +
        '<p class="ris-dove"><span class="tipo">' + esc(x.tipo) + "</span>" + esc(dove) + "</p>" +
        "<h3>" + evidenzia(x.titolo, R.termini) + (est ? ' <span class="fuori">↗</span>' : "") + "</h3>";
      var e = estratto(x, R.termini);
      if (e) html += '<p class="estratto">' + e + "</p>";
      html += "</a></li>";
    }
    if (vis.length > stato.quanti) html += '<li class="altri"><button type="button" id="altri">Mostra altri ' + Math.min(20, vis.length - stato.quanti) + " risultati</button></li>";
    out.innerHTML = html;
  }

  function avvia() {
    /* prima le pagine, poi il catalogo: le voci del catalogo che hanno una pagina si uniscono a lei */
    var ind = caricaPagine();
    caricaCatalogo();
    indicizza();
    var nPag = 0; for (var j = 0; j < DOC.length; j++) if (DOC[j].testo) nPag++;
    $("nota-indice").textContent = ind
      ? "Si cerca nei titoli e nelle descrizioni del catalogo e nel testo di " + nPag + " pagine (indice aggiornato al " + ind.aggiornato.split("-").reverse().join("/") + ")."
      : "Si cerca solo nei titoli e nelle descrizioni del catalogo: l'indice delle pagine non è disponibile.";

    leggiUrl();
    var campo = $("q");
    campo.value = stato.q;
    var timer = null;
    campo.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { stato.q = campo.value; stato.quanti = 20; scriviUrl(); disegna(); }, 180);
    });
    $("modulo-ricerca").addEventListener("submit", function (e) {
      e.preventDefault(); clearTimeout(timer); stato.q = campo.value; stato.quanti = 20; scriviUrl(); disegna();
      var primo = document.querySelector("#risultati a"); if (primo && window.innerWidth < 700) primo.scrollIntoView();
    });
    document.addEventListener("click", function (e) {
      var t = e.target;
      while (t && t !== document && !(t.getAttribute && (t.getAttribute("data-g") || t.id === "altri" || t.getAttribute("data-esempio")))) t = t.parentNode;
      if (!t || t === document) return;
      if (t.id === "altri") { stato.quanti += 20; disegna(); return; }
      if (t.getAttribute("data-esempio")) { e.preventDefault(); campo.value = stato.q = t.getAttribute("data-esempio"); scriviUrl(); disegna(); campo.focus(); return; }
      var g = t.getAttribute("data-g"), v = t.getAttribute("data-v");
      stato[g] = stato[g] === v && v !== "tutte" ? "tutte" : v; stato.quanti = 20; scriviUrl(); disegna();
    });
    disegna();
    if (!stato.q) campo.focus();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", avvia); else avvia();
})();
