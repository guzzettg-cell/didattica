/* Salva in Word: scarica il contenuto della pagina come vero documento Word (.docx), da modificare e stampare.
   Nella pagina: un pulsante <button type="button" data-salva-word>Salva in Word</button>
   e in fondo <script src="…/assets/salva-word.js"></script>.
   Si salva il contenuto di <main> (o dell'elemento indicato: data-salva-word="#id"),
   senza pulsanti, menu e parti con la classe «no-stampa» o «nav». Le caselle da spuntare diventano ☐ / ☑.
   Il file .docx viene costruito qui, senza librerie esterne: si apre con Word, Pages, LibreOffice e Google Documenti. */
(function(){
  /* ---------- 1. pulizia della pagina ---------- */
  function pulisci(nodo){
    nodo.querySelectorAll('script,style,button,nav,.no-stampa,.nav,.zm,[hidden],details:not([open])').forEach(function(e){ e.remove(); });
    var conCaselle=Array.prototype.filter.call(nodo.querySelectorAll('ul,ol'),function(l){ return l.querySelector('input[type=checkbox],input[type=radio]'); });
    nodo.querySelectorAll('input[type=checkbox],input[type=radio]').forEach(function(i){ i.replaceWith(document.createTextNode(i.checked?'☑ ':'☐ ')); });
    nodo.querySelectorAll('input[type=text],input:not([type]),textarea').forEach(function(i){
      var v=i.value||''; var s=document.createElement('span'); s.textContent=v?v:'______________________'; i.replaceWith(s); });
    nodo.querySelectorAll('select').forEach(function(sel){ var s=document.createElement('span'); s.textContent=sel.value||'__________'; sel.replaceWith(s); });
    nodo.querySelectorAll('img').forEach(function(im){ if(!/^data:/.test(im.src)) im.src=im.src; im.removeAttribute('loading'); });
    nodo.querySelectorAll('a').forEach(function(a){ a.href=a.href; });
    /* elenchi numerati con titoli dentro (come i «sei consigli»): il numero va davanti al titolo */
    nodo.querySelectorAll('ol').forEach(function(ol){
      var lis=Array.prototype.filter.call(ol.children,function(li){ return li.tagName==='LI'; });
      if(!lis.some(function(li){ return li.querySelector('h2,h3,h4'); })) return;
      var div=document.createElement('div');
      lis.forEach(function(li,k){ var h=li.querySelector('h2,h3,h4'); if(h) h.insertBefore(document.createTextNode((k+1)+'. '),h.firstChild);
        var d=document.createElement('div'); while(li.firstChild) d.appendChild(li.firstChild); div.appendChild(d); });
      ol.replaceWith(div);
    });
    nodo.querySelectorAll('[class]').forEach(function(e){ e.removeAttribute('class'); });
    nodo.querySelectorAll('[style]').forEach(function(e){ e.removeAttribute('style'); });
    conCaselle.forEach(function(l){ l.setAttribute('data-senza-punto',''); });
    return nodo;
  }

  /* ---------- 2. dall'HTML al testo di Word (WordprocessingML) ---------- */
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  var BLOCCO=/^(P|DIV|SECTION|ARTICLE|HEADER|FOOTER|MAIN|ASIDE|H[1-6]|UL|OL|LI|TABLE|THEAD|TBODY|TFOOT|TR|TD|TH|BLOCKQUOTE|FIGURE|FIGCAPTION|DL|DT|DD|HR|PRE|FORM|FIELDSET|LEGEND|ADDRESS)$/;
  function eBlocco(n){ return n.nodeType===1 && BLOCCO.test(n.tagName); }

  function Convertitore(immagini){
    this.out=[]; this.rels=[]; this.liste=[]; this.immagini=immagini; this.idImg=1;
  }
  Convertitore.prototype.nuovoRel=function(tipo,target,esterno){
    var id='rId'+(this.rels.length+10);
    this.rels.push('<Relationship Id="'+id+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/'+tipo+'" Target="'+esc(target)+'"'+(esterno?' TargetMode="External"':'')+'/>');
    return id;
  };
  Convertitore.prototype.nuovaLista=function(tipo){ this.liste.push(tipo); return this.liste.length; };

  Convertitore.prototype.inline=function(n,fmt,segs){
    if(n.nodeType===3){ segs.push({t:n.nodeValue,f:fmt}); return; }
    if(n.nodeType!==1) return;
    var tag=n.tagName, f=Object.assign({},fmt);
    if(tag==='BR'){ segs.push({br:true}); return; }
    if(tag==='IMG'){ segs.push({img:n}); return; }
    if(tag==='B'||tag==='STRONG') f.b=true;
    else if(tag==='I'||tag==='EM'||tag==='CITE'||tag==='DFN') f.i=true;
    else if(tag==='U'||tag==='INS') f.u=true;
    else if(tag==='S'||tag==='DEL') f.s=true;
    else if(tag==='SUB') f.v='subscript';
    else if(tag==='SUP') f.v='superscript';
    else if(tag==='MARK') f.h=true;
    else if(tag==='A' && /^(https?:|mailto:)/.test(n.getAttribute('href')||'')) f.a=n.getAttribute('href');
    for(var c=n.firstChild;c;c=c.nextSibling) this.inline(c,f,segs);
  };

  Convertitore.prototype.run=function(testo,f){
    var p='';
    if(f.b) p+='<w:b/>'; if(f.i) p+='<w:i/>'; if(f.s) p+='<w:strike/>';
    if(f.a) p+='<w:color w:val="1A4F8B"/>';
    if(f.h) p+='<w:highlight w:val="yellow"/>';
    if(f.u||f.a) p+='<w:u w:val="single"/>';
    if(f.v) p+='<w:vertAlign w:val="'+f.v+'"/>';
    return '<w:r>'+(p?'<w:rPr>'+p+'</w:rPr>':'')+'<w:t xml:space="preserve">'+esc(testo)+'</w:t></w:r>';
  };

  Convertitore.prototype.disegno=function(img){
    var d=this.immagini.get(img);
    if(!d){ var alt=img.getAttribute('alt'); return alt?this.run('['+alt+']',{i:true}):''; }
    var id=this.nuovoRel('image','media/'+d.nome), n=this.idImg++;
    var maxW=Math.min(parseInt(img.getAttribute('width'),10)||d.w, d.w, 600);
    var w=Math.round(maxW*9525), h=Math.round(maxW*d.h/d.w*9525);
    return '<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="'+w+'" cy="'+h+'"/><wp:docPr id="'+n+'" name="Immagine '+n+'" descr="'+esc(img.getAttribute('alt')||'')+'"/>'+
      '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">'+
      '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="'+n+'" name="'+d.nome+'"/><pic:cNvPicPr/></pic:nvPicPr>'+
      '<pic:blipFill><a:blip r:embed="'+id+'"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>'+
      '<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="'+w+'" cy="'+h+'"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>';
  };

  /* scrive un paragrafo con i pezzi raccolti; salta i paragrafi vuoti */
  Convertitore.prototype.paragrafo=function(segs,ctx,forza){
    var self=this, xml='', pieno=false, prevSpazio=true;
    var ultimo=-1; segs.forEach(function(s,i){ if(s.t!=null && /\S/.test(s.t)) ultimo=i; });
    segs.forEach(function(s,i){
      if(s.br){ xml+='<w:r><w:br/></w:r>'; prevSpazio=true; return; }
      if(s.img){ var x=self.disegno(s.img); if(x){ xml+=x; pieno=true; prevSpazio=false; } return; }
      var t=s.t.replace(/\s+/g,' ');
      if(prevSpazio) t=t.replace(/^ /,'');
      if(i>=ultimo) t=t.replace(/ $/,'');
      if(!t) return;
      prevSpazio=/ $/.test(t);
      if(/\S/.test(t)) pieno=true;
      var r=self.run(t,s.f);
      if(s.f.a){ r='<w:hyperlink r:id="'+self.nuovoRel('hyperlink',s.f.a,true)+'">'+r+'</w:hyperlink>'; }
      xml+=r;
    });
    if(!pieno && !forza) return;
    var ppr='';
    if(ctx.stile) ppr+='<w:pStyle w:val="'+ctx.stile+'"/>';
    var ind='';
    if(ctx.li){
      if(!ctx.li.usato && ctx.li.num){ ppr+='<w:numPr><w:ilvl w:val="'+ctx.li.liv+'"/><w:numId w:val="'+ctx.li.num+'"/></w:numPr>'; }
      else ind='<w:ind w:left="'+(ctx.li.num?567*(ctx.li.liv+1):283*ctx.li.liv)+'"/>';
      ctx.li.usato=true;
    } else if(ctx.rientro){ ind='<w:ind w:left="'+ctx.rientro+'"/>'; }
    if(ctx.bordo) ppr+='<w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="888888"/></w:pBdr>';
    ppr+=ind;
    if(ctx.centro) ppr+='<w:jc w:val="center"/>';
    this.out.push('<w:p>'+(ppr?'<w:pPr>'+ppr+'</w:pPr>':'')+xml+'</w:p>');
  };

  /* percorre un elemento: il testo diventa paragrafi, gli elementi di blocco vengono trattati a parte */
  Convertitore.prototype.blocchi=function(el,ctx){
    var segs=[], self=this, fmt=ctx.grassetto?{b:true}:{};
    function chiudi(){ if(segs.length){ self.paragrafo(segs,ctx); segs=[]; } }
    for(var c=el.firstChild;c;c=c.nextSibling){
      if(eBlocco(c)){ chiudi(); this.blocco(c,ctx); }
      else this.inline(c,fmt,segs);
    }
    chiudi();
  };

  Convertitore.prototype.blocco=function(el,ctx){
    var tag=el.tagName, self=this;
    var figlio=Object.assign({},ctx); delete figlio.stile; delete figlio.bordo; delete figlio.centro;
    if(/^H[1-6]$/.test(tag)){ figlio.stile='Heading'+Math.min(+tag[1],4); this.blocchi(el,figlio); return; }
    if(tag==='HR'){ this.paragrafo([],{bordo:true},true); return; }
    if(tag==='UL'||tag==='OL'){
      var liv=ctx.liv==null?0:ctx.liv+1;
      var senza=el.hasAttribute('data-senza-punto');
      var num=senza?0:this.nuovaLista(tag==='OL'?'n':'p');
      Array.prototype.forEach.call(el.children,function(li){
        if(li.tagName!=='LI') { self.blocco(li,figlio); return; }
        var c=Object.assign({},figlio,{liv:liv,li:{num:num,liv:liv,usato:false}});
        self.blocchi(li,c);
      });
      return;
    }
    if(tag==='TABLE'){ this.tabella(el); return; }
    if(tag==='BLOCKQUOTE'){ figlio.rientro=(ctx.rientro||0)+567; this.blocchi(el,figlio); return; }
    if(tag==='FIGCAPTION'){ figlio.centro=true; this.blocchi(el,figlio); return; }
    if(tag==='DT'){ figlio.grassetto=true; this.blocchi(el,figlio); return; }
    if(tag==='DD'){ figlio.rientro=(ctx.rientro||0)+567; this.blocchi(el,figlio); return; }
    if(tag==='LI'){ this.blocchi(el,figlio); return; }
    this.blocchi(el,figlio);
  };

  Convertitore.prototype.tabella=function(t){
    var self=this, righe=Array.prototype.filter.call(t.querySelectorAll('tr'),function(r){ return r.closest('table')===t; });
    if(!righe.length) return;
    var colonne=Math.max.apply(null,righe.map(function(r){ return Array.prototype.reduce.call(r.children,function(a,c){ return a+(parseInt(c.getAttribute('colspan'),10)||1); },0); }));
    var larg=Math.floor(9638/colonne), xml='<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/><w:tblBorders>'+
      ['top','left','bottom','right','insideH','insideV'].map(function(b){ return '<w:'+b+' w:val="single" w:sz="4" w:space="0" w:color="888888"/>'; }).join('')+
      '</w:tblBorders><w:tblCellMar><w:left w:w="85" w:type="dxa"/><w:right w:w="85" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>';
    for(var i=0;i<colonne;i++) xml+='<w:gridCol w:w="'+larg+'"/>';
    xml+='</w:tblGrid>';
    righe.forEach(function(r){
      xml+='<w:tr>';
      Array.prototype.forEach.call(r.children,function(c){
        if(c.tagName!=='TD'&&c.tagName!=='TH') return;
        var span=parseInt(c.getAttribute('colspan'),10)||1, salva=self.out; self.out=[];
        self.blocchi(c,{grassetto:c.tagName==='TH'});
        var dentro=self.out.join('')||'<w:p/>'; self.out=salva;
        xml+='<w:tc><w:tcPr><w:tcW w:w="'+(larg*span)+'" w:type="dxa"/>'+(span>1?'<w:gridSpan w:val="'+span+'"/>':'')+(c.tagName==='TH'?'<w:shd w:val="clear" w:color="auto" w:fill="E3EAE6"/>':'')+'</w:tcPr>'+dentro+'</w:tc>';
      });
      xml+='</w:tr>';
    });
    xml+='</w:tbl>';
    this.out.push(xml, '<w:p/>');
  };

  /* ---------- 3. le parti fisse del file .docx ---------- */
  var NS='xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"';
  var XML='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';

  function stili(){
    function titolo(n,sz,prima){ return '<w:style w:type="paragraph" w:styleId="Heading'+n+'"><w:name w:val="heading '+n+'"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/>'+
      '<w:pPr><w:keepNext/><w:spacing w:before="'+prima+'" w:after="80"/><w:outlineLvl w:val="'+(n-1)+'"/></w:pPr><w:rPr><w:b/><w:sz w:val="'+sz+'"/></w:rPr></w:style>'; }
    return XML+'<w:styles '+NS+'><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:eastAsia="Arial" w:cs="Arial"/><w:sz w:val="24"/><w:szCs w:val="24"/><w:lang w:val="it-IT"/></w:rPr></w:rPrDefault>'+
      '<w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>'+
      '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>'+
      titolo(1,40,0)+titolo(2,30,280)+titolo(3,25,200)+titolo(4,24,160)+'</w:styles>';
  }

  function numerazione(liste){
    var punti=['•','◦','▪','•','◦','▪','•','◦','▪'];
    function livelli(tipo){
      var x='';
      for(var l=0;l<9;l++){
        x+='<w:lvl w:ilvl="'+l+'"><w:start w:val="1"/>'+
          (tipo==='n'?'<w:numFmt w:val="'+(l%3===1?'lowerLetter':'decimal')+'"/><w:lvlText w:val="%'+(l+1)+'."/>':'<w:numFmt w:val="bullet"/><w:lvlText w:val="'+punti[l]+'"/>')+
          '<w:lvlJc w:val="left"/><w:pPr><w:ind w:left="'+(567*(l+1))+'" w:hanging="283"/></w:pPr></w:lvl>';
      }
      return x;
    }
    var x=XML+'<w:numbering '+NS+'>'+
      '<w:abstractNum w:abstractNumId="1"><w:multiLevelType w:val="hybridMultilevel"/>'+livelli('p')+'</w:abstractNum>'+
      '<w:abstractNum w:abstractNumId="2"><w:multiLevelType w:val="hybridMultilevel"/>'+livelli('n')+'</w:abstractNum>';
    liste.forEach(function(t,i){
      x+='<w:num w:numId="'+(i+1)+'"><w:abstractNumId w:val="'+(t==='n'?2:1)+'"/>'+(t==='n'?'<w:lvlOverride w:ilvl="0"><w:startOverride w:val="1"/></w:lvlOverride>':'')+'</w:num>';
    });
    return x+'</w:numbering>';
  }

  /* ---------- 4. le immagini (se il browser le può leggere) ---------- */
  function tipoImmagine(b){
    if(b[0]===0x89&&b[1]===0x50) return 'png';
    if(b[0]===0xFF&&b[1]===0xD8) return 'jpeg';
    if(b[0]===0x47&&b[1]===0x49) return 'gif';
    return null;
  }
  function leggiImmagini(nodo){
    var mappa=new Map(), k=0;
    return Promise.all(Array.prototype.map.call(nodo.querySelectorAll('img'),function(img){
      return fetch(img.src).then(function(r){ if(!r.ok) throw 0; return r.arrayBuffer(); }).then(function(buf){
        var b=new Uint8Array(buf), tipo=tipoImmagine(b); if(!tipo) throw 0;
        return new Promise(function(ok){
          var u=URL.createObjectURL(new Blob([b])), im=new Image();
          im.onload=function(){ URL.revokeObjectURL(u); if(im.naturalWidth){ k++; mappa.set(img,{dati:b,tipo:tipo,nome:'img'+k+'.'+(tipo==='jpeg'?'jpg':tipo),w:im.naturalWidth,h:im.naturalHeight}); } ok(); };
          im.onerror=function(){ URL.revokeObjectURL(u); ok(); };
          im.src=u;
        });
      }).catch(function(){ /* immagine non leggibile (per esempio aprendo la pagina dal computer): resta il testo alternativo */ });
    })).then(function(){ return mappa; });
  }

  /* ---------- 5. il file zip ---------- */
  var TAB=(function(){ var t=new Uint32Array(256); for(var n=0;n<256;n++){ var c=n; for(var k=0;k<8;k++) c=c&1?0xEDB88320^(c>>>1):c>>>1; t[n]=c>>>0; } return t; })();
  function crc32(b){ var c=0xFFFFFFFF; for(var i=0;i<b.length;i++) c=TAB[(c^b[i])&255]^(c>>>8); return (c^0xFFFFFFFF)>>>0; }
  function zip(file){
    var enc=new TextEncoder(), parti=[], centrale=[], pos=0;
    file.forEach(function(f){
      var nome=enc.encode(f.nome), dati=typeof f.dati==='string'?enc.encode(f.dati):f.dati, crc=crc32(dati);
      var h=new DataView(new ArrayBuffer(30));
      h.setUint32(0,0x04034b50,true); h.setUint16(4,20,true); h.setUint16(6,0x0800,true); h.setUint16(8,0,true);
      h.setUint16(10,0,true); h.setUint16(12,0x21,true); h.setUint32(14,crc,true); h.setUint32(18,dati.length,true); h.setUint32(22,dati.length,true);
      h.setUint16(26,nome.length,true); h.setUint16(28,0,true);
      var c=new DataView(new ArrayBuffer(46));
      c.setUint32(0,0x02014b50,true); c.setUint16(4,20,true); c.setUint16(6,20,true); c.setUint16(8,0x0800,true); c.setUint16(10,0,true);
      c.setUint16(12,0,true); c.setUint16(14,0x21,true); c.setUint32(16,crc,true); c.setUint32(20,dati.length,true); c.setUint32(24,dati.length,true);
      c.setUint16(28,nome.length,true); c.setUint32(42,pos,true);
      parti.push(new Uint8Array(h.buffer),nome,dati); centrale.push(new Uint8Array(c.buffer),nome);
      pos+=30+nome.length+dati.length;
    });
    var dim=centrale.reduce(function(a,b){ return a+b.length; },0), e=new DataView(new ArrayBuffer(22));
    e.setUint32(0,0x06054b50,true); e.setUint16(8,file.length,true); e.setUint16(10,file.length,true); e.setUint32(12,dim,true); e.setUint32(16,pos,true);
    return new Blob(parti.concat(centrale,[new Uint8Array(e.buffer)]),{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
  }

  /* ---------- 6. salva ---------- */
  function costruisci(nodo,titolo,immagini){
    var cv=new Convertitore(immagini);
    cv.blocchi(nodo,{});
    var corpo=XML+'<w:document '+NS+'><w:body>'+cv.out.join('')+
      '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="567" w:footer="567" w:gutter="0"/></w:sectPr></w:body></w:document>';
    var rels=XML+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'+
      '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>'+
      cv.rels.join('')+'</Relationships>';
    var tipi=XML+'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'+
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>'+
      '<Default Extension="png" ContentType="image/png"/><Default Extension="jpg" ContentType="image/jpeg"/><Default Extension="gif" ContentType="image/gif"/>'+
      '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'+
      '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>'+
      '<Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>'+
      '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>';
    var radice=XML+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>'+
      '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>';
    var core=XML+'<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'+
      '<dc:title>'+esc(titolo)+'</dc:title><dc:language>it-IT</dc:language></cp:coreProperties>';
    var file=[{nome:'[Content_Types].xml',dati:tipi},{nome:'_rels/.rels',dati:radice},{nome:'docProps/core.xml',dati:core},
      {nome:'word/document.xml',dati:corpo},{nome:'word/styles.xml',dati:stili()},{nome:'word/numbering.xml',dati:numerazione(cv.liste)},
      {nome:'word/_rels/document.xml.rels',dati:rels}];
    immagini.forEach(function(d){ file.push({nome:'word/media/'+d.nome,dati:d.dati}); });
    return zip(file);
  }

  function salva(selettore){
    var orig=document.querySelector(selettore||'main')||document.body;
    var nodo=pulisci(orig.cloneNode(true));
    var titolo=((document.querySelector('h1')||{}).textContent||document.title||'scheda').trim();
    var nome=titolo.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'scheda';
    return leggiImmagini(nodo).then(function(immagini){
      var blob=costruisci(nodo,titolo,immagini);
      var a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=nome+'.docx';
      document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); },1500);
      return blob;
    });
  }
  window.salvaInWord=salva;
  document.querySelectorAll('[data-salva-word]').forEach(function(b){
    b.addEventListener('click',function(){ salva(b.getAttribute('data-salva-word')||null); });
  });
})();
