/* Testi privati: brani protetti dal diritto d'autore che si vedono solo sul computer dell'insegnante.
   I testi stanno in privati/testi.js, una cartella esclusa da GitHub (.gitignore): online quel file non esiste.
   Nella pagina: <div data-testo-privato="nome-del-testo"></div> e, in fondo, <script src="…/assets/testi-privati.js"></script>.
   Se il file c'è e contiene il testo, lo mostra; altrimenti mostra un riquadro «testo letto in classe». */
(function(){
  var me=document.currentScript, src=me?me.src:'', radice=src.replace(/assets\/testi-privati\.js(\?.*)?$/,'');
  var css='.tp{border-radius:10px;padding:14px 16px;margin:4px 0;display:flex;flex-direction:column;gap:8px}'+
    '.tp-testo{background:var(--soft,#f4f6f9);border-left:4px solid var(--hot,#c4511f)}'+
    '.tp-testo .tp-tit{font-weight:700}.tp-testo p{margin:0;line-height:1.65;font-size:1.05rem}'+
    '.tp-chiuso{border:2px dashed var(--line,#d2dae4);color:var(--muted,#56657a)}'+
    '.tp-chiuso b{color:var(--ink,#15233a)}.tp-fonte{font-size:.85rem;color:var(--muted,#56657a)}'+
    '.tp-solo{font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;color:var(--hot,#c4511f);font-weight:700}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
  function el(t,c,txt){var e=document.createElement(t); if(c) e.className=c; if(txt!=null) e.textContent=txt; return e;}
  function mostra(){
    var T=window.TESTI_PRIVATI||{};
    Array.prototype.forEach.call(document.querySelectorAll('[data-testo-privato]'),function(box){
      var id=box.getAttribute('data-testo-privato'), t=T[id], fonte=box.getAttribute('data-fonte')||'';
      box.innerHTML='';
      var pieno=t&&t.testo&&t.testo.indexOf('INCOLLA QUI')<0&&t.testo.trim().length>0;
      if(pieno){
        box.className='tp tp-testo';
        box.appendChild(el('span','tp-solo','Solo in classe · non pubblicato online'));
        if(t.titolo) box.appendChild(el('span','tp-tit',t.titolo));
        t.testo.trim().split(/\n\s*\n/).forEach(function(par){ box.appendChild(el('p','',par.replace(/\s*\n\s*/g,' '))); });
        if(t.fonte||fonte) box.appendChild(el('span','tp-fonte',t.fonte||fonte));
      } else {
        box.className='tp tp-chiuso';
        var p=el('p',''); p.innerHTML='<b>Il testo lo legge l\'insegnante in classe.</b> È protetto dal diritto d\'autore, per questo non è pubblicato sul sito.';
        box.appendChild(p);
        if(fonte) box.appendChild(el('span','tp-fonte',fonte));
        if(t&&!pieno) box.appendChild(el('span','tp-fonte','(Sul computer dell\'insegnante: il file privati/testi.js c\'è, ma il testo «'+id+'» non è ancora stato incollato.)'));
      }
    });
  }
  var s=document.createElement('script'); s.src=radice+'privati/testi.js';
  s.onload=mostra; s.onerror=mostra; document.head.appendChild(s);
})();
