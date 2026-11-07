/* =============================================================
   BARRA COMUNE DEL SITO · assets/barra.js
   Si collega a ogni pagina con una riga prima di </body>, per esempio
       <script src="../../assets/barra.js"></script>
   (il percorso dipende da quanto è «profonda» la cartella).
   Fa queste cose:
   0. Il MENU DEL SITO, in alto a sinistra su tutte le pagine (sulla
      stessa riga dei pulsanti A− / A+): ⌂ pagina principale, le quattro
      materie (Storia, Geografia, Italiano, Educazione civica; quella
      della pagina è evidenziata) e, a destra subito prima di A− / A+, la
      casella «Cerca nel sito». Il menu scorre via con la pagina.
      Resta sempre della stessa grandezza, anche quando si ingrandisce.
   1. Se la pagina non ha già un link «← Torna…» in alto, aggiunge
      «← Materia: tutti i moduli».
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
  /* ordine e colori dei pulsanti del menu (gli stessi di assets/stile.css) */
  var MENU = [["storia", "#2b5f6b"], ["geografia", "#b05e3b"], ["italiano", "#7a4a6e"], ["educazione-civica", "#56682c"]];
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
    ".barra-sito{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0;padding:0 16px 6px;font:600 .92rem/1.2 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;position:relative;z-index:5}" +
    ".barra-sito a{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;border:1px solid rgba(127,127,127,.45);background:rgba(255,255,255,.85);color:#1f3f46;text-decoration:none}" +
    ".barra-sito a:hover{background:#1f3f46;color:#fff;border-color:#1f3f46}" +
    "@media (prefers-color-scheme:dark){.barra-sito a{background:rgba(20,28,31,.85);color:#cfe3e7;border-color:rgba(200,200,200,.35)}.barra-sito a:hover{background:#cfe3e7;color:#10181b}}" +
    "@media print{.barra-sito{display:none!important}}";
  function aggiungiStile(t) { var st = document.createElement("style"); st.textContent = t; document.head.appendChild(st); }
  var paginaCerca = rel === "cerca.html";
  function barra() {
    if (home || paginaMateria || paginaCerca || !materia) return;
    var tutti = document.querySelectorAll("a[href]");
    /* un link «← …» già presente in alto nella pagina: basta quello */
    for (var j = 0; j < tutti.length; j++) {
      var a = tutti[j], t = testo(a);
      if (!/^\u2190/.test(t)) continue;
      if (a.closest && a.closest("nav.indice,.passo,.naviga-officine,footer,.menu-sito")) continue;
      var r = a.getBoundingClientRect();
      if (r.width && r.top + window.pageYOffset < 420) return;
    }
    aggiungiStile(CSS_BARRA);
    var box = document.createElement("nav");
    box.className = "barra-sito"; box.setAttribute("aria-label", "Torna indietro");
    var cl = CLASSI.indexOf(pezzi[1]) >= 0 ? "?classe=" + pezzi[1] : "";
    var m = document.createElement("a");
    m.href = ROOT + materia + "/index.html" + cl;
    m.textContent = "\u2190 " + MATERIE[materia] + ": tutti i moduli";
    box.appendChild(m);
    var menu = document.querySelector(".menu-sito");
    if (menu && menu.parentNode === document.body) document.body.insertBefore(box, menu.nextSibling);
    else document.body.insertBefore(box, primoElemento());
  }
  function primoElemento() {
    var primo = document.body.firstElementChild;
    if (primo && primo.tagName === "A" && /salta|skip/i.test(primo.className + " " + testo(primo))) primo = primo.nextElementSibling;
    return primo;
  }

  /* ---------- 0. menu del sito: ⌂ · materie · ricerca ---------- */
  var CSS_MENU =
    ".menu-sito{box-sizing:border-box;display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:66px;margin:0;padding:10px 14px;padding-left:max(14px,env(safe-area-inset-left,0px));font:600 16px/1.2 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;position:relative;z-index:6;text-align:left;width:auto;max-width:none;float:none;transform:none;background:none;border:0}" +
    ".menu-sito.ms-zm{padding-right:210px}" +
    ".menu-sito *{box-sizing:border-box;margin:0}" +
    ".menu-sito .ms-materie{display:flex;flex-wrap:wrap;gap:8px}" +
    ".menu-sito a{display:inline-flex;align-items:center;flex:none;height:40px;padding:0 17px;border-radius:999px;text-decoration:none;white-space:nowrap;color:var(--mc);background:var(--mt);border:1px solid transparent;font:inherit;letter-spacing:0;transition:background .15s,color .15s}" +
    ".menu-sito a:hover,.menu-sito a[aria-current]{background:var(--mc);color:#fff}" +
    ".menu-sito a.ms-casa{--mc:#23262a;--mt:#fff;border-color:#d6d3cc;padding:0;width:40px;justify-content:center;font-size:19px}" +
    ".menu-sito a.ms-casa:hover,.menu-sito a.ms-casa[aria-current]{background:#23262a;color:#fff;border-color:#23262a}" +
    ".menu-sito a:focus-visible,.menu-sito input:focus-visible{outline:3px solid #2b5f6b;outline-offset:2px}" +
    ".menu-sito form{display:flex;align-items:center;flex:0 1 260px;min-width:150px;position:relative;margin-left:auto}" +
    ".menu-sito input{-webkit-appearance:none;appearance:none;width:100%;height:40px;padding:0 14px 0 38px;border:1px solid #d6d3cc;border-radius:999px;background:#fff;color:#23262a;font:400 16px/normal system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:none;outline-offset:2px}" +
    ".menu-sito input::placeholder{color:#6b6f74;opacity:1}" +
    ".menu-sito input::-webkit-search-decoration{-webkit-appearance:none}" +
    ".menu-sito form::before{content:'';position:absolute;left:15px;top:50%;width:11px;height:11px;margin-top:-8px;border:2px solid #6b6f74;border-radius:50%;pointer-events:none}" +
    ".menu-sito form::after{content:'';position:absolute;left:26px;top:50%;width:2px;height:7px;margin-top:2px;background:#6b6f74;transform:rotate(-45deg);pointer-events:none}" +
    ".menu-sito button{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0}" +
    "@media (max-width:1100px){.menu-sito a{padding:0 13px;font-size:15px}.menu-sito a.ms-casa{padding:0}.menu-sito form{flex:1 1 170px}}" +
    /* schermi stretti: in alto ⌂ e ricerca (accanto ad A− / A+), sotto le materie in una riga */
    ".menu-sito .ms-corto{display:none}" +
    "@media (max-width:880px){.menu-sito,.menu-sito.ms-zm{display:grid;grid-template-columns:minmax(0,1fr);gap:8px;padding:10px 12px 8px}" +
    ".menu-sito.ms-zm{grid-template-columns:minmax(0,1fr) 178px}" +
    ".menu-sito form{grid-column:1;grid-row:1;margin:0;min-width:0}" +
    ".menu-sito .ms-materie{grid-column:1/-1;grid-row:2;flex-wrap:nowrap;gap:6px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}" +
    ".menu-sito .ms-materie::-webkit-scrollbar{display:none}" +
    ".menu-sito a{height:36px;padding:0 12px;font-size:14px}.menu-sito a.ms-casa{width:36px;font-size:17px}}" +
    "@media (max-width:600px){.menu-sito .ms-lungo{display:none}.menu-sito .ms-corto{display:inline}}" +
    "@media (max-width:420px){.menu-sito a{padding:0 10px}}" +
    "@media (max-width:360px){.menu-sito a{padding:0 8px;font-size:13px}.menu-sito input{padding-right:6px}}" +
    "@media print{.menu-sito{display:none!important}}";
  function menu() {
    if (document.querySelector(".menu-sito")) return;
    aggiungiStile(CSS_MENU);
    var nav = document.createElement("nav");
    nav.className = "menu-sito"; nav.setAttribute("aria-label", "Menu del sito");
    var c = document.createElement("a");
    c.href = ROOT + "index.html"; c.className = "ms-casa"; c.textContent = "\u2302";
    c.title = "Materiali didattici: la pagina principale"; c.setAttribute("aria-label", "Materiali didattici: pagina principale");
    if (home) c.setAttribute("aria-current", "page");
    var mat = document.createElement("div"); mat.className = "ms-materie";
    mat.appendChild(c);
    for (var i = 0; i < MENU.length; i++) {
      var k = MENU[i][0], col = MENU[i][1], a = document.createElement("a");
      a.href = ROOT + k + "/index.html" + (k === "geografia" ? "?classe=prima" : "");
      if (k === "educazione-civica") a.innerHTML = '<span class="ms-lungo">Educazione civica</span><span class="ms-corto">Ed. civica</span>';
      else a.textContent = MATERIE[k];
      a.style.setProperty("--mc", col);
      a.style.setProperty("--mt", "color-mix(in srgb, " + col + " 12%, #fff)");
      if (!window.CSS || !CSS.supports || !CSS.supports("color", "color-mix(in srgb, red 10%, #fff)")) a.style.setProperty("--mt", "#f1efea");
      if (materia === k) a.setAttribute("aria-current", paginaMateria ? "page" : "true");
      mat.appendChild(a);
    }
    nav.appendChild(mat);
    if (document.querySelector(".zm")) nav.className += " ms-zm";
    var f = document.createElement("form");
    f.action = ROOT + "cerca.html"; f.method = "get"; f.setAttribute("role", "search");
    var inp = document.createElement("input");
    inp.type = "search"; inp.name = "q"; inp.placeholder = "Cerca nel sito\u2026";
    inp.setAttribute("aria-label", "Cerca nel sito"); inp.autocomplete = "off";
    var bt = document.createElement("button"); bt.type = "submit"; bt.textContent = "Cerca";
    f.appendChild(inp); f.appendChild(bt);
    f.addEventListener("submit", function (e) { if (!inp.value.trim()) { e.preventDefault(); location.href = ROOT + "cerca.html"; } });
    /* la ricerca sta nel menu, a destra, subito prima dei pulsanti A− / A+;
       scorre via con il menu quando si scorre la pagina */
    var zm = document.querySelector(".zm"), altroZoom = zm ? null : zoomInAlto();
    nav.appendChild(f);
    if (altroZoom && !/ms-zm/.test(nav.className)) nav.className += " ms-zm";
    document.body.insertBefore(nav, primoElemento());

    /* lo spazio in alto che le pagine lasciavano per i pulsanti A− / A+ ora lo occupa il menu */
    var bs = document.body.style;
    if (document.querySelector(".zm") && getComputedStyle(document.body).paddingTop === "40px") bs.paddingTop = "0px";

    /* il menu non si ingrandisce con la pagina (come i pulsanti A− / A+) */
    var html = document.documentElement;
    /* se la pagina ha margini o spazi interni, il menu va comunque fino all'angolo in alto a sinistra */
    var cs = getComputedStyle(document.body), blocco = /^(block|flow-root)$/.test(cs.display);
    function px(v) { return parseFloat(v) || 0; }
    function fermo() {
      var z = parseFloat(html.style.zoom) || 1, want = z === 1 ? "" : String(1 / z);
      if (nav.style.zoom !== want) nav.style.zoom = want;
      if (blocco) {
        var t = -(px(cs.marginTop) + px(cs.paddingTop)) * z, l = -(px(cs.marginLeft) + px(cs.paddingLeft)) * z, r = -(px(cs.marginRight) + px(cs.paddingRight)) * z;
        var mt = t ? t + "px" : "", ml = l ? l + "px" : "", mr = r ? r + "px" : "";
        if (nav.style.marginTop !== mt) nav.style.marginTop = mt;
        if (nav.style.marginLeft !== ml) nav.style.marginLeft = ml;
        if (nav.style.marginRight !== mr) nav.style.marginRight = mr;
      }
      if (nav.style.transform) { nav.style.transform = ""; nav.style.width = ""; nav.style.marginBottom = ""; nav.style.transformOrigin = ""; }
      accanto();
    }
    /* a destra il menu lascia libero lo spazio dei pulsanti A− / A+ (fissi), così la ricerca finisce subito prima */
    function accanto() {
      var w = document.documentElement.clientWidth, destra = 14;
      if (zm) destra = (parseFloat(getComputedStyle(zm).right) || 10) + zm.offsetWidth + 8;
      else if (altroZoom) {
        var r = altroZoom.getBoundingClientRect();
        if (getComputedStyle(altroZoom).position === "fixed") destra = w - r.left + 8;
      }
      var pr = w > 880 ? Math.round(destra) + "px" : "";
      if (nav.style.paddingRight !== pr) nav.style.paddingRight = pr;
    }
    fermo();
    if (window.MutationObserver) {
      var mo = new MutationObserver(fermo);
      mo.observe(html, { attributes: true, attributeFilter: ["style"] });
      mo.observe(nav, { attributes: true, attributeFilter: ["style"] });
    }
    window.addEventListener("resize", fermo);
  }

  /* il gruppo di pulsanti A− / A+ della pagina, se è fisso in alto a destra */
  function zoomInAlto() {
    var b = document.querySelectorAll("button,[role=button],a");
    for (var i = 0; i < b.length; i++) {
      if (!/^A\s*[+\uff0b]$/.test(testo(b[i]))) continue;
      for (var el = b[i]; el && el !== document.body; el = el.parentElement) {
        if (getComputedStyle(el).position !== "fixed") continue;
        var r = el.getBoundingClientRect();
        if (r.top < 90 && r.height < 90 && r.right > document.documentElement.clientWidth - 60) return el;
        return null;
      }
    }
    return null;
  }

  /* ---------- 2. ingrandimento A− / A+ ---------- */
  function haZoom() {
    if (document.querySelector(".zm")) return true;
    var b = document.querySelectorAll("button,[role=button],a");
    for (var i = 0; i < b.length; i++) {
      var t = testo(b[i]), l = (b[i].getAttribute("aria-label") || "") + " " + (b[i].title || "");
      if (/^A\s*[+\uff0b]$/.test(t) || /ingrand|allarga|aumenta (il )?testo|dimensione del testo/i.test(l)) return true;
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
  function parts(){ return Array.prototype.filter.call(document.body.children,function(e){ return !e.matches('.zm,.menu-sito,script,style,link,template'); }); }
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

  function avvia() { try { zoom(); } catch (e) {} try { menu(); } catch (e) {} try { barra(); } catch (e) {} }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", avvia); else avvia();
})();
