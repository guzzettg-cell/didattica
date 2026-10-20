/* =============================================================
   QUESTO FILE È GENERATO: non modificarlo a mano.
   Il codice originale è in assets/sito-sorgente.js; questo è lo
   stesso codice riscritto in una forma che funziona anche nei
   browser vecchi (Internet Explorer 11, vecchio Edge, vecchio Chrome).
   ============================================================= */

/* Funzioni mancanti nei browser vecchi */
(function () {
  var AP = Array.prototype, EP = window.Element && Element.prototype;
  if (!Object.entries) Object.entries = function (o) { var r = []; for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) r.push([k, o[k]]); return r; };
  if (!Object.assign) Object.assign = function (t) { for (var i = 1; i < arguments.length; i++) { var s = arguments[i]; if (s) for (var k in s) if (Object.prototype.hasOwnProperty.call(s, k)) t[k] = s[k]; } return t; };
  if (!AP.includes) AP.includes = function (x) { return this.indexOf(x) !== -1; };
  if (!AP.find) AP.find = function (f) { for (var i = 0; i < this.length; i++) if (f(this[i], i, this)) return this[i]; };
  if (!AP.flatMap) AP.flatMap = function (f) { var r = []; for (var i = 0; i < this.length; i++) r = r.concat(f(this[i], i, this)); return r; };
  if (!String.prototype.includes) String.prototype.includes = function (s, p) { return this.indexOf(s, p || 0) !== -1; };
  if (!String.prototype.startsWith) String.prototype.startsWith = function (s, p) { return this.substr(p || 0, s.length) === s; };
  if (window.NodeList && !NodeList.prototype.forEach) NodeList.prototype.forEach = AP.forEach;
  function nodo(x) { return (x && x.nodeType) ? x : document.createTextNode(String(x)); }
  if (EP && !EP.append) EP.append = function () { for (var i = 0; i < arguments.length; i++) this.appendChild(nodo(arguments[i])); };
  if (EP && !EP.prepend) EP.prepend = function () { for (var i = arguments.length - 1; i >= 0; i--) this.insertBefore(nodo(arguments[i]), this.firstChild); };
  if (EP && !EP.remove) EP.remove = function () { if (this.parentNode) this.parentNode.removeChild(this); };
  if (EP && !EP.replaceWith) EP.replaceWith = function (n) { if (this.parentNode) this.parentNode.replaceChild(nodo(n), this); };
  if (EP && !EP.matches) EP.matches = EP.msMatchesSelector || EP.webkitMatchesSelector;
  if (EP && !EP.closest) EP.closest = function (s) { var e = this; while (e && e.nodeType === 1) { if (e.matches(s)) return e; e = e.parentNode; } return null; };
  if (typeof window.Set !== "function" || !new window.Set([1]).has(1)) {
    window.Set = function (a) { this._v = []; if (a) for (var i = 0; i < a.length; i++) this.add(a[i]); };
    window.Set.prototype.add = function (x) { if (this._v.indexOf(x) === -1) this._v.push(x); return this; };
    window.Set.prototype.has = function (x) { return this._v.indexOf(x) !== -1; };
    window.Set.prototype["delete"] = function (x) { var i = this._v.indexOf(x); if (i !== -1) this._v.splice(i, 1); return i !== -1; };
  }
  if (typeof window.URLSearchParams !== "function") {
    window.URLSearchParams = function (q) { this._q = String(q || "").replace(/^\?/, ""); };
    window.URLSearchParams.prototype.get = function (k) {
      var p = this._q.split("&");
      for (var i = 0; i < p.length; i++) { var c = p[i].split("="); if (decodeURIComponent(c[0]) === k) return decodeURIComponent((c[1] || "").replace(/\+/g, " ")); }
      return null;
    };
  }
})();

"use strict";
/* Costruisce le pagine a partire dal catalogo in materiali.js.
   Di solito non c'è bisogno di modificare questo file. */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MATERIE = {
    "geografia": { nome: "Geografia", descr: "La Terra, i climi, la popolazione, l'economia e gli Stati del mondo." },
    "storia": { nome: "Storia", descr: "Fonti, periodi, linee del tempo e grandi trasformazioni." },
    "italiano": { nome: "Italiano", descr: "Lettura, scrittura, grammatica e laboratori di scrittura creativa." },
    "educazione-civica": { nome: "Educazione civica", descr: "Costituzione, cittadinanza, ambiente e vita in comunità." }
};
var CLASSI = ["prima", "seconda", "terza"];
var corpo = document.body;
var BASE = corpo.dataset.base || "";
function el(tag, attrs) {
    var e_1, _a;
    var figli = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        figli[_i - 2] = arguments[_i];
    }
    var n = document.createElement(tag);
    for (var k in attrs || {}) {
        if (k === "class")
            n.className = attrs[k];
        else if (k === "style")
            n.setAttribute("style", attrs[k]);
        else
            n.setAttribute(k, attrs[k]);
    }
    try {
        for (var figli_1 = __values(figli), figli_1_1 = figli_1.next(); !figli_1_1.done; figli_1_1 = figli_1.next()) {
            var f = figli_1_1.value;
            if (f != null)
                n.append(f);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (figli_1_1 && !figli_1_1.done && (_a = figli_1.return)) _a.call(figli_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return n;
}
var maiuscola = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
var ELENCO_MODULI = typeof MODULI !== "undefined" ? MODULI : [];
var nomeModulo = function (mod) { return (mod.numero ? "Modulo " + mod.numero + " – " : "") + mod.titolo; };
/* tutte le attività, con l'indicazione di dove si trovano */
function tutteLeAttivita(moduli) {
    var e_2, _a;
    var elenco = [];
    var _loop_1 = function (mod) {
        (mod.lezioni || []).forEach(function (lez) {
            return (lez.attivita || []).forEach(function (a) { return elenco.push(__assign(__assign({}, a), { mod: mod, lez: lez })); });
        });
        (mod.attivita || []).forEach(function (a) { return elenco.push(__assign(__assign({}, a), { mod: mod, lez: null })); });
    };
    try {
        for (var moduli_1 = __values(moduli), moduli_1_1 = moduli_1.next(); !moduli_1_1.done; moduli_1_1 = moduli_1.next()) {
            var mod = moduli_1_1.value;
            _loop_1(mod);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (moduli_1_1 && !moduli_1_1.done && (_a = moduli_1.return)) _a.call(moduli_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return elenco;
}
/* scheda di un'attività per "Aggiunti di recente" */
function voceRecente(a) {
    var _a;
    var dove = [(_a = MATERIE[a.mod.materia]) === null || _a === void 0 ? void 0 : _a.nome, maiuscola(a.mod.classe || ""), nomeModulo(a.mod)];
    if (a.lez)
        dove.push(a.lez.titolo);
    return el("li", { class: "voce", style: "--c: var(--".concat(a.mod.materia, ")") }, el("a", { href: BASE + a.link }, el("h3", null, a.titolo), a.descrizione ? el("p", null, a.descrizione) : null, el("p", { class: "dettagli" }, el("span", { class: "tipo" }, a.tipo || "Attività"), dove.filter(Boolean).join(", "))));
}
/* riga di un'attività dentro una lezione */
function rigaAttivita(a) {
    return el("li", { class: "attivita" }, el("a", { href: BASE + a.link }, el("span", { class: "tipo" }, a.tipo || "Attività"), el("span", { class: "titolo-attivita" }, a.titolo)), a.descrizione ? el("p", null, a.descrizione) : null);
}
/* ---------- UDA interdisciplinari ---------- */
var ELENCO_UDA = typeof UDA !== "undefined" ? UDA : [];
function schedaUda(u) {
    var materie = (u.materie || []).filter(function (id) { return MATERIE[id]; });
    var n = materie.length || 1;
    var striscia = materie.length
        ? materie.map(function (id, i) { return "var(--".concat(id, ") ").concat(i * 100 / n, "% ").concat((i + 1) * 100 / n, "%"); }).join(", ")
        : "var(--inchiostro) 0 100%";
    var etichette = el("p", { class: "dettagli" });
    materie.forEach(function (id) { return etichette.append(el("span", { class: "tipo", style: "--c: var(--".concat(id, ")") }, MATERIE[id].nome)); });
    var extra = [u.classe ? "Classe " + u.classe : null, u.periodo].filter(Boolean).join(", ");
    if (extra)
        etichette.append(extra);
    return el("li", { class: "voce uda" }, el("span", { class: "striscia", style: "background: linear-gradient(to bottom, ".concat(striscia, ")"), "aria-hidden": "true" }), el("a", { href: BASE + u.link }, el("h3", null, u.titolo), u.descrizione ? el("p", null, u.descrizione) : null, etichette));
}
function elencoUda(contenitore, filtro, vuoto) {
    if (!contenitore)
        return;
    var scelte = ELENCO_UDA.filter(filtro);
    if (!scelte.length) {
        contenitore.replaceWith(el("p", { class: "vuoto" }, vuoto));
        return;
    }
    scelte.forEach(function (u) { return contenitore.append(schedaUda(u)); });
}
/* ---------- home ---------- */
function home() {
    var e_3, _a;
    var griglia = document.getElementById("materie");
    griglia.innerHTML = "";
    var _loop_2 = function (id, info) {
        var moduli = ELENCO_MODULI.filter(function (m) { return m.materia === id; });
        var n = tutteLeAttivita(moduli).length;
        var nl = moduli.reduce(function (t, m) { return t + (m.lezioni || []).length; }, 0);
        var plurale = function (x, uno, tanti) { return x === 1 ? "1 " + uno : x + " " + tanti; };
        var conta = "Materiali in arrivo";
        if (moduli.length) {
            conta = [plurale(moduli.length, "modulo", "moduli"),
                nl ? plurale(nl, "lezione", "lezioni") : null,
                n ? plurale(n, "attività", "attività") : null].filter(Boolean).join(", ");
        }
        griglia.append(el("a", { class: "materia", href: id + "/", style: "--c: var(--".concat(id, ")") }, el("h3", null, info.nome), el("p", null, info.descr), el("p", { class: "conta" }, conta)));
    };
    try {
        for (var _b = __values(Object.entries(MATERIE)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), id = _d[0], info = _d[1];
            _loop_2(id, info);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    elencoUda(document.getElementById("uda"), function () { return true; }, "Le UDA interdisciplinari arriveranno presto.");
    var recenti = document.getElementById("recenti");
    var lezioniConPagina = ELENCO_MODULI.flatMap(function (mod) {
        return (mod.lezioni || []).filter(function (l) { return l.link; }).map(function (l) { return (__assign(__assign({}, l), { tipo: "Lezione", mod: mod, lez: null })); });
    });
    var ordinati = __spreadArray(__spreadArray([], __read(lezioniConPagina), false), __read(tutteLeAttivita(ELENCO_MODULI)), false).filter(function (a) { return a.data; })
        .sort(function (a, b) { return b.data.localeCompare(a.data); })
        .slice(0, 6);
    if (!ordinati.length)
        recenti.replaceWith(el("p", { class: "vuoto" }, "Non ci sono ancora materiali."));
    else
        ordinati.forEach(function (a) { return recenti.append(voceRecente(a)); });
}
/* ---------- pagina di una materia ---------- */
function paginaMateria(id) {
    var tutti = ELENCO_MODULI.filter(function (m) { return m.materia === id; });
    var area = document.getElementById("materiali");
    var campo = document.getElementById("cerca");
    var pulsanti = document.querySelectorAll(".classi button");
    var classe = new URLSearchParams(location.search).get("classe") || "tutte";
    var aperti = new Set(); // moduli aperti dall'utente
    var idModulo = function (m) { return ["modulo", m.classe, m.numero || m.titolo].join("-").toLowerCase().replace(/[^a-z0-9-]+/g, "-"); };
    if (location.hash)
        aperti.add(location.hash.slice(1));
    var contiene = function (q) {
        var testi = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            testi[_i - 1] = arguments[_i];
        }
        return testi.join(" ").toLowerCase().includes(q);
    };
    /* restituisce il modulo ridotto alle sole parti che corrispondono alla ricerca */
    function filtra(mod, q) {
        if (!q || contiene(q, mod.titolo, mod.descrizione || "", mod.numero || ""))
            return mod;
        var att = function (a) { return contiene(q, a.titolo, a.descrizione || "", a.tipo || ""); };
        var lezioni = (mod.lezioni || []).map(function (l) {
            return contiene(q, l.titolo, l.descrizione || "") ? l : __assign(__assign({}, l), { attivita: (l.attivita || []).filter(att) });
        }).filter(function (l) { return contiene(q, l.titolo, l.descrizione || "") || l.attivita.length; });
        var attivita = (mod.attivita || []).filter(att);
        return lezioni.length || attivita.length ? __assign(__assign({}, mod), { lezioni: lezioni, attivita: attivita }) : null;
    }
    function disegnaModulo(mod, cercando) {
        var lezioni = mod.lezioni || [];
        var nAtt = tutteLeAttivita([mod]).length;
        var chiave = idModulo(mod);
        var riepilogo = lezioni.length || nAtt
            ? [lezioni.length ? (lezioni.length === 1 ? "1 lezione" : lezioni.length + " lezioni") : null,
                nAtt ? (nAtt === 1 ? "1 attività" : nAtt + " attività") : null].filter(Boolean).join(", ")
            : "In preparazione";
        var box = el("details", { class: "modulo", id: chiave });
        if (cercando || aperti.has(chiave))
            box.open = true;
        box.addEventListener("toggle", function () {
            if (cercando)
                return;
            box.open ? aperti.add(chiave) : aperti.delete(chiave);
        });
        box.append(el("summary", null, el("span", { class: "numero-modulo" }, mod.numero ? "Modulo " + mod.numero : "Modulo"), mod.link
            ? el("a", { class: "titolo-modulo", href: BASE + mod.link, title: "Apri la pagina del modulo" }, mod.titolo)
            : el("span", { class: "titolo-modulo" }, mod.titolo), el("span", { class: "riepilogo" }, riepilogo)));
        var dentro = el("div", { class: "contenuto-modulo" });
        if (mod.descrizione)
            dentro.append(el("p", { class: "descr-modulo" }, mod.descrizione));
        if (lezioni.length) {
            var ol_1 = el("ol", { class: "lezioni" });
            lezioni.forEach(function (lez, i) {
                var titolo = lez.link
                    ? el("a", { href: BASE + lez.link }, lez.titolo)
                    : lez.titolo;
                var li = el("li", { class: "lezione" }, el("p", { class: "numero-lezione" }, "Lezione " + (i + 1) + (lez.pagine ? ", " + (/[–-]/.test(lez.pagine) ? "pp. " : "p. ") + lez.pagine : "")), el("h4", null, titolo), lez.descrizione ? el("p", { class: "descr-lezione" }, lez.descrizione) : null);
                var att = lez.attivita || [];
                if (att.length) {
                    var ul_1 = el("ul", { class: "attivita-elenco" });
                    att.forEach(function (a) { return ul_1.append(rigaAttivita(a)); });
                    li.append(ul_1);
                }
                else if (!lez.link) {
                    li.append(el("p", { class: "attesa" }, "Attività in preparazione"));
                }
                ol_1.append(li);
            });
            dentro.append(ol_1);
        }
        else if (!(mod.attivita || []).length) {
            dentro.append(el("p", { class: "attesa" }, "Le lezioni di questo modulo sono in preparazione."));
        }
        if ((mod.attivita || []).length) {
            var ul_2 = el("ul", { class: "attivita-elenco" });
            mod.attivita.forEach(function (a) { return ul_2.append(rigaAttivita(a)); });
            dentro.append(el("div", { class: "fine-modulo" }, el("h4", null, "Per tutto il modulo"), ul_2));
        }
        box.append(dentro);
        return box;
    }
    function disegna() {
        var e_4, _a;
        pulsanti.forEach(function (b) { return b.setAttribute("aria-pressed", b.dataset.classe === classe); });
        var q = campo.value.trim().toLowerCase();
        var scelti = tutti
            .filter(function (m) { return classe === "tutte" || m.classe === classe; })
            .map(function (m) { return filtra(m, q); })
            .filter(Boolean);
        area.replaceChildren();
        if (!scelti.length) {
            area.append(el("p", { class: "vuoto" }, tutti.length ? "Nessun materiale corrisponde ai filtri scelti." : "I materiali di questa materia arriveranno presto."));
            return;
        }
        var _loop_3 = function (c) {
            var diClasse = scelti.filter(function (m) { return m.classe === c; });
            if (!diClasse.length)
                return "continue";
            var gruppo = el("section", { class: "gruppo" }, el("h2", null, "Classe " + c));
            diClasse.forEach(function (m) { return gruppo.append(disegnaModulo(m, !!q)); });
            area.append(gruppo);
        };
        try {
            for (var CLASSI_1 = __values(CLASSI), CLASSI_1_1 = CLASSI_1.next(); !CLASSI_1_1.done; CLASSI_1_1 = CLASSI_1.next()) {
                var c = CLASSI_1_1.value;
                _loop_3(c);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (CLASSI_1_1 && !CLASSI_1_1.done && (_a = CLASSI_1.return)) _a.call(CLASSI_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    pulsanti.forEach(function (b) { return b.addEventListener("click", function () {
        classe = b.dataset.classe;
        var url = new URL(location);
        classe === "tutte" ? url.searchParams.delete("classe") : url.searchParams.set("classe", classe);
        history.replaceState(null, "", url);
        disegna();
    }); });
    campo.addEventListener("input", disegna);
    disegna();
    var conUda = ELENCO_UDA.filter(function (u) { return (u.materie || []).includes(id); });
    if (conUda.length) {
        var lista_1 = el("ul", { class: "elenco" });
        area.after(el("section", { class: "gruppo sezione-uda" }, el("h2", null, "UDA interdisciplinari"), lista_1));
        conUda.forEach(function (u) { return lista_1.append(schedaUda(u)); });
    }
}
if (corpo.dataset.materia)
    paginaMateria(corpo.dataset.materia);
else
    home();
