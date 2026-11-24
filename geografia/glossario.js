/* =====================================================================
   GLOSSARIO DEI TERMINI GEOGRAFICI · file comune a tutte le pagine di geografia
   ---------------------------------------------------------------------
   AGGIUNGERE UNA PAROLA: copia un blocco qui sotto e cambia
     id     → codice senza spazi né accenti (serve per il collegamento)
     t      → la parola come compare nel glossario
     breve  → definizione corta (compare nel tooltip)
     lungo  → spiegazione in più (solo nella pagina del glossario; può mancare)
     lezioni→ [["Titolo", "percorso da geografia/"], ...] (può mancare)

   USARE LA PAROLA IN UNA PAGINA (tooltip):
     <button type="button" class="gl-term" data-term="ID">parola</button>
   e prima di </body>:
     <script src="(../ quanti servono)geografia/glossario.js"></script>
   ===================================================================== */
window.GLOSSARIO_GEO = [
  {
    id: "circolo-illuminazione",
    t: "Circolo di illuminazione",
    breve: "La linea immaginaria che divide la Terra in due metà: quella illuminata dal Sole, dove è dì, e quella al buio, dove è notte.",
    lungo: "Divide sempre la Terra in due metà uguali. Mentre la Terra ruota, ogni luogo lo attraversa due volte al giorno: quando entra nella metà illuminata vede sorgere il Sole, quando entra nella metà buia lo vede tramontare. Agli equinozi il circolo di illuminazione passa per i due poli e in tutta la Terra il dì e la notte durano 12 ore. Nel resto dell'anno, per l'inclinazione dell'asse terrestre, non passa per i poli: per questo il dì e la notte hanno durata diversa e cambiano con le stagioni. Il passaggio dal dì alla notte non è netto: l'atmosfera diffonde la luce e crea il crepuscolo.",
    lezioni: [
      ["Il moto di rotazione", "terza/la-terra/lezioni/rotazione-terra.html"],
      ["Il crepuscolo", "terza/la-terra/lezioni/crepuscolo.html"],
      ["Il moto di rivoluzione", "terza/la-terra/lezioni/rivoluzione.html"]
    ]
  }
];

/* ---------------- da qui in giù non serve cambiare nulla ---------------- */
(function () {
  var G = window.GLOSSARIO_GEO, BY = {};
  G.forEach(function (g) { BY[g.id] = g; });
  var me = document.currentScript && document.currentScript.src;
  var BASE = me ? me.replace(/glossario\.js(\?.*)?$/, "") : "";   // cartella geografia/
  var PAGINA = BASE + "glossario.html";

  var css = document.createElement("style");
  css.textContent =
    ".gl-term{font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:help;text-align:inherit;" +
    "text-decoration:underline dotted;text-decoration-color:var(--accent,#c2410c);text-decoration-thickness:2px;text-underline-offset:3px}" +
    ".gl-term:hover,.gl-term[aria-expanded=true]{color:var(--accent,#c2410c)}" +
    "figcaption .gl-term:hover,figcaption .gl-term[aria-expanded=true]{color:#fff;text-decoration-color:#fff}" +
    "#gl-tip{position:fixed;z-index:200;max-width:min(22rem,calc(100vw - 1.5rem));background:var(--ink,#152131);color:var(--paper,#fff);" +
    "border-radius:8px;padding:.7rem .9rem;font:400 .97rem/1.45 var(--body,system-ui,sans-serif);box-shadow:0 6px 20px rgba(0,0,0,.25);text-align:left}" +
    "#gl-tip b{display:block;font-family:var(--display,inherit);font-size:1.1rem;margin-bottom:.2rem}" +
    "#gl-tip a{display:inline-block;margin-top:.45rem;color:inherit;font-weight:700;font-size:.9rem;text-underline-offset:3px}" +
    "#gl-tip[hidden]{display:none}" +
    "@media print{#gl-tip{display:none!important}.gl-term{text-decoration:none}}";
  document.head.appendChild(css);

  function ready(fn) { if (document.readyState !== "loading") fn(); else document.addEventListener("DOMContentLoaded", fn); }

  ready(function () {
    /* ---- tooltip ---- */
    var tip = document.createElement("div");
    tip.id = "gl-tip"; tip.setAttribute("role", "tooltip"); tip.hidden = true;
    document.body.appendChild(tip);
    var tipFor = null, pinned = false;

    function show(el) {
      var g = BY[el.getAttribute("data-term")]; if (!g) return;
      if (tipFor && tipFor !== el) tipFor.setAttribute("aria-expanded", "false");
      tipFor = el; el.setAttribute("aria-expanded", "true"); el.setAttribute("aria-describedby", "gl-tip");
      tip.innerHTML = "";
      var b = document.createElement("b"); b.textContent = g.t; tip.appendChild(b);
      tip.appendChild(document.createTextNode(g.breve));
      if (!document.getElementById("glossario-lista")) {
        tip.appendChild(document.createElement("br"));
        var a = document.createElement("a"); a.href = PAGINA + "#" + g.id; a.textContent = "→ nel glossario"; tip.appendChild(a);
      }
      tip.hidden = false;
      var r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
      var x = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), window.innerWidth - w - 8);
      var y = r.bottom + 8; if (y + h > window.innerHeight - 8) y = r.top - h - 8;
      tip.style.left = x + "px"; tip.style.top = Math.max(8, y) + "px";
    }
    function hide() {
      if (tipFor) { tipFor.setAttribute("aria-expanded", "false"); tipFor.removeAttribute("aria-describedby"); }
      tipFor = null; pinned = false; tip.hidden = true;
    }
    function term(e) { return e.target.closest ? e.target.closest(".gl-term") : null; }
    document.querySelectorAll(".gl-term").forEach(function (el) {
      el.setAttribute("aria-expanded", "false");
      var g = BY[el.getAttribute("data-term")];
      if (g && !el.title) el.setAttribute("aria-label", el.textContent + ": tocca per la definizione");
    });
    document.addEventListener("mouseover", function (e) { var t = term(e); if (t && !pinned) show(t); });
    document.addEventListener("mouseout", function (e) {
      var t = term(e); if (t && !pinned && !t.contains(e.relatedTarget) && !(e.relatedTarget && tip.contains(e.relatedTarget))) hide();
    });
    tip.addEventListener("mouseleave", function () { if (!pinned) hide(); });
    document.addEventListener("focusin", function (e) { var t = term(e); if (t) show(t); });
    document.addEventListener("focusout", function (e) { if (term(e) && !pinned && !tip.contains(e.relatedTarget)) hide(); });
    document.addEventListener("click", function (e) {
      var t = term(e);
      if (t) { e.preventDefault(); e.stopPropagation(); if (pinned && tipFor === t) hide(); else { show(t); pinned = true; } return; }
      if (!tip.contains(e.target)) hide();
    }, true);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !tip.hidden) hide(); });
    window.addEventListener("scroll", function () { if (!tip.hidden) hide(); }, { passive: true });

    /* ---- pagina del glossario ---- */
    var box = document.getElementById("glossario-lista");
    if (!box) return;
    var lista = G.slice().sort(function (a, b) { return a.t.localeCompare(b.t, "it"); });
    var lettere = document.getElementById("glossario-lettere");
    var viste = {};
    lista.forEach(function (g) {
      var L = g.t.normalize("NFD").charAt(0).toUpperCase();
      if (!viste[L]) {
        viste[L] = true;
        var h = document.createElement("h2"); h.className = "lettera"; h.id = "lettera-" + L; h.textContent = L; box.appendChild(h);
        if (lettere) { var a = document.createElement("a"); a.href = "#lettera-" + L; a.textContent = L; lettere.appendChild(a); }
      }
      var d = document.createElement("article"); d.className = "voce"; d.id = g.id;
      d.setAttribute("data-cerca", (g.t + " " + g.breve + " " + (g.lungo || "")).toLowerCase());
      var h3 = document.createElement("h3"); h3.textContent = g.t; d.appendChild(h3);
      var p = document.createElement("p"); p.className = "breve"; p.textContent = g.breve; d.appendChild(p);
      if (g.lungo) { var q = document.createElement("p"); q.textContent = g.lungo; d.appendChild(q); }
      if (g.lezioni && g.lezioni.length) {
        var v = document.createElement("p"); v.className = "vedi"; v.appendChild(document.createTextNode("Nelle lezioni: "));
        g.lezioni.forEach(function (l, i) {
          if (i) v.appendChild(document.createTextNode(" · "));
          var a = document.createElement("a"); a.href = BASE + l[1]; a.textContent = l[0]; v.appendChild(a);
        });
        d.appendChild(v);
      }
      box.appendChild(d);
    });
    var n = document.getElementById("glossario-numero");
    if (n) n.textContent = lista.length === 1 ? "1 parola" : lista.length + " parole";
    var cerca = document.getElementById("glossario-cerca");
    if (cerca) cerca.addEventListener("input", function () {
      var s = cerca.value.trim().toLowerCase();
      box.querySelectorAll(".voce").forEach(function (v) { v.hidden = s && v.getAttribute("data-cerca").indexOf(s) < 0; });
      box.querySelectorAll(".lettera").forEach(function (h) {
        var x = h.nextElementSibling, vis = false;
        while (x && !x.classList.contains("lettera")) { if (!x.hidden) vis = true; x = x.nextElementSibling; }
        h.hidden = !vis;
      });
    });
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
  });
})();
