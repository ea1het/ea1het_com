// ── Tab switching ────────────────────────────────────────────
function showTab(id) {
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  event.currentTarget.classList.add('active');
  if (id === 'bandplan' && !document.getElementById('bp-body').hasChildNodes()) buildBandPlan();
  if (id === 'rst' && !document.getElementById('qcode-table').hasChildNodes()) buildQcodes();
  if (id === 'grid') initGridMap();
  location.hash = id;
}

// ── Hash routing ─────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const h = location.hash.replace('#','');
  const tabs = ['antenna','beam','grid','bandplan','rst'];
  if (tabs.includes(h)) {
    document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + h).classList.add('active');
    document.querySelectorAll('.tab-btn')[tabs.indexOf(h)].classList.add('active');
    if (h === 'bandplan') buildBandPlan();
    if (h === 'rst') buildQcodes();
    if (h === 'grid') initGridMap();
  }
});

// ── Helpers ──────────────────────────────────────────────────
function setResults(id, rows) {
  const el = document.getElementById(id);
  el.innerHTML = '<div class="results-title">Results</div>' +
    rows.map(([label, value, unit]) =>
      `<div class="result-row">
        <span class="result-label">${label}</span>
        <span class="result-value">${value}<span class="unit"> ${unit}</span></span>
      </div>`
    ).join('');
}
function setError(id, msg) {
  document.getElementById(id).innerHTML = `<div class="results-empty" style="color:#f87171;">${msg}</div>`;
}

// ── Antenna calculator ───────────────────────────────────────
function calcAntenna() {
  const f = parseFloat(document.getElementById('ant-freq').value);
  const vf = parseFloat(document.getElementById('ant-vf').value);
  if (!f || f <= 0) return setError('ant-results', 'Enter a valid frequency.');

  const c = 299.792458; // speed of light in MHz·m
  const lambda = (c / f) * vf;
  const lambdaWire = c / f;
  const fmt = v => `${v.toFixed(3)} <span class="unit">m / ${(v * 3.28084).toFixed(3)} ft</span>`;
  const fmtFixed = v => `${v.toFixed(1)} <span class="unit">m / ${(v * 3.28084).toFixed(1)} ft</span>`;

  // EFRW: find a common non-resonant length (wire VF=1)
  const efrwCandidates = [9.5, 12.2, 17.0, 20.0, 26.5, 29.0, 40.0, 41.0, 53.0];
  const halfWire = lambdaWire / 2;
  let efrwRec = null;
  for (const len of efrwCandidates) {
    let safe = true;
    for (let n = 1; n <= 14; n++) {
      if (Math.abs(len - n * halfWire) / (n * halfWire) < 0.10) { safe = false; break; }
    }
    if (safe) { efrwRec = len; break; }
  }

  const hdr = (title, note, first) =>
    `<div class="result-row" style="${first ? '' : 'margin-top:0.6rem;padding-top:0.6rem;border-top:2px solid var(--border);'}border-bottom:none;">
      <span class="result-label" style="color:var(--amber);font-size:0.72rem;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;">${title}</span>
      <span style="font-size:0.72rem;color:var(--muted);">${note}</span>
    </div>`;

  const row = (label, val, last) =>
    `<div class="result-row"${last ? ' style="border-bottom:none;"' : ''}>
      <span class="result-label">${label}</span>
      <span class="result-value">${val}</span>
    </div>`;

  let html = '<div class="results-title">Results</div>' +

    hdr('Vertical', '', true) +
    row('Quarter-wave',  fmt(lambdaWire / 4)) +
    row('5/8λ',          fmt(lambdaWire * 5 / 8), true) +

    hdr('Dipole', '') +
    row('Half-wave (total)', fmt(lambdaWire / 2)) +
    row('Each leg',          fmt(lambdaWire / 4), true) +

    hdr('OCF Dipole', '36 / 64 split · 4:1 balun') +
    row('Total length',     fmt(lambdaWire / 2)) +
    row('Short leg (36%)',  fmt(lambdaWire / 2 * 0.36)) +
    row('Long leg (64%)',   fmt(lambdaWire / 2 * 0.64), true) +

    hdr('OCF Vertical + 1:4 UnUn', 'KJ6ER Challenger style') +
    row('Radiator (38.9% λ)',      fmt(lambdaWire * 0.389)) +
    row('Counterpoise (12.3% λ)',  fmt(lambdaWire * 0.123)) +
    row('Total (51.2% λ)',         fmt(lambdaWire * 0.512), true) +

    hdr('EFHW', 'End-fed half-wave') +
    row('Total length', fmt(lambdaWire / 2), true) +

    hdr('EFRW', 'End-fed random wire');

  if (efrwRec !== null) {
    html +=
      row('Recommended length', fmtFixed(efrwRec)) +
      `<div class="result-row" style="border-bottom:none;padding-top:0.15rem;">
        <span class="result-label" style="font-size:0.78rem;color:var(--muted);font-style:italic;">Non-resonant at ${f.toFixed(3)} MHz — requires ATU</span>
        <span style="font-size:0.78rem;color:#4ade80;">✓</span>
      </div>`;
  } else {
    html +=
      `<div class="result-row" style="border-bottom:none;">
        <span class="result-label" style="font-size:0.78rem;color:var(--muted);">No standard candidate avoids resonance — try 53 m with ATU</span>
        <span></span>
      </div>`;
  }

  document.getElementById('ant-results').innerHTML = html;
}

// ── Grid square utilities ────────────────────────────────────
function gridToLatLon(grid) {
  grid = grid.toUpperCase().trim();
  if (!/^[A-R]{2}[0-9]{2}([A-X]{2})?$/.test(grid)) return null;
  let lon = (grid.charCodeAt(0) - 65) * 20 - 180;
  let lat = (grid.charCodeAt(1) - 65) * 10 - 90;
  lon += parseInt(grid[2]) * 2;
  lat += parseInt(grid[3]);
  if (grid.length >= 6) {
    lon += (grid.charCodeAt(4) - 65) * (2/24);
    lat += (grid.charCodeAt(5) - 65) * (1/24);
    lon += 1/24; lat += 0.5/24;
  } else {
    lon += 1; lat += 0.5;
  }
  return { lat, lon };
}

function latLonToGrid(lat, lon) {
  lon += 180; lat += 90;
  const A = String.fromCharCode(65 + Math.floor(lon / 20));
  const B = String.fromCharCode(65 + Math.floor(lat / 10));
  const C = String(Math.floor((lon % 20) / 2));
  const D = String(Math.floor(lat % 10));
  const E = String.fromCharCode(65 + Math.floor((lon % 2) / (2/24)));
  const F = String.fromCharCode(65 + Math.floor((lat % 1) / (1/24)));
  return A + B + C + D + E.toLowerCase() + F.toLowerCase();
}

// ── Beam heading calculator ──────────────────────────────────
function calcBeam() {
  const from = gridToLatLon(document.getElementById('beam-from').value);
  const to   = gridToLatLon(document.getElementById('beam-to').value);
  if (!from) return setError('beam-results', 'Invalid "from" grid square.');
  if (!to)   return setError('beam-results', 'Invalid "to" grid square.');

  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;

  const φ1 = toRad(from.lat), λ1 = toRad(from.lon);
  const φ2 = toRad(to.lat),   λ2 = toRad(to.lon);
  const dλ = λ2 - λ1;

  const y = Math.sin(dλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(dλ);
  const bearing = (toDeg(Math.atan2(y, x)) + 360) % 360;
  const reverse = (bearing + 180) % 360;

  const a = Math.sin((φ2-φ1)/2)**2 + Math.cos(φ1)*Math.cos(φ2)*Math.sin(dλ/2)**2;
  const distKm = 6371 * 2 * Math.asin(Math.sqrt(a));
  const distMi = distKm * 0.621371;

  setResults('beam-results', [
    ['Bearing (short path)',  bearing.toFixed(1) + '°', ''],
    ['Bearing (long path)',   reverse.toFixed(1) + '°', ''],
    ['Distance', distKm.toFixed(0) + ' km', `/ ${distMi.toFixed(0)} mi`],
    ['From grid', document.getElementById('beam-from').value.toUpperCase(), ''],
    ['To grid',   document.getElementById('beam-to').value.toUpperCase(),   ''],
  ]);
}

// ── Grid square converter ────────────────────────────────────
function calcGridFromLoc() {
  const loc = document.getElementById('grid-loc').value.trim();
  const pt = gridToLatLon(loc);
  if (!pt) return setError('grid-results', 'Invalid grid square format. Use e.g. IN73dm.');
  setResults('grid-results', [
    ['Grid square',  loc.toUpperCase(), ''],
    ['Latitude',     pt.lat.toFixed(5) + '°', pt.lat >= 0 ? 'N' : 'S'],
    ['Longitude',    pt.lon.toFixed(5) + '°', pt.lon >= 0 ? 'E' : 'W'],
    ['6-char grid',  latLonToGrid(pt.lat, pt.lon), '(centre)'],
  ]);
  updateGridMap(pt.lat, pt.lon);
}

function calcGridFromCoords() {
  const lat = parseFloat(document.getElementById('grid-lat').value);
  const lon = parseFloat(document.getElementById('grid-lon').value);
  if (isNaN(lat) || isNaN(lon)) return setError('grid-results', 'Enter valid latitude and longitude.');
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) return setError('grid-results', 'Coordinates out of range.');
  const grid = latLonToGrid(lat, lon);
  setResults('grid-results', [
    ['6-char grid square', grid, ''],
    ['4-char grid square', grid.slice(0,4), ''],
    ['Latitude in',  lat.toFixed(5) + '°', lat >= 0 ? 'N' : 'S'],
    ['Longitude in', lon.toFixed(5) + '°', lon >= 0 ? 'E' : 'W'],
  ]);
  updateGridMap(lat, lon);
}

// ── IARU Region 1 Band Plan data ─────────────────────────────
const BAND_PLAN = [
  { band:'160m (1.8 MHz)', rows:[
    ['1.810','1.838','CW','CW; 1.836 QRP calling'],
    ['1.838','1.840','Narrow digital','WSPR, PSK31'],
    ['1.840','1.850','Digital / SSB','Upper edge SSB starts at 1.843'],
    ['1.843','1.850','SSB',''],
  ]},
  { band:'80m (3.5 MHz)', rows:[
    ['3.500','3.510','CW','DX window'],
    ['3.510','3.560','CW','Contests, 3.555 QRS calling'],
    ['3.560','3.580','CW','3.560 QRP calling'],
    ['3.580','3.600','Narrow digital','PSK31, RTTY, 3.592 WSPR'],
    ['3.600','3.650','Digital / phone',''],
    ['3.600','3.800','SSB','3.630 digital voice, 3.760 R1 emergency'],
    ['3.775','3.800','SSB','DX window'],
  ]},
  { band:'40m (7 MHz)', rows:[
    ['7.000','7.040','CW','7.030 QRP calling'],
    ['7.040','7.047','Narrow digital','WSPR 7.040'],
    ['7.047','7.060','Digital',''],
    ['7.060','7.100','SSB / digital','7.090 QRP SSB calling'],
    ['7.100','7.200','SSB','7.110 IARU emergency, 7.165 regional'],
  ]},
  { band:'30m (10 MHz)', rows:[
    ['10.100','10.130','CW','10.116 QRP calling'],
    ['10.130','10.150','Narrow digital','WSPR 10.140'],
  ]},
  { band:'20m (14 MHz)', rows:[
    ['14.000','14.060','CW','14.055 QRS, 14.060 QRP calling'],
    ['14.070','14.099','Digital','14.070 PSK31, 14.095 WSPR'],
    ['14.099','14.101','Beacons','IBP beacon segment'],
    ['14.101','14.112','Digital / CW',''],
    ['14.112','14.350','SSB','14.195 DXpeditions, 14.230 SSTV, 14.285 QRP'],
  ]},
  { band:'17m (18 MHz)', rows:[
    ['18.068','18.095','CW','18.086 QRP calling'],
    ['18.095','18.109','Digital','18.104 PSK31, 18.104 WSPR'],
    ['18.109','18.111','Beacons','IBP'],
    ['18.111','18.168','SSB','18.130 QRP SSB calling'],
  ]},
  { band:'15m (21 MHz)', rows:[
    ['21.000','21.080','CW','21.055 QRS, 21.060 QRP calling'],
    ['21.080','21.120','Digital','21.094 PSK31, 21.094 WSPR'],
    ['21.149','21.151','Beacons','IBP'],
    ['21.151','21.450','SSB','21.285 QRP SSB, 21.340 SSTV'],
  ]},
  { band:'12m (24 MHz)', rows:[
    ['24.890','24.915','CW','24.906 QRP calling'],
    ['24.915','24.929','Digital','WSPR 24.924'],
    ['24.929','24.931','Beacons','IBP'],
    ['24.931','24.990','SSB',''],
  ]},
  { band:'10m (28 MHz)', rows:[
    ['28.000','28.070','CW','28.055 QRS, 28.060 QRP calling'],
    ['28.070','28.120','Digital','28.076 FT8, 28.094 PSK31'],
    ['28.190','28.225','Beacons','IBP + regional'],
    ['28.225','29.100','SSB','28.360 QRP SSB'],
    ['29.100','29.200','FM simplex',''],
    ['29.200','29.300','Digital',''],
    ['29.300','29.510','Satellite',''],
    ['29.510','29.700','FM repeaters',''],
  ]},
  { band:'60m (5 MHz) — secondary; 15 kHz only', rows:[
    ['5351.5','5366.5','USB / CW / Narrow digital','WRC-15 secondary allocation; USB only in most EU countries; max 15W EIRP'],
  ]},
  { band:'6m (50 MHz)', rows:[
    ['50.000','50.100','CW / Beacons','50.090 CW calling'],
    ['50.100','50.300','SSB','50.110 DX calling; 50.150 SSB calling'],
    ['50.300','50.500','Digital / Beacons','FT8, WSPR, beacons'],
    ['50.500','52.000','All modes / FM','51.510 FM simplex calling'],
  ]},
  { band:'4m (70 MHz) — not universally allocated in R1', rows:[
    ['70.000','70.100','CW',''],
    ['70.100','70.300','SSB / AM','70.150 SSB calling; 70.200 AM calling'],
    ['70.300','70.500','FM / Digital','70.450 FM simplex calling'],
  ]},
  { band:'2m (144 MHz)', rows:[
    ['144.000','144.025','CW / EME','Moonbounce window'],
    ['144.025','144.150','CW',''],
    ['144.150','144.400','SSB','144.300 SSB calling'],
    ['144.400','144.990','Digital / APRS','144.800 APRS; 144.490 WSPR'],
    ['145.000','146.000','FM','145.500 FM calling; repeaters'],
  ]},
  { band:'70cm (430 MHz)', rows:[
    ['430.000','432.000','ATV / All modes',''],
    ['432.000','432.100','CW / EME','432.200 SSB calling'],
    ['432.100','432.400','SSB / CW',''],
    ['433.000','435.000','FM / Digital','433.500 FM calling (S20); 434.000 digital'],
    ['438.000','440.000','FM repeaters','Output frequencies'],
  ]},
  { band:'23cm (1240 MHz)', rows:[
    ['1240','1243','ATV',''],
    ['1296.000','1296.150','CW / EME',''],
    ['1296.150','1296.500','SSB / CW','1296.200 SSB calling'],
    ['1296.500','1296.600','FM / Digital','1296.500 FM calling'],
  ]},
  { band:'13cm (2300 MHz)', rows:[
    ['2300','2302','CW / SSB','2320.200 SSB calling'],
    ['2302','2320','All modes',''],
    ['2400','2450','All modes','ISM overlap; verify local permit'],
  ]},
  { band:'6cm (5760 MHz)', rows:[
    ['5760.000','5762.000','CW / SSB','5760.200 SSB calling'],
    ['5790.000','5850.000','ATV / Wideband',''],
  ]},
  { band:'3cm (10 GHz) — values in MHz', rows:[
    ['10000','10125','CW / SSB / Narrow','10368.200 SSB calling'],
    ['10225','10450','Wideband / ATV',''],
  ]},
  { band:'1.5cm (24 GHz) — values in MHz', rows:[
    ['24000','24050','CW / SSB','24048.200 SSB calling'],
    ['24050','24250','Wideband',''],
  ]},
  { band:'6mm (47 GHz) — values in MHz', rows:[
    ['47000','47200','All modes','47088 MHz calling; experimental'],
  ]},
];

function buildBandPlan() {
  const tbody = document.getElementById('bp-body');
  BAND_PLAN.forEach(b => {
    const hdr = document.createElement('tr');
    hdr.className = 'bp-band-header';
    hdr.innerHTML = `<td colspan="4">${b.band}</td>`;
    tbody.appendChild(hdr);
    b.rows.forEach(([from, to, mode, notes]) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${from}</td><td>${to}</td><td>${mode}</td><td>${notes}</td>`;
      tbody.appendChild(tr);
    });
  });
}

// ── Q-codes ──────────────────────────────────────────────────
const QCODES = [
  ['QRA','What is your station name? / My station name is…'],
  ['QRB','How far are you from my station? / Distance is…'],
  ['QRG','What is my exact frequency? / Your frequency is…'],
  ['QRH','Does my frequency vary? / Your frequency varies.'],
  ['QRI','How is my tone? / Your tone is… (1=good, 2=variable, 3=bad)'],
  ['QRK','What is my signal intelligibility? / Your intelligibility is… (1–5)'],
  ['QRL','Are you busy? / I am busy (or this frequency is in use).'],
  ['QRM','Are you being interfered with? / I am being interfered with.'],
  ['QRN','Are you troubled by static? / I am troubled by static.'],
  ['QRO','Shall I increase power? / Increase power.'],
  ['QRP','Shall I decrease power? / Decrease power. (Also: low-power operation ≤5W)'],
  ['QRQ','Shall I send faster? / Send faster.'],
  ['QRS','Shall I send more slowly? / Send more slowly.'],
  ['QRT','Shall I cease transmission? / I am ceasing transmission.'],
  ['QRU','Have you anything for me? / I have nothing for you.'],
  ['QRV','Are you ready? / I am ready.'],
  ['QRX','Shall I stand by? / Please stand by.'],
  ['QRZ','Who is calling me? / You are being called by…'],
  ['QSB','Is my signal fading? / Your signal is fading.'],
  ['QSK','Can you hear between your signals? / I can hear between my signals.'],
  ['QSL','Can you acknowledge receipt? / I acknowledge receipt.'],
  ['QSO','Can you communicate with…? / I can communicate with…'],
  ['QSP','Will you relay to…? / I will relay to…'],
  ['QST','General call preceding an announcement.'],
  ['QSX','Will you listen for… on…kHz? / I am listening on…kHz.'],
  ['QSY','Shall I change frequency? / Change to transmission on another frequency.'],
  ['QTC','How many messages do you have? / I have… messages for you.'],
  ['QTH','What is your location? / My location is…'],
  ['QTR','What is the correct time? / The correct time is…'],
];

function buildQcodes() {
  const tbody = document.getElementById('qcode-table');
  QCODES.forEach(([code, meaning]) => {
    const tr = document.createElement('tr');
    tr.dataset.q = code;
    tr.innerHTML = `<td>${code}</td><td>${meaning}</td>`;
    tbody.appendChild(tr);
  });
}

function filterQcodes() {
  const q = document.getElementById('qcode-filter').value.trim().toUpperCase();
  document.querySelectorAll('#qcode-table tr').forEach(tr => {
    tr.style.display = (!q || tr.dataset.q.includes(q)) ? '' : 'none';
  });
}

// ── Grid map (OpenStreetMap / Leaflet) ───────────────────────
let gridMap = null;
let gridMarker = null;
let gridMapCoords = null;

function initGridMap() {
  if (gridMap) return;
  gridMap = L.map('grid-map', {
    dragging: false,
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    attributionControl: false,
  }).setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  }).addTo(gridMap);

  document.getElementById('grid-map-wrap').addEventListener('click', () => {
    if (gridMapCoords) {
      const { lat, lon } = gridMapCoords;
      window.open(
        `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=14/${lat}/${lon}`,
        '_blank', 'noopener'
      );
    } else {
      window.open('https://www.openstreetmap.org/', '_blank', 'noopener');
    }
  });
}

function updateGridMap(lat, lon) {
  gridMapCoords = { lat, lon };
  if (!gridMap) return;
  gridMap.setView([lat, lon], 8);
  if (gridMarker) {
    gridMarker.setLatLng([lat, lon]);
  } else {
    gridMarker = L.circleMarker([lat, lon], {
      radius: 7,
      fillColor: '#2a6bbf',
      color: '#fff',
      weight: 2,
      fillOpacity: 1,
    }).addTo(gridMap);
  }
}
