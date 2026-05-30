(function () {
  'use strict';

  /* 
    I show this message when every single index is simultaneously bad:
    - SFI below 70
    - Kp at or above 5
    - A-Index at or above 30
    It's the one case where I feel no recommendation makes sense, so I
    prefer to be honest and a bit personal rather than suggest a band.
  */
  var WORST_CONDITIONS_TEXT = 'Station QRT — all indices in the red. Sit back, enjoy the noise and wait for better conditions. Mate, today no radio is feasible. Better go for a walk';

  /* 
    I use these tables to compute band conditions myself when the hamqsl
    XML feed is unavailable or blocked by CORS. Each entry covers a band
    group, the minimum SFI needed before that group even starts to open
    and two lookup arrays (one for daytime, one for nighttime) indexed
    by the Kp bucket (0 = Kp < 2, 1 = 2–3, 2 = 3–4, 3 = 4–5, 4 = 5–6,
    5 = Kp 6+). The values in those arrays are condition indices:
    - 0 = Good  
    - 1 = Fair  
    - 2 = Poor  
    - 3 = Closed  
    - 4 = Closed
    I deliberately keep Kp 3 mild because it only meaningfully hurts HF
    at night and at high latitudes; during the day it's barely felt.
  */
  var BANDS = [
    { name:'80m-40m', minSfi:0,   day:[0,0,0,1,2,3], night:[0,0,0,1,2,3] },
    { name:'30m-20m', minSfi:80,  day:[0,0,0,1,2,3], night:[0,0,1,2,3,4] },
    { name:'17m-15m', minSfi:100, day:[0,0,0,1,2,3], night:[1,1,1,2,3,4] },
    { name:'12m-10m', minSfi:120, day:[0,0,0,1,2,3], night:[2,3,3,4,4,4] },
  ];
  var C_LBL = ['Good','Fair','Poor','Closed','Closed'];
  var C_CLS = ['pd-cond--good','pd-cond--fair','pd-cond--poor','pd-cond--closed','pd-cond--closed'];

  /* 
    I use this map to translate the text labels that hamqsl sends in its
    XML feed into the same Good/Fair/Poor/Closed vocabulary I use in my
    own fallback tables, so the band table always looks consistent
    regardless of which data source won the race. 
  */
  var COND_MAP = {
    'Excellent':{l:'Good',  c:'pd-cond--good'},
    'Good':     {l:'Good',  c:'pd-cond--good'},
    'Fair':     {l:'Fair',  c:'pd-cond--fair'},
    'Poor':     {l:'Poor',  c:'pd-cond--poor'},
    'No Signal':{l:'Closed',c:'pd-cond--closed'},
  };

  /* 
    I map a raw Kp value to one of six buckets so I can index into the
    condition arrays above without writing a chain of if/else every time. 
  */
  function kpBucket(kp) { return kp<2?0:kp<3?1:kp<4?2:kp<5?3:kp<6?4:5; }

  /* 
    I compute the condition index for a single band/time combination.
    It starts from the Kp-based baseline and then nudge it one step worse
    if the SFI is too low to support that band group and a second step
    if it is really far below the threshold (more than 20 units under).
    That way low solar flux stacks on top of geomagnetic disturbance.   
  */
  function condIdx(sfi, minSfi, arr, kp) {
    var b = arr[Math.min(kpBucket(kp), arr.length-1)];
    if (sfi !== null && sfi < minSfi)    b = Math.min(b+1, 4);
    if (sfi !== null && sfi < minSfi-20) b = Math.min(b+1, 4);
    return b;
  }

  /* 
    Two tiny DOM helpers I use throughout the code to avoid repeating
    the getElementById + textContent dance everywhere.                  
  */
  function setEl(id, text) { var e=document.getElementById(id); if(e) e.textContent=text; }
  function setVal(id, text, cls) {
    var e=document.getElementById(id); if(!e) return;
    e.textContent=text; e.className='pd-val'+(cls?' '+cls:'');
  }

  /* 
    I translate a Kp value into the CSS class that colours the matching
    bar in the 24-hour Kp chart. Green for quiet, through amber and
    orange, to red for storm-level activity.
  */
  function barClass(kp) {
    return kp<2?'pd-bar--k01':kp<3?'pd-bar--k2':kp<4?'pd-bar--k3':kp<5?'pd-bar--k4':'pd-bar--k5p';
  }

  /* 
    I receive the last eight rows from the NOAA planetary Kp JSON.  That
    covers roughly 24 hours at 3-hour intervals and draw one bar per
    row. I cap Kp at 9 so the bar never overflows the chart area and 
    label each bar with the UTC hour so users can see at a glance when
    each reading was recorded.
  */
  function renderBars(rows) {
    var c = document.getElementById('pd-bars'); if(!c) return;
    c.innerHTML = '';
    rows.forEach(function(row) {
      var kp  = Math.min(parseFloat(row.Kp)||0, 9);
      var pct = (kp/9*100).toFixed(1);
      var dt  = new Date(row.time_tag+'Z');
      var lbl = ('0'+dt.getUTCHours()).slice(-2)+'h';

      var col = document.createElement('div'); col.className = 'pd-bar-col';
      var bar = document.createElement('div');
      bar.className = 'pd-bar '+barClass(kp);
      bar.style.height = pct+'%';
      bar.title = 'Kp '+kp.toFixed(1)+' · '+lbl+' UTC';
      var l = document.createElement('div'); l.className='pd-bar-lbl'; l.textContent=lbl;
      col.appendChild(bar); col.appendChild(l); c.appendChild(col);
    });
  }

  /* 
    I call this when the hamqsl XML feed is unavailable. Compute every
    band's day and night condition from my own tables using the live SFI
    and Kp values already fetched from NOAA.
  */
  function renderBandsFallback(sfi, kp) {
    var tb=document.getElementById('pd-band-tbody'); if(!tb) return;
    tb.innerHTML='';
    BANDS.forEach(function(b) {
      var di=condIdx(sfi,b.minSfi,b.day,kp), ni=condIdx(sfi,b.minSfi,b.night,kp);
      var tr=document.createElement('tr');
      tr.innerHTML='<td>'+b.name+'</td><td class="'+C_CLS[di]+'">'+C_LBL[di]+'</td><td class="'+C_CLS[ni]+'">'+C_LBL[ni]+'</td>';
      tb.appendChild(tr);
    });
  }

  /* 
    I prefer to use the hamqsl pre-computed band conditions when they are
    available because they incorporate more factors than my simple table.
    I parse their XML, look for the calculatedConditions/band nodes and
    map each label through COND_MAP so the styling stays consistent.
    Return false if the document looks empty so the caller knows to
    fall back to my own calculation.
  */
  function renderBandsXml(xmlDoc) {
    var tb=document.getElementById('pd-band-tbody'); if(!tb) return false;
    var bands=xmlDoc.querySelectorAll('calculatedConditions band'); if(!bands.length) return false;
    tb.innerHTML='';
    bands.forEach(function(band) {
      var name=band.getAttribute('name');
      var dayTx=(band.querySelector('condition[name="day"]')||{}).textContent||'—';
      var ngtTx=(band.querySelector('condition[name="night"]')||{}).textContent||'—';
      var d=COND_MAP[dayTx]||{l:dayTx,c:''}, n=COND_MAP[ngtTx]||{l:ngtTx,c:''};
      var tr=document.createElement('tr');
      tr.innerHTML='<td>'+name+'</td><td class="'+d.c+'">'+d.l+'</td><td class="'+n.c+'">'+n.l+'</td>';
      tb.appendChild(tr);
    });
    return true;
  }

  /* 
    I run the incoming indices through a priority-ordered flowchart and
    return an object with the recommendation text and a CSS modifier class.
    The class drives the colour of the strip:
      pd-rec--good  → green  (favourable, go operate)
      pd-rec--fair  → amber  (usable with caveats)
      pd-rec--poor  → orange (degraded, retreat to low bands)
      pd-rec--bad   → red    (storm or blackout, stay off HF)
    Check the worst situations first so a severe storm always wins
    over a merely low SFI, and so on down the chain.
  */
  function getRecommendation(sfi, kp, ai, xrLetter, bz) {
    /* 
      1. Everything is simultaneously terrible: very low SFI, active
        geomagnetic storm and a high A-Index all at once. I show the
        personal message rather than pretend a band recommendation helps. 
    */
    if (sfi !== null && sfi < 70 && kp >= 5 && !isNaN(ai) && ai >= 30) {
      return { text: WORST_CONDITIONS_TEXT, cls: 'pd-rec--bad' };
    }

    /* 
      2. An X-class flare is in progress. The dayside ionosphere is
        absorbing HF like a sponge. There is no point trying. EME or
        satellite are the only realistic options right now.
    */
    if (xrLetter === 'X') {
      return { text: 'QRT. HF radio blackout in progress. Consider EME or satellite', cls: 'pd-rec--bad' };
    }

    /* 
      3. M-class flare: the dayside is partially degraded but not dead.
        Best is to retreat to the lowest bands and NVIS paths which are less
        sensitive to D-layer absorption than the higher bands.
    */
    if (xrLetter === 'M') {
      return { text: '160m to 60m NVIS. M-class flare, dayside HF degraded', cls: 'pd-rec--poor' };
    }

    /* 
      4. Severe geomagnetic storm (Kp ≥ 7): HF is essentially useless
        at mid-latitudes. I recommend moving to VHF/UHF where aurora
        scatter or EME are at least viable.
    */
    if (kp >= 7) {
      return { text: 'Aurora scatter or EME on VHF/UHF. Severe geomagnetic storm (Kp ≥ 7)', cls: 'pd-rec--bad' };
    }

    /* 
      5. Moderate-to-major storm (Kp 5–6): HF is badly hit but not
        completely gone. VHF aurora is often active and worth trying,
        and NVIS on the lowest bands can still support local paths.
    */
    if (kp >= 5) {
      return { text: 'VHF Aurora. 160m to 60m NVIS. Geomagnetic storm active', cls: 'pd-rec--poor' };
    }

    /* 
      6. Kp is elevated (3–4) and SFI is already low. The combination
        closes the higher bands and makes the mid-bands unreliable.
        I hide in the low bands where the ionosphere is most resilient,
        or run WSPR beacons to at least gather propagation data.
    */
    if (kp >= 3 && (sfi === null || sfi < 80)) {
      return { text: '80m or 160m CW/WSPR. Low SFI + disturbed ionosphere', cls: 'pd-rec--poor' };
    }

    /* 
      7. SFI above 150 with very quiet geo. This is as good as it gets.
        The F2 layer is thick and the 10–15m bands are wide open for DX.
        I go straight for the top of the dial.
    */
    if (sfi !== null && sfi >= 150 && kp < 2) {
      return { text: '10m/12m/15m. F2 propagation peak, excellent DX window', cls: 'pd-rec--good' };
    }

    /* 
      8. SFI 120–149 with quiet geo: still excellent conditions. 10m and
        15m are solid, 20m is reliable all day, great for contests or
        chasing DX entities.
    */
    if (sfi !== null && sfi >= 120 && kp < 3) {
      return { text: '10m to 20m. Great DX conditions, SSB and CW', cls: 'pd-rec--good' };
    }

    /* 
      9. SFI 80–119 with quiet geo, the bread-and-butter window. 20m is
        open most of the day, 17m is pleasant and uncrowded and 40m
        takes over in the evenings. Nothing spectacular but very workable. 
    */
    if (sfi !== null && sfi >= 80 && kp < 3) {
      return { text: '40m to 17m. Moderate DX on CW/SSB', cls: 'pd-rec--fair' };
    }

    /* 
      10. SFI is decent but Kp is a bit elevated (3–4). The higher bands
        are risky over polar and auroral paths. I prefer to stay on 40m and 17m
        and focus on mid-latitude east-west routes.
    */
    if (sfi !== null && sfi >= 80 && kp < 5) {
      return { text: '40m to 17m. Elevated Kp, prefer mid-latitude (east-west) paths', cls: 'pd-rec--fair' };
    }

    /* 
      11. Low solar flux but geomagnetically quiet means the high bands are
        closed but 40m and 80m are perfectly usable. Digital modes like
        FT8 and FT4 punch well above their weight under these conditions.
    */
    if (kp < 3) {
      return { text: '40m to 80m QRP CW or Digital (FT8/FT4). Low solar flux', cls: 'pd-rec--fair' };
    }

    /* 
      12. Nothing matched cleanly. I fall back to a safe middle ground
        and remind other hams to keep an eye on the indices before calling CQ. 
    */
    return { text: '40m, 30m & 20m. Monitor conditions before calling CQ.', cls: '' };
  }

  /* 
    I take the freshly parsed index values and push the right text and
    colour class into the recommendation strip in the DOM.
  */
  function updateRecommendation(sfi, kp, ai, xrLetter, bz) {
    var box = document.getElementById('pd-recommendation');
    var txt = document.getElementById('pd-rec-text');
    if (!box || !txt) return;
    var rec = getRecommendation(sfi, kp, ai, xrLetter, bz);
    txt.textContent = rec.text;
    box.className = 'pd-recommendation' + (rec.cls ? ' ' + rec.cls : '');
  }

  async function loadProp() {
    var kp=0, sfi=null, ai=NaN, xrLetter='', bz=NaN;

    /* 
      I fire all five NOAA SWPC requests in parallel. They are all
      CORS-enabled so no proxy is needed. If anything fails I catch the
      error, leave the KPIs at their default dashes and carry on.
    */
    try {
      var [kpRes, sfiRes, magRes, spdRes, xrRes] = await Promise.all([
        fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json'),
        fetch('https://services.swpc.noaa.gov/products/summary/10cm-flux.json'),
        fetch('https://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json'),
        fetch('https://services.swpc.noaa.gov/products/summary/solar-wind-speed.json'),
        fetch('https://services.swpc.noaa.gov/json/goes/primary/xrays-6-hour.json'),
      ]);
      var kpData  = await kpRes.json();   /* [{time_tag, Kp, ...}]  no header */
      var sfiData = await sfiRes.json();  /* [{flux, time_tag}]               */
      var magData = await magRes.json();  /* [{bt, bz_gsm, time_tag}]         */
      var spdData = await spdRes.json();  /* [{proton_speed, time_tag}]       */
      var xrData  = await xrRes.json();   /* [{energy, flux, observed_flux}]  */

      /* 
        I only need the last eight Kp rows, That is 24 hours of 3-hour
        readings. The very last one is the most recent value I display. 
      */
      var kpRows = kpData.slice(-8);
      var lastKpRow = kpRows[kpRows.length-1];
      kp = parseFloat(lastKpRow.Kp) || 0;
      renderBars(kpRows);
      setVal('pd-kp', kp.toFixed(1), kp<2?'pd-val--good':kp<4?'pd-val--fair':'pd-val--poor');

      /* 
        The NOAA Kp dataset already carries a 24-hour running A-Index so
        I do not need a separate request for it.
      */
      ai = parseFloat(lastKpRow.a_running);
      if (!isNaN(ai))
        setVal('pd-ai', Math.round(ai).toString(), ai<8?'pd-val--good':ai<30?'pd-val--fair':'pd-val--poor');

      /* 
        I read the GOES long-wave X-ray channel (0.1–0.8 nm) and convert
        the raw flux in W/m² into the familiar letter+number class format.
        The thresholds are the standard NOAA GOES classification:
        - A < 1e-7 
        - B 1e-7–1e-6 
        - C 1e-6–1e-5 
        - M 1e-5–1e-4 
        - X ≥ 1e-4  
      */
      var longWave = xrData.filter(function(r){ return r.energy==='0.1-0.8nm'; });
      if (longWave.length) {
        var xrFlux = parseFloat(longWave[longWave.length-1].observed_flux);
        if (!isNaN(xrFlux) && xrFlux > 0) {
          var xrCls;
          if      (xrFlux >= 1e-4) xrCls = 'X'+(xrFlux/1e-4).toFixed(1);
          else if (xrFlux >= 1e-5) xrCls = 'M'+(xrFlux/1e-5).toFixed(1);
          else if (xrFlux >= 1e-6) xrCls = 'C'+(xrFlux/1e-6).toFixed(1);
          else if (xrFlux >= 1e-7) xrCls = 'B'+(xrFlux/1e-7).toFixed(1);
          else                     xrCls = 'A'+(xrFlux/1e-8).toFixed(1);
          xrLetter = xrCls[0];
          setVal('pd-xr', xrCls,
            xrLetter==='X'||xrLetter==='M' ? 'pd-val--poor' :
            xrLetter==='C' ? 'pd-val--fair' : 'pd-val--good');
        }
      }

      /* 
        The three summary endpoints can return either a bare object or a
        single-element array depending on the endpoint. I normalise them
        all to plain objects before reading the fields I need.
      */
      var sfiObj = Array.isArray(sfiData) ? sfiData[0] : sfiData;
      var magObj = Array.isArray(magData) ? magData[0] : magData;
      var spdObj = Array.isArray(spdData) ? spdData[0] : spdData;

      /* 
        SFI ≥ 120 is where the higher bands reliably open; below 80 even
        20m becomes unreliable. I keep the neutral default colour when
        SFI is between 80 and 119, neither good nor bad.
      */
      sfi = parseFloat(sfiObj.flux) || null;
      if (sfi)
        setVal('pd-sfi', Math.round(sfi).toString(), sfi>=120?'pd-val--good':sfi>=80?'pd-val--fair':'');

      /* 
        IMF Bz southward (negative) means energy coupling into the
        magnetosphere, so the more negative, the worse for HF.
      */
      bz = parseFloat(magObj.bz_gsm);
      if (!isNaN(bz))
        setVal('pd-bz', (bz>=0?'+':'')+bz.toFixed(0)+' nT',
          bz<-10?'pd-val--poor':bz<-5?'pd-val--fair':bz>0?'pd-val--good':'');

      var spd = parseFloat(spdObj.proton_speed);
      if (!isNaN(spd)) setEl('pd-speed', Math.round(spd)+' km/s');

    } catch(e) { console.warn('prop: NOAA fetch failed', e); }

    /* 
      I try hamqsl second because it is sometimes blocked by CORS
      depending on the browser. If it works I use their pre-computed
      conditions; if not, my own fallback table fills in silently.
    */
    var xmlBands = false;
    try {
      var xmlRes  = await fetch('https://www.hamqsl.com/solarxml.php');
      var xmlText = await xmlRes.text();
      var parser  = new DOMParser();
      var doc     = parser.parseFromString(xmlText, 'application/xml');
      xmlBands = renderBandsXml(doc);
    } catch(e) { /* CORS blocked — computed fallback takes over below */ }

    if (!xmlBands) renderBandsFallback(sfi, kp);

    var note = document.getElementById('pd-cond-note');
    if (note) note.textContent = (sfi?'SFI '+Math.round(sfi)+' · ':'')+'Kp '+kp.toFixed(1);

    var now = new Date();
    setEl('pd-updated', ('0'+now.getUTCHours()).slice(-2)+':'+('0'+now.getUTCMinutes()).slice(-2)+' UTC');

    updateRecommendation(sfi, kp, ai, xrLetter, bz);
  }

  /* 
    I run loadProp as soon as the DOM is ready, then refresh automatically
    every five minutes so the dashboard stays current without a page reload. 
  */
  if (document.readyState==='loading') {
    document.addEventListener('DOMContentLoaded', loadProp);
  } else {
    loadProp();
  }
  setInterval(loadProp, 5*60*1000);
})();
