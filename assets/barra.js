/* =============================================================
   BARRA COMUNE DEL SITO · assets/barra.js
   Si collega a ogni pagina con una riga prima di </body>, per esempio
       <script src="../../assets/barra.js"></script>
   (il percorso dipende da quanto è «profonda» la cartella).
   Fa due cose:
   1. In alto: il pulsante «⌂ Materiali didattici», che torna alla
      pagina principale. Se la pagina ha già un link «← Torna…» in
      alto, il pulsante si mette accanto; altrimenti compare una
      striscia con «⌂ Materiali didattici» e «← Materia: tutti i moduli».
   2. Se la pagina non ha già i pulsanti A− / A+, aggiunge quelli
      del sito (zoom-ctrl v2, gli stessi delle pagine di storia).
   ============================================================= */
(function () {
  "use strict";
  if (window.self !== window.top) return;           /* pagina mostrata dentro un'altra: niente */
  if (window.__barraSito) return; window.__barraSito = true;

  var me = document.currentScript || (function () { var s = document.getElementsByTagName("script"); return s[s.length - 1]; })();
  var ROOT = String(me.src).replace(/assets\/barra\.js(\?.*)?$/, "");
  var MATERIE = { "geografia": "Geografia", "storia": "Storia", "italiano": "Italiano", "educazione-civica": "Educazione civica" };
  var CLASSI = ["prima", "seconda", "terza"];

  /* dove siamo: percorso della pagina rispetto alla cartella principale del sito */
  var qui = String(location.href).split("#")[0].split("?")[0];
  var rel = qui.indexOf(ROOT) === 0 ? qui.slice(ROOT.length) : "";
  var pezzi = rel.split("/").filter(function (x) { return x; });
  if (pezzi.length && /^index\.html?$/.test(pezzi[pezzi.length - 1])) pezzi.pop();
  var materia = MATERIE[pezzi[0]] ? pezzi[0] : null;
  var home = pezzi.length === 0;                                   /* la pagina principale */
  var paginaMateria = materia && pezzi.length === 1;               /* geografia/, storia/… */

  function testo(el) { return (el.textContent || "").replace(/\s+/g, " ").trim(); }

  /* ---------- 1. pulsanti in alto ---------- */
  var CSS_BARRA =
    ".barra-sito{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0;padding:10px 200px 6px 16px;font:600 .92rem/1.2 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;position:relative;z-index:5}" +
    ".barra-sito a{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;border:1px solid rgba(127,127,127,.45);background:rgba(255,255,255,.85);color:#1f3f46;text-decoration:none}" +
    ".barra-sito a:hover{background:#1f3f46;color:#fff;border-color:#1f3f46}" +
    "a.bs-casa{margin-right:18px}" +
    "@media (prefers-color-scheme:dark){.barra-sito a{background:rgba(20,28,31,.85);color:#cfe3e7;border-color:rgba(200,200,200,.35)}.barra-sito a:hover{background:#cfe3e7;color:#10181b}}" +
    "@media (max-width:520px){.barra-sito{padding:18px 16px 6px}}" +
    "@media print{.barra-sito,.bs-casa{display:none!important}}";
  function aggiungiStile(t) { var st = document.createElement("style"); st.textContent = t; document.head.appendChild(st); }
  function linkCasa(cls) {
    var a = document.createElement("a");
    a.href = ROOT + "index.html"; a.className = cls; a.textContent = "⌂ Materiali didattici";
    a.title = "Torna alla pagina principale: tutte le materie";
    return a;
  }
  function barra() {
    if (home || paginaMateria) return;
    /* c'è già un pulsante per la pagina principale? */
    var tutti = document.querySelectorAll("a[href]");
    for (var i = 0; i < tutti.length; i++) if (/^\W*Materiali didattici$/.test(testo(tutti[i]))) return;
    aggiungiStile(CSS_BARRA);
    /* un link «← …» già presente in alto nella pagina */
    var giaIndietro = null;
    for (var j = 0; j < tutti.length && !giaIndietro; j++) {
      var a = tutti[j], t = testo(a);
      if (!/^←/.test(t)) continue;
      if (a.closest && a.closest("nav.indice,.passo,.naviga-officine,footer")) continue;
      var r = a.getBoundingClientRect();
      if (r.width && r.top + window.pageYOffset < 420) giaIndietro = a;
    }
    if (giaIndietro) {
      var c = linkCasa((giaIndietro.className ? giaIndietro.className + " " : "") + "bs-casa");
      giaIndietro.parentNode.insertBefore(c, giaIndietro);
      return;
    }
    var box = document.createElement("nav");
    box.className = "barra-sito"; box.setAttribute("aria-label", "Torna indietro");
    box.appendChild(linkCasa(""));
    if (materia) {
      var cl = CLASSI.indexOf(pezzi[1]) >= 0 ? "?classe=" + pezzi[1] : "";
      var m = document.createElement("a");
      m.href = ROOT + materia + "/index.html" + cl;
      m.textContent = "← " + MATERIE[materia] + ": tutti i moduli";
      box.appendChild(m);
    }
    var primo = document.body.firstElementChild;
    if (primo && /salta|skip/i.test(primo.className + " " + testo(primo)) && primo.tagName === "A") primo = primo.nextElementSibling;
    document.body.insertBefore(box, primo);
  }

  /* ---------- 2. ingrandimento A− / A+ ---------- */
  function haZoom() {
    if (document.querySelector(".zm")) return true;
    var b = document.querySelectorAll("button,[role=button],a");
    for (var i = 0; i < b.length; i++) {
      var t = testo(b[i]), l = (b[i].getAttribute("aria-label") || "") + " " + (b[i].title || "");
      if (/^A\s*[+＋]$/.test(t) || /ingrand|allarga|aumenta (il )?testo|dimensione del testo/i.test(l)) return true;
    }
    return false;
  }
  var ZM_CSS = ".zm{position:fixed;top:10px;right:10px;top:max(10px,env(safe-area-inset-top,0px));right:max(10px,env(safe-area-inset-right,0px));z-index:100;display:flex;gap:4px;align-items:center;background:var(--surface,var(--card,#fff));border:1px solid var(--line,#ccd);border-radius:999px;padding:4px;box-shadow:0 2px 8px rgba(0,0,0,.15);font-family:system-ui,sans-serif}\n.zm button{border:0;background:var(--soft,var(--paper,#eef));color:var(--ink,#123);border-radius:999px;min-width:36px;height:36px;font-weight:800;font-size:1rem;cursor:pointer;padding:0 8px;margin:0}\n.zm button:hover{background:var(--accent,#336);color:var(--accent-ink,#fff)}\n.zm button:disabled{opacity:.35;cursor:default}\n.zm button:disabled:hover{background:var(--soft,var(--paper,#eef));color:var(--ink,#123)}\n.zm span{min-width:44px;text-align:center;font-weight:700;font-size:.85rem;color:var(--muted,#567);font-variant-numeric:tabular-nums;cursor:pointer}\nbody{padding-top:40px}\n@media print{.zm{display:none!important}body{padding-top:0}}";
  var ZM_HTML = "<div class=\"zm\" role=\"group\" aria-label=\"Dimensione della pagina\">\n<button type=\"button\" data-z=\"-1\" title=\"Restringi (tasto \u2212)\" aria-label=\"Restringi\">A\u2212</button><span data-zv title=\"Torna al 100%\">100%</span><button type=\"button\" data-z=\"1\" title=\"Allarga (tasto +)\" aria-label=\"Allarga\">A+</button><button type=\"button\" data-z=\"0\" title=\"Dimensione normale (tasto 0)\" aria-label=\"Dimensione normale\">\u21ba</button>\n</div>";
  function zoom() {
    if (haZoom()) return;
    aggiungiStile(ZM_CSS);
    var w = document.createElement("div"); w.innerHTML = ZM_HTML;
    document.body.appendChild(w.firstElementChild);
    zoomCtrl();
  }
  function zoomCtrl() {

  var STEPS=[.6,.7,.8,.9,1,1.1,1.25,1.4,1.6,1.8,2,2.3], KEY='ripasso-zoom', html=document.documentElement;
  var box=document.querySelector('.zm'), out=box.querySelector('[data-z="-1"]'), inn=box.querySelector('[data-z="1"]'), val=box.querySelector('[data-zv]'), rst=box.querySelector('[data-z="0"]');
  var sup=function(p,v){ try{ return !!(window.CSS&&CSS.supports&&CSS.supports(p,v)); }catch(e){ return false; } };
  var hasZoom=sup('zoom','2'), hasAR=sup('aspect-ratio','1/1');
  function parts(){ return Array.prototype.filter.call(document.body.children,function(e){ return !e.matches('.zm,script,style,link,template'); }); }
  function each(list,fn){ Array.prototype.forEach.call(list,fn); }

  /* le regole @media (max-width) valgono anche quando la pagina è ingrandita (lo zoom non le attiva da solo) */
  var MQ=[];
  each(document.styleSheets,function(sh){
    var rules; try{ rules=sh.cssRules; }catch(e){ return; } if(!rules) return;
    var adds=[];
    for(var r=0;r<rules.length;r++){
      var R=rules[r]; if(R.type!==4) continue;
      var m=/^\s*(?:(?:only\s+)?screen\s+and\s+)?\(\s*max-width\s*:\s*(\d+(?:\.\d+)?)px\s*\)\s*$/.exec(R.media.mediaText); if(!m) continue;
      var n=parseFloat(m[1]), cls='pz-mq-'+String(n).replace('.','_'); if(MQ.indexOf(n)<0) MQ.push(n);
      for(var k=0;k<R.cssRules.length;k++){ var S=R.cssRules[k]; if(S.type!==1) continue;
        var sel=S.selectorText.split(',').map(function(x){ x=x.trim();
          if(/^:root/.test(x)) return 'html.'+cls+x.slice(5); if(/^html(?![\w-])/.test(x)) return 'html.'+cls+x.slice(4); return 'html.'+cls+' '+x; }).join(',');
        adds.push(sel+'{'+S.style.cssText+'}'); }
    }
    adds.forEach(function(t){ try{ sh.insertRule(t,sh.cssRules.length); }catch(e){} });
  });
  /* larghezza dello schermo misurata senza ingrandimento (sui tablet lo zoom può allargare la finestra virtuale) */
  var W0=0, I0=0;
  function measure(){ var hz=html.style.zoom; if(hz) html.style.zoom=''; var w=html.clientWidth||window.innerWidth; I0=window.innerWidth||w; if(hz) html.style.zoom=hz; return w; }
  function vw(){ return W0||(W0=measure()); }
  function setMQ(z){ var lw=vw()/z; MQ.forEach(function(n){ var c='pz-mq-'+String(n).replace('.','_'); if(lw<=n) html.classList.add(c); else html.classList.remove(c); }); }

  /* aspect-ratio per i browser che non lo conoscono (iOS 14 e precedenti, Chrome prima dell'88) */
  var AR=[];
  function grab(txt,media){
    txt.replace(/([^{}]+)\{([^{}]*)\}/g,function(m,sel,decl){
      var a=/aspect-ratio\s*:\s*([0-9.]+)\s*(?:\/\s*([0-9.]+))?|aspect-ratio\s*:\s*auto/.exec(decl);
      if(a&&sel.indexOf('@')<0) AR.push({sel:sel.trim(),media:media,r:a[1]?parseFloat(a[1])/(a[2]?parseFloat(a[2]):1):0});
      return '';
    });
  }
  if(!hasAR){
    each(document.querySelectorAll('style'),function(st){
      var t=st.textContent.replace(/\/\*[\s\S]*?\*\//g,'');
      t=t.replace(/@media([^{]+)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}/g,function(m,q,body){ grab(body,q.trim()); return ''; });
      grab(t,null);
    });
  }
  function mqOn(q){ var m=/max-width\s*:\s*(\d+(?:\.\d+)?)px/.exec(q); if(m&&/^\s*\(\s*max-width[^)]*\)\s*$/.test(q)) return vw()/STEPS[i]<=parseFloat(m[1]); return matchMedia(q).matches; }
  function fixAR(){
    if(hasAR) return;
    var done=[];
    AR.forEach(function(rule){
      if(rule.media&&!mqOn(rule.media)) return;
      var els; try{ els=document.querySelectorAll(rule.sel); }catch(e){ return; }
      each(els,function(el){ el.__ar=rule.r; if(done.indexOf(el)<0) done.push(el); });
    });
    each(document.querySelectorAll('[data-ar]'),function(el){ var q=String(el.getAttribute('data-ar')).split('/'); var r=parseFloat(q[0])/(q[1]?parseFloat(q[1]):1); if(r>0){ el.__ar=r; if(done.indexOf(el)<0) done.push(el); } });
    done.forEach(function(el){ if(document.fullscreenElement&&document.fullscreenElement.contains(el)){ el.style.height=''; return; }
      el.style.height=el.__ar&&el.clientWidth?(el.clientWidth/el.__ar)+'px':''; });
  }

  /* ingrandimento: zoom CSS dove esiste, altrimenti (Firefox fino a maggio 2024) una scala equivalente.
     Sui telefoni stretti si ferma quando la pagina non ci starebbe più (larghezza minima 300 px). */
  function zmax(){ return Math.max(1,vw()/300); }
  var i=STEPS.indexOf(1);
  try{ var z0=parseFloat(localStorage.getItem(KEY)), k=STEPS.indexOf(z0); if(k>=0) i=k; }catch(e){}
  var want=i;
  function fixHeights(){ if(hasZoom) return; var z=STEPS[i]; parts().forEach(function(e){ e.style.marginBottom=z===1?'':(e.offsetHeight*(z-1))+'px'; }); }
  function apply(save){
    W0=measure(); i=want; while(i>STEPS.indexOf(1)&&STEPS[i]>zmax()+0.001) i--;
    for(var guard=0;guard<STEPS.length;guard++){ setZ(STEPS[i]);
      /* se a questo ingrandimento la pagina non ci sta in larghezza, si scende di un passo */
      var over=html.scrollWidth>html.clientWidth+2||(window.innerWidth||0)>I0+2;
      if(!over||i<=STEPS.indexOf(1)) break; i--; }
    var z=STEPS[i];
    if(save){ try{ localStorage.setItem(KEY,String(z)); }catch(e){} }
    val.textContent=Math.round(z*100)+'%'; out.disabled=i===0; inn.disabled=i===STEPS.length-1||STEPS[i+1]>zmax()+0.001||i<want;
    fixAR(); fixHeights(); refresh();
  }
  function setZ(z){
    parts().forEach(function(e){
      if(hasZoom) return;
      if(z===1){ e.style.transform=''; e.style.transformOrigin=''; e.style.width=''; e.style.boxSizing=''; e.style.marginBottom=''; }
      else { e.style.transformOrigin='50% 0'; e.style.transform='scale('+z+')'; e.style.boxSizing='border-box'; e.style.width=(100/z)+'%'; }
    });
    if(hasZoom){ html.style.zoom=z===1?'':String(z); box.style.zoom=z===1?'':String(1/z); }
    setMQ(z); fixAR();
  }
  var busy=false, lastW=measure();
  function refresh(){ busy=true; try{ var ev; try{ ev=new Event('resize'); }catch(e){ ev=document.createEvent('Event'); ev.initEvent('resize',true,true); } window.dispatchEvent(ev); }finally{ busy=false; } }
  window.addEventListener('resize',function(){ if(busy) return; var mw=measure(); if(mw!==lastW){ lastW=mw; apply(false); return; } fixAR(); fixHeights(); });
  if(!hasZoom||!hasAR){ setInterval(function(){ fixAR(); fixHeights(); },1000); }
  function minus(){ if(i>0){ want=i-1; apply(true); } }
  function plus(){ if(!inn.disabled){ want=i+1; apply(true); } }
  function reset(){ want=STEPS.indexOf(1); apply(true); }
  out.addEventListener('click',minus); inn.addEventListener('click',plus); rst.addEventListener('click',reset); val.addEventListener('click',reset);
  document.addEventListener('keydown',function(e){
    if(/^(INPUT|TEXTAREA|SELECT)$/.test((e.target||{}).tagName||'')||(e.target&&e.target.isContentEditable)||e.ctrlKey||e.metaKey||e.altKey) return;
    if(e.key==='+'||e.key==='='){ e.preventDefault(); plus(); }
    else if(e.key==='-'){ e.preventDefault(); minus(); }
    else if(e.key==='0'){ e.preventDefault(); reset(); }
  });
  apply(false);

  }

  function avvia() { try { barra(); } catch (e) {} try { zoom(); } catch (e) {} }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", avvia); else avvia();
})();
