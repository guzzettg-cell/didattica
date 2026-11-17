/* Giochi da valutare: proposte di attività ludiche collegate alle lezioni.
   I dati stanno in privati/giochi.js, una cartella esclusa da GitHub (.gitignore):
   le proposte si vedono solo sul computer dell'insegnante; online questo script non mostra nulla.
   Dove compaiono:
   - nella pagina della materia (es. geografia/index.html): sotto ogni lezione e in fondo ai moduli;
   - in qualsiasi pagina con <div data-giochi="Titolo del modulo"></div> (le proposte di quel modulo)
     o <div data-giochi="tutti"></div> (tutte le proposte, divise per modulo e lezione).
   In fondo alla pagina: <script src="…/assets/giochi-da-valutare.js"></script>. Vedi ISTRUZIONI.md. */
(function () {
  var me = document.currentScript, src = me ? me.src : '';
  var radice = src.replace(/assets\/giochi-da-valutare\.js(\?.*)?$/, '');

  var css =
    '.gdv-box{margin:12px 0 0;border:2px dashed #c9a227;border-radius:10px;background:#fffbea;font-size:15px}' +
    '.gdv-box>summary{cursor:pointer;padding:8px 12px;font-weight:700;color:#6b5512;list-style:none}' +
    '.gdv-box>summary::-webkit-details-marker{display:none}' +
    '.gdv-box>summary::before{content:"▸ ";}.gdv-box[open]>summary::before{content:"▾ ";}' +
    '.gdv-box>summary small{font-weight:400;color:#8a7a4a;margin-left:6px}' +
    '.gdv-lista{padding:0 12px 10px;display:flex;flex-direction:column;gap:8px}' +
    '.gdv{background:#fff;border:1px solid #eadfb5;border-radius:8px}' +
    '.gdv>summary{cursor:pointer;padding:8px 10px;display:flex;flex-wrap:wrap;gap:6px 10px;align-items:baseline;list-style:none}' +
    '.gdv>summary::-webkit-details-marker{display:none}' +
    '.gdv-tit{font-weight:700;color:#23262a}.gdv-num{color:#8a7a4a;font-weight:400}' +
    '.gdv-et{font-size:12px;border-radius:99px;padding:1px 8px;background:#f1ece0;color:#5d6166}' +
    '.gdv-stato{font-size:12px;border-radius:99px;padding:1px 8px;font-weight:700;background:#fde7a6;color:#6b5512}' +
    '.gdv-stato.si{background:#d6ecd2;color:#2f5e2a}.gdv-stato.forse{background:#e2e7f3;color:#34497a}.gdv-stato.no{background:#eee;color:#888}' +
    '.gdv.no .gdv-tit{text-decoration:line-through;color:#888}' +
    '.gdv-corpo{padding:0 12px 10px;line-height:1.5}' +
    '.gdv-corpo p{margin:6px 0}.gdv-idea{background:#fff6d6;border-left:4px solid #c9a227;padding:6px 10px;border-radius:4px}' +
    '.gdv-nota{background:#eef5ec;border-left:4px solid #6a9a5f;padding:6px 10px;border-radius:4px}' +
    '.gdv-meta{font-size:13px;color:#5d6166}' +
    '.gdv-avviso{margin:0 0 14px;padding:10px 14px;border:2px dashed #c9a227;border-radius:10px;background:#fffbea;font-size:15px}' +
    '.gdv-avviso a{font-weight:700}' +
    '.gdv-modulo{margin:22px 0 6px;font:700 22px/1.3 Georgia,serif}.gdv-lezione{margin:14px 0 4px;font-size:17px}';

  function el(tag, cls, testo) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (testo != null) e.textContent = testo;
    return e;
  }
  function riga(cls, etichetta, testo) {
    var p = el('p', cls);
    var b = el('b', null, etichetta + ' ');
    p.appendChild(b);
    p.appendChild(document.createTextNode(testo));
    return p;
  }
  function classeStato(s) {
    s = (s || '').toLowerCase();
    return s === 'sì' || s === 'si' ? 'si' : s === 'forse' ? 'forse' : s === 'no' ? 'no' : '';
  }

  function scheda(p, D) {
    var g = D.giochi[p.gioco] || { titolo: 'Gioco ' + p.gioco };
    var cs = classeStato(p.stato);
    var d = el('details', 'gdv' + (cs ? ' ' + cs : ''));
    var s = el('summary');
    var t = el('span', 'gdv-tit');
    t.appendChild(el('span', 'gdv-num', 'n. ' + p.gioco + ' · '));
    t.appendChild(document.createTextNode(g.titolo));
    s.appendChild(t);
    if (g.spazio) s.appendChild(el('span', 'gdv-et', g.spazio));
    if (g.livello) s.appendChild(el('span', 'gdv-et', g.livello));
    s.appendChild(el('span', 'gdv-stato' + (cs ? ' ' + cs : ''), p.stato || 'da valutare'));
    d.appendChild(s);
    var c = el('div', 'gdv-corpo');
    if (p.idea) c.appendChild(riga('gdv-idea', 'Per questa lezione:', p.idea));
    if (p.nota) c.appendChild(riga('gdv-nota', 'Note:', p.nota));
    if (g.come) c.appendChild(riga('', 'Come funziona:', g.come));
    if (g.obiettivo) c.appendChild(riga('', 'Obiettivo:', g.obiettivo));
    if (g.materiali) c.appendChild(riga('', 'Materiali:', g.materiali));
    if (g.spunti) c.appendChild(riga('', 'Spunti:', g.spunti));
    var meta = [];
    if (g.classi) meta.push('Classi ' + g.classi);
    if (g.partecipanti) meta.push('Partecipanti: ' + g.partecipanti);
    if (g.discipline && g.discipline !== '—') meta.push('Con: ' + g.discipline);
    if (g.pagina) meta.push((g.sezione ? g.sezione + ', ' : '') + 'pag. ' + g.pagina + ' del libro');
    if (meta.length) c.appendChild(el('p', 'gdv-meta', meta.join(' · ')));
    d.appendChild(c);
    return d;
  }

  function riquadro(lista, D, titolo) {
    var box = el('details', 'gdv-box');
    var s = el('summary', null, '🎲 ' + (titolo || 'Giochi da valutare') + ' (' + lista.length + ')');
    s.appendChild(el('small', null, 'solo su questo computer'));
    box.appendChild(s);
    var l = el('div', 'gdv-lista');
    lista.forEach(function (p) { l.appendChild(scheda(p, D)); });
    box.appendChild(l);
    return box;
  }

  function testo(n) { return n ? (n.textContent || '').replace(/\s+/g, ' ').trim() : ''; }

  /* pagina della materia: le lezioni sono disegnate da sito.js e ridisegnate a ogni filtro */
  function decoraCatalogo(D) {
    var cont = document.getElementById('materiali');
    if (!cont) return;
    function decora() {
      var moduli = cont.querySelectorAll('details.modulo');
      Array.prototype.forEach.call(moduli, function (mod) {
        var tm = testo(mod.querySelector('.titolo-modulo'));
        var proposte = D.proposte.filter(function (p) { return p.modulo === tm; });
        if (!proposte.length) return;
        Array.prototype.forEach.call(mod.querySelectorAll('li.lezione'), function (li) {
          if (li.getAttribute('data-gdv')) return;
          li.setAttribute('data-gdv', '1');
          var tl = testo(li.querySelector('h4'));
          var mie = proposte.filter(function (p) { return p.lezione === tl; });
          if (mie.length) li.appendChild(riquadro(mie, D));
        });
        var dentro = mod.querySelector('.contenuto-modulo');
        if (dentro && !dentro.getAttribute('data-gdv')) {
          dentro.setAttribute('data-gdv', '1');
          var tutto = proposte.filter(function (p) { return !p.lezione; });
          if (tutto.length) dentro.appendChild(riquadro(tutto, D, 'Giochi da valutare per tutto il modulo'));
        }
      });
    }
    decora();
    var attesa = null;
    if (window.MutationObserver) {
      new MutationObserver(function () {
        clearTimeout(attesa);
        attesa = setTimeout(decora, 30);
      }).observe(cont, { childList: true, subtree: true });
    }
    /* avviso in cima, con il link alla pagina di tutte le proposte */
    if (!document.querySelector('.gdv-avviso')) {
      var a = el('p', 'gdv-avviso');
      a.appendChild(document.createTextNode('🎲 ' + D.proposte.length + ' proposte di giochi da valutare, sotto le lezioni (si vedono solo su questo computer). '));
      var link = el('a', null, 'Vedile tutte insieme →');
      link.href = radice + 'privati/giochi-da-valutare.html';
      a.appendChild(link);
      cont.parentNode.insertBefore(a, cont);
    }
  }

  /* <div data-giochi="Titolo del modulo"> oppure data-giochi="tutti" */
  function decoraContenitori(D) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-giochi]'), function (box) {
      var chiave = box.getAttribute('data-giochi');
      var scelte = D.proposte.filter(function (p) { return chiave === 'tutti' || p.modulo === chiave; });
      box.innerHTML = '';
      if (!scelte.length) return;
      var moduli = [];
      scelte.forEach(function (p) { if (moduli.indexOf(p.modulo) < 0) moduli.push(p.modulo); });
      moduli.forEach(function (m) {
        if (chiave === 'tutti') box.appendChild(el('h2', 'gdv-modulo', m));
        var diM = scelte.filter(function (p) { return p.modulo === m; });
        var lezioni = [];
        diM.forEach(function (p) { var k = p.lezione || ''; if (lezioni.indexOf(k) < 0) lezioni.push(k); });
        lezioni.forEach(function (l) {
          var diL = diM.filter(function (p) { return (p.lezione || '') === l; });
          box.appendChild(el('h3', 'gdv-lezione', l || 'Per tutto il modulo'));
          var r = riquadro(diL, D);
          r.open = true;
          box.appendChild(r);
        });
      });
    });
  }

  function avvia() {
    var D = window.GIOCHI_DA_VALUTARE;
    if (!D || !D.proposte || !D.giochi) return;
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    decoraCatalogo(D);
    decoraContenitori(D);
  }

  var s = document.createElement('script');
  s.src = radice + 'privati/giochi.js?v=' + Date.now();
  s.onload = function () {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', avvia);
    else avvia();
  };
  document.head.appendChild(s);
})();
