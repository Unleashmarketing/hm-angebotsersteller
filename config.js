/* =========================================================================
   HeinzelMänner · zentrale Konfiguration
   Wird sowohl von index.html (Einstellungen) als auch von angebot.html
   (Kalkulator) eingebunden. Enthält:
   - PRICE_DEFAULTS: Werksseitige Standardpreise
   - PRICE_GROUPS:   Struktur für die Anzeige im Einstellungsbereich
   - COMPANY_DEFAULTS: Standard-Firmendaten
   - FIXED_CATEGORIES: Die 5 festen Leistungsarten
   - loadSettings()/saveSettings(): localStorage-Persistenz
   - addCustomCategory()/removeCustomCategory()
   ========================================================================= */
'use strict';

const HM_STORAGE = {
  settings: 'hm_settings',
  drafts:   'hm_angebot_drafts',
  lastId:   'hm_angebot_last_id'
};

/* ---------- Werksseitige Standardpreise ---------- */
const PRICE_DEFAULTS = {
  // Entrümpelung
  entr_rate_m3:          45,
  entr_elektro_mittel:   60,
  entr_elektro_viel:     140,
  // Malerarbeiten
  maler_wand:            10,
  maler_decke:           11,
  maler_vorb_spachteln:  5,
  maler_vorb_tapete:     6,
  maler_farbe_bunt:      2.50,
  maler_farbe_edel:      4,
  maler_tuer:            38,
  maler_heizk:           42,
  // Bodensanierung
  boden_raus:            12,
  boden_estrich_raus:    34,
  boden_ausgleich:       14,
  boden_sockel:          7,
  boden_vinyl:           42,
  boden_laminat:         38,
  boden_designboden:     58,
  boden_parkett:         78,
  boden_fliesen:         68,
  // Trockenbau
  trocken_wand_doppelt:  75,
  trocken_wand_einfach:  52,
  trocken_abbruch:       32,
  trocken_decke:         65,
  trocken_tuer:          195,
  // Abriss / Rückbau
  abriss_innenwand:      42,
  abriss_boden:          48,
  abriss_fliesen:        22,
  abriss_bad:            720,
  abriss_kueche:         480,
  abriss_zarge:          35,
  abriss_heizk:          65,
  abriss_container_7:    420,
  abriss_container_10:   540,
  abriss_container_10x2: 980,
  // Logistik
  log_anfahrt_incl_km:   15,
  log_anfahrt_base:      30,
  log_anfahrt_per_km:    1.20,
  log_tragweg_incl:      25,
  log_tragweg_per_m:     1.50,
  log_halteverbot:       95,
  // Konditionen (gesamt)
  kon_psa_standard:      90,
  kon_psa_erweitert:     380,
  kon_eilfall_pct:       20,
  kon_wochenende_pct:    12,
  kon_min_auftrag:       590,
  kon_mwst_pct:          19
};

/* ---------- Struktur für den Einstellungsbereich (index.html) ---------- */
const PRICE_GROUPS = [
  { key:'entr', label:'Entrümpelung', fields:[
    {id:'entr_rate_m3',        label:'Grundpreis',                 unit:'€ / m³'},
    {id:'entr_elektro_mittel', label:'Elektroschrott – mittel',     unit:'€ Pauschale'},
    {id:'entr_elektro_viel',   label:'Elektroschrott – viel',       unit:'€ Pauschale'}
  ]},
  { key:'maler', label:'Malerarbeiten', fields:[
    {id:'maler_wand',           label:'Wände streichen',             unit:'€ / m²'},
    {id:'maler_decke',          label:'Decke streichen',             unit:'€ / m²'},
    {id:'maler_vorb_spachteln', label:'Vorbehandlung Spachteln',     unit:'€ / m²'},
    {id:'maler_vorb_tapete',    label:'Tapete entfernen',            unit:'€ / m²'},
    {id:'maler_farbe_bunt',     label:'Aufpreis bunte Farbe',        unit:'€ / m²'},
    {id:'maler_farbe_edel',     label:'Aufpreis Edelfarbe',          unit:'€ / m²'},
    {id:'maler_tuer',           label:'Tür lackieren',               unit:'€ / Stk'},
    {id:'maler_heizk',          label:'Heizkörper lackieren',        unit:'€ / Stk'}
  ]},
  { key:'boden', label:'Bodensanierung', fields:[
    {id:'boden_raus',         label:'Alten Belag entfernen',   unit:'€ / m²'},
    {id:'boden_estrich_raus', label:'Estrich abbrechen',       unit:'€ / m²'},
    {id:'boden_ausgleich',    label:'Ausgleichsmasse',         unit:'€ / m²'},
    {id:'boden_sockel',       label:'Sockelleisten',           unit:'€ / lfm'},
    {id:'boden_vinyl',        label:'Neubelag: Vinyl-Klick',   unit:'€ / m²'},
    {id:'boden_laminat',      label:'Neubelag: Laminat',       unit:'€ / m²'},
    {id:'boden_designboden',  label:'Neubelag: Designboden',   unit:'€ / m²'},
    {id:'boden_parkett',      label:'Neubelag: Parkett Eiche', unit:'€ / m²'},
    {id:'boden_fliesen',      label:'Neubelag: Fliesen',       unit:'€ / m²'}
  ]},
  { key:'trocken', label:'Trockenbau', fields:[
    {id:'trocken_wand_doppelt', label:'Neue Wand, doppelt beplankt', unit:'€ / m²'},
    {id:'trocken_wand_einfach', label:'Neue Wand, einfach beplankt', unit:'€ / m²'},
    {id:'trocken_abbruch',      label:'Trockenwand abbrechen',       unit:'€ / m²'},
    {id:'trocken_decke',        label:'Abgehängte Decke',            unit:'€ / m²'},
    {id:'trocken_tuer',         label:'Türaussparung',               unit:'€ / Stk'}
  ]},
  { key:'abriss', label:'Abriss / Rückbau', fields:[
    {id:'abriss_innenwand',      label:'Innenwände abbrechen',   unit:'€ / m²'},
    {id:'abriss_boden',          label:'Boden + Estrich ausbrechen', unit:'€ / m²'},
    {id:'abriss_fliesen',        label:'Wandfliesen abschlagen', unit:'€ / m²'},
    {id:'abriss_bad',            label:'Bad-Komplettdemontage',  unit:'€ Pauschale'},
    {id:'abriss_kueche',         label:'Küche-Komplettdemontage',unit:'€ Pauschale'},
    {id:'abriss_zarge',          label:'Türzarge entfernen',     unit:'€ / Stk'},
    {id:'abriss_heizk',          label:'Heizkörper demontieren', unit:'€ / Stk'},
    {id:'abriss_container_7',    label:'Container 1×7 m³',       unit:'€ Pauschale'},
    {id:'abriss_container_10',   label:'Container 1×10 m³',      unit:'€ Pauschale'},
    {id:'abriss_container_10x2', label:'Container 2×10 m³',      unit:'€ Pauschale'}
  ]},
  { key:'log', label:'Logistik', fields:[
    {id:'log_anfahrt_incl_km', label:'Anfahrt im Festpreis enthalten', unit:'km'},
    {id:'log_anfahrt_base',    label:'Anfahrt-Grundpauschale',         unit:'€ / Fahrt'},
    {id:'log_anfahrt_per_km',  label:'Anfahrt je weiterem km',         unit:'€ / km'},
    {id:'log_tragweg_incl',    label:'Tragweg im Festpreis enthalten', unit:'m'},
    {id:'log_tragweg_per_m',   label:'Tragweg je weiterem Meter',      unit:'€ / m'},
    {id:'log_halteverbot',     label:'Halteverbotszone einrichten',    unit:'€ Pauschale'}
  ]},
  { key:'kon', label:'Konditionen (Gesamt)', fields:[
    {id:'kon_psa_standard',   label:'Schutzausrüstung Standard',   unit:'€ Pauschale'},
    {id:'kon_psa_erweitert',  label:'Schutzausrüstung erweitert',  unit:'€ Pauschale'},
    {id:'kon_eilfall_pct',    label:'Eilfall-Zuschlag',            unit:'% auf Gesamt'},
    {id:'kon_wochenende_pct', label:'Wochenend-/Feiertagszuschlag',unit:'% auf Gesamt'},
    {id:'kon_min_auftrag',    label:'Mindestauftragswert',         unit:'€ brutto'},
    {id:'kon_mwst_pct',       label:'Mehrwertsteuer',              unit:'%'}
  ]}
];

/* ---------- Firmendaten ---------- */
const COMPANY_DEFAULTS = {
  name:            'HeinzelMänner GmbH',
  strasse:         'Im Hagen 4',
  plzOrt:          '69181 Leimen',
  tel:             '06224 / 925 67 00',
  mobil:           '0162 6151832',
  email:           'info@hm-sanierung.com',
  geschaeftsfuehrer:'Sascha Heck',
  ustid:           'DE 192 272 349',
  logo:            'HM Logo.svg'
};

/* ---------- Feste Leistungskategorien ---------- */
const FIXED_CATEGORIES = [
  { id:'entr',    label:'Entrümpelung' },
  { id:'maler',   label:'Malerarbeiten' },
  { id:'boden',   label:'Bodensanierung' },
  { id:'trocken', label:'Trockenbau' },
  { id:'abriss',  label:'Abriss / Rückbau' }
];

/* ---------- Persistenz ---------- */
function loadSettings(){
  let raw = {};
  try { raw = JSON.parse(localStorage.getItem(HM_STORAGE.settings) || '{}'); }
  catch(e){ raw = {}; }
  return {
    prices:     Object.assign({}, PRICE_DEFAULTS, raw.prices || {}),
    company:    Object.assign({}, COMPANY_DEFAULTS, raw.company || {}),
    categories: Array.isArray(raw.categories) ? raw.categories : []
  };
}

function saveSettings(settings){
  localStorage.setItem(HM_STORAGE.settings, JSON.stringify(settings));
}

/* Fügt eine neue, frei definierte Kategorie hinzu (für eigene Positionen)
   und speichert sie sofort persistent. Gibt die neue Kategorie zurück. */
function addCustomCategory(label){
  label = (label || '').trim();
  if (!label) return null;
  const settings = loadSettings();
  const id = 'custom_' + Date.now().toString(36);
  const cat = { id, label };
  settings.categories.push(cat);
  saveSettings(settings);
  return cat;
}

function removeCustomCategory(id){
  const settings = loadSettings();
  settings.categories = settings.categories.filter(c => c.id !== id);
  saveSettings(settings);
}

/* Liefert alle wählbaren Kategorien für eigene Positionen:
   feste Leistungsarten + benutzerdefinierte, in dieser Reihenfolge. */
function allCategories(settings){
  settings = settings || loadSettings();
  return FIXED_CATEGORIES.concat(settings.categories || []);
}

/* ---------- Drafts (Entwürfe) ---------- */
function getDrafts(){
  try { return JSON.parse(localStorage.getItem(HM_STORAGE.drafts) || '[]'); }
  catch(e){ return []; }
}
function saveDrafts(arr){ localStorage.setItem(HM_STORAGE.drafts, JSON.stringify(arr)); }

/* ---------- gemeinsame Formatierer ---------- */
const fmt = n => new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(n || 0);
const fmtNum = n => new Intl.NumberFormat('de-DE',{minimumFractionDigits:2, maximumFractionDigits:2}).format(n || 0);
function escapeHtml(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[ch]));
}
