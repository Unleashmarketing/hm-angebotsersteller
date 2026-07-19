<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="HeinzelMänner – Sanierung & Renovierung in Heidelberg, Mannheim und Heilbronn. Komplettsanierung, Badsanierung, Bodenverlegung, Trockenbau, Malerarbeiten. Festpreisgarantie, eigene Handwerker, kostenlose Beratung vor Ort.">
<title>HeinzelMänner — Sanierung aus einer Hand · Heidelberg / Mannheim / Heilbronn</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root{
  --ink:#0A0A0A;
  --ink-soft:#1A1A1A;
  --muted:#555;
  --muted-light:#888;
  --line:#E5E3DC;
  --line-soft:#EDEAE2;
  --paper:#FAFAF7;
  --paper-2:#F4F1E9;
  --accent:#D86200;
  --accent-soft:#FFF1E2;
  --max:1200px;
  --gutter:32px;
  --ticker-h:38px;
  --sans:'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --heading:'Space Grotesk', 'Inter', sans-serif;
}

*{box-sizing:border-box; margin:0; padding:0}
::selection{background:var(--accent); color:#fff}
html{scroll-behavior:smooth; -webkit-text-size-adjust:100%}
body{
  font-family:var(--sans);
  color:var(--ink);
  background:var(--paper);
  line-height:1.6;
  font-size:16px;
  font-weight:400;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
img{display:block; max-width:100%}
a{color:inherit; text-decoration:none}
button{font-family:inherit; cursor:pointer; border:none; background:none; color:inherit}

/* ============ TYPE ============ */
h1,h2,h3,h4{font-family:var(--heading); color:var(--ink); letter-spacing:-0.035em; line-height:1.06; font-weight:700}
h1{font-size:clamp(2.4rem, 6vw, 4.5rem)}
h2{font-size:clamp(1.9rem, 4.2vw, 3rem)}
h3{font-size:clamp(1.2rem, 2vw, 1.5rem); font-weight:600}
h4{font-size:1.08rem; font-weight:600; line-height:1.25}
.eyebrow{
  display:inline-block;
  font-size:0.72rem;
  letter-spacing:0.14em;
  text-transform:uppercase;
  font-weight:600;
  color:var(--accent);
  margin-bottom:14px;
}

/* ============ LAYOUT ============ */
.wrap{max-width:var(--max); margin:0 auto; padding:0 var(--gutter)}
@media(max-width:720px){:root{--gutter:20px}}
section{padding:96px 0; position:relative}
@media(max-width:880px){section{padding:64px 0}}

/* ============ TICKER ============ */
.top-ticker{
  position:fixed; top:0; left:0; right:0; z-index:60;
  background:var(--ink); color:#fff;
  font-size:0.75rem; letter-spacing:0.04em;
  padding:10px 0; overflow:hidden; height:var(--ticker-h);
}
.ticker-track{display:flex; gap:56px; white-space:nowrap; animation:ticker 55s linear infinite; width:max-content}
@keyframes ticker{to{transform:translateX(-50%)}}
.ticker-item{display:inline-flex; align-items:center; gap:6px; opacity:0.85}
.ticker-item::after{content:"·"; margin-left:56px; opacity:0.4}

/* ============ NAV ============ */
.nav{
  position:fixed; top:var(--ticker-h); left:0; right:0; z-index:50;
  padding:14px 0;
  transition:background 0.3s, padding 0.3s, box-shadow 0.3s;
}
.nav.scrolled{
  background:rgba(250,250,247,0.92);
  backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
  padding:10px 0;
  box-shadow:0 1px 0 var(--line);
}
.nav-inner{
  max-width:var(--max); margin:0 auto; padding:0 var(--gutter);
  display:flex; justify-content:space-between; align-items:center; gap:24px;
}
.logo{display:flex; align-items:center; gap:10px}
.logo-img{height:36px; width:auto}
.nav-links{display:flex; gap:32px; font-size:0.88rem; font-weight:500}
.nav-links a{color:var(--ink); padding:4px 0; transition:color 0.2s}
.nav-links a:hover{color:var(--accent)}
@media(max-width:980px){.nav-links{display:none}}
.nav-right{display:flex; align-items:center; gap:14px}
.nav-phone{
  font-size:0.88rem; font-weight:600;
  display:flex; align-items:center; gap:6px; color:var(--ink);
}
.nav-phone svg{width:14px; height:14px; stroke:var(--accent); stroke-width:2.2; fill:none}
@media(max-width:720px){.nav-phone span{display:none}}

/* ============ BUTTON ============ */
.btn{
  display:inline-flex; align-items:center; gap:8px;
  padding:14px 26px;
  background:var(--ink); color:#fff;
  font-size:0.9rem; font-weight:600;
  border-radius:10px;
  transition:background 0.2s, transform 0.15s;
  white-space:nowrap;
}
.btn:hover{background:var(--accent); transform:translateY(-1px)}
.btn-accent{background:var(--accent)}
.btn-accent:hover{background:#B85200}
.btn-outline{background:transparent; color:var(--ink); border:1.5px solid var(--line)}
.btn-outline:hover{border-color:var(--ink); background:var(--ink); color:#fff}
.btn-light{background:#fff; color:var(--ink)}
.btn-light:hover{background:var(--accent); color:#fff}
.btn-lg{padding:16px 32px; font-size:0.95rem}
.btn svg{width:15px; height:15px}
.btn-block{width:100%; justify-content:center}

/* ============ HERO ============ */
.hero{
  padding:calc(var(--ticker-h) + 80px) 0 48px;
  background:var(--paper);
}
.hero-grid{
  max-width:var(--max); margin:0 auto; padding:0 var(--gutter);
  display:grid; grid-template-columns:1.1fr 1fr; gap:48px; align-items:center;
}
@media(max-width:980px){
  .hero{padding:calc(var(--ticker-h) + 72px) 0 36px}
  .hero-grid{grid-template-columns:1fr; gap:28px}
}
.hero h1{margin-bottom:20px; max-width:16ch}
.hero-lede{font-size:1.02rem; color:var(--muted); line-height:1.6; max-width:48ch; margin-bottom:28px}
.hero-lede strong{color:var(--ink); font-weight:600}
.hero-actions{display:flex; gap:10px; flex-wrap:wrap; align-items:center}

/* Hero image */
.hero-visual{
  position:relative;
  aspect-ratio:4/5;
  max-height:520px;
  border-radius:14px;
  overflow:hidden;
  background:#222;
}
@media(max-width:980px){.hero-visual{aspect-ratio:16/10; max-height:380px}}
.hero-visual img{width:100%; height:100%; object-fit:cover}
.hero-visual::after{
  content:""; position:absolute; inset:0;
  background:linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 55%, rgba(0,0,0,0.4) 100%);
  pointer-events:none;
}
/* Cycling caption */
.hero-caption-tag{
  position:absolute; top:16px; left:16px; z-index:2;
  background:rgba(255,255,255,0.15); backdrop-filter:blur(10px);
  padding:6px 14px; border-radius:8px;
  font-size:0.7rem; font-weight:600; letter-spacing:0.08em;
  text-transform:uppercase; color:#fff;
}
.hero-caption{
  position:absolute; bottom:16px; left:16px; right:16px; z-index:2; color:#fff;
}
.hero-slide{
  opacity:0; transform:translateY(6px);
  transition:opacity 0.5s, transform 0.5s;
  position:absolute; bottom:0; left:0; right:0;
}
.hero-slide.active{opacity:1; transform:translateY(0); position:relative}
.hero-slide .hs-title{font-size:1rem; font-weight:600; margin-bottom:3px}
.hero-slide .hs-sub{font-size:0.78rem; opacity:0.8}
/* Dots */
.hero-dots{
  display:flex; gap:6px; margin-top:10px;
}
.hero-dot{
  width:6px; height:6px; border-radius:50%;
  background:rgba(255,255,255,0.35);
  transition:background 0.3s, width 0.3s;
}
.hero-dot.active{background:#fff; width:18px; border-radius:3px}

/* ============ STATS ============ */
.stats{background:var(--ink); color:#fff; padding:56px 0}
.stats-inner{
  max-width:var(--max); margin:0 auto; padding:0 var(--gutter);
  display:grid; grid-template-columns:repeat(3, 1fr); gap:32px;
}
@media(max-width:540px){.stats-inner{grid-template-columns:1fr; gap:24px; text-align:center}}
.stat .num{font-family:var(--heading); font-size:clamp(2.4rem, 4.5vw, 3.4rem); font-weight:700; line-height:1; letter-spacing:-0.04em; margin-bottom:8px}
.stat .num span{color:var(--accent); font-weight:400}
.stat .lbl{font-size:0.82rem; color:rgba(255,255,255,0.5); font-weight:500; line-height:1.4}

/* ============ SECTION HEAD (simple) ============ */
.sh{margin-bottom:56px; max-width:640px}
.sh h2{margin-bottom:14px}
.sh p{font-size:1rem; color:var(--muted); line-height:1.6; max-width:52ch}

/* ============ SERVICES — 3 cards grid ============ */
.svc-grid{
  display:grid; grid-template-columns:repeat(3, 1fr); gap:20px;
}
@media(max-width:880px){.svc-grid{grid-template-columns:1fr; gap:16px}}
.svc-card{
  border:1px solid var(--line); border-radius:16px;
  overflow:hidden; background:#fff;
  transition:border-color 0.25s, box-shadow 0.25s, transform 0.25s;
}
.svc-card:hover{border-color:var(--accent); box-shadow:0 12px 40px rgba(0,0,0,0.08); transform:translateY(-3px)}
.svc-card-img{aspect-ratio:3/2; overflow:hidden; background:var(--line-soft)}
.svc-card-img img{width:100%; height:100%; object-fit:cover; transition:transform 0.6s cubic-bezier(.16,1,.3,1)}
.svc-card:hover .svc-card-img img{transform:scale(1.04)}
.svc-card-body{padding:24px}
.svc-card-body h3{margin-bottom:10px}
.svc-card-body p{font-size:0.92rem; color:var(--muted); line-height:1.55; margin-bottom:16px}
.svc-price-tag{
  display:inline-block; font-family:var(--heading); font-size:0.82rem; font-weight:700;
  color:var(--accent); background:var(--accent-soft);
  padding:5px 12px; border-radius:6px; letter-spacing:-0.01em;
}

/* ============ INLINE CTA ============ */
.inline-cta{
  background:var(--ink); padding:40px 0; text-align:center;
}
.inline-cta-inner{
  max-width:var(--max); margin:0 auto; padding:0 var(--gutter);
  display:flex; align-items:center; justify-content:center; gap:24px; flex-wrap:wrap;
}
.inline-cta p{font-size:clamp(1rem, 2vw, 1.25rem); font-weight:500; color:#fff}
.inline-cta .btn{background:var(--accent)}
.inline-cta .btn:hover{background:#B85200}
.inline-cta .btn-outline{background:transparent; border:1.5px solid rgba(255,255,255,0.3); color:#fff}
.inline-cta .btn-outline:hover{background:#fff; color:var(--ink); border-color:#fff}

/* ============ PROJECTS GALLERY ============ */
.proj-grid{display:grid; grid-template-columns:repeat(3, 1fr); gap:16px}
@media(max-width:880px){.proj-grid{grid-template-columns:repeat(2, 1fr)}}
@media(max-width:540px){.proj-grid{grid-template-columns:1fr}}
.proj-card{
  position:relative; border-radius:12px; overflow:hidden;
  aspect-ratio:4/3; background:var(--line);
  transition:transform 0.3s;
}
.proj-card:hover{transform:translateY(-3px)}
.proj-card.wide{grid-column:span 2}
@media(max-width:540px){.proj-card.wide{grid-column:span 1}}
.proj-card img{width:100%; height:100%; object-fit:cover; transition:transform 0.6s cubic-bezier(.16,1,.3,1)}
.proj-card:hover img{transform:scale(1.04)}
.proj-card .pmeta{
  position:absolute; bottom:0; left:0; right:0; padding:16px;
  background:linear-gradient(transparent, rgba(0,0,0,0.65)); color:#fff;
}
.proj-card .ptag{
  display:inline-block; font-size:0.65rem; letter-spacing:0.08em;
  text-transform:uppercase; font-weight:600;
  background:rgba(255,255,255,0.18); backdrop-filter:blur(6px);
  padding:4px 10px; border-radius:6px; margin-bottom:6px;
}
.proj-card .pname{font-size:0.92rem; font-weight:600}

/* ============ USP ============ */
.usp-grid{
  display:grid; grid-template-columns:repeat(2, 1fr); gap:24px;
}
@media(max-width:720px){.usp-grid{grid-template-columns:1fr}}
.usp-card{
  padding:28px; border:1px solid var(--line); border-radius:16px;
  background:#fff; transition:box-shadow 0.25s, transform 0.25s;
}
.usp-card:hover{box-shadow:0 8px 28px rgba(0,0,0,0.05); transform:translateY(-2px)}
.usp-card h4{margin-bottom:8px}
.usp-card p{font-size:0.92rem; color:var(--muted); line-height:1.55}

/* ============ CALCULATOR ============ */
.calc-section{background:var(--paper-2); padding:96px 0}
@media(max-width:720px){.calc-section{padding:64px 0}}
.calc-wrap{display:grid; grid-template-columns:1fr 1.1fr; gap:48px; align-items:start}
@media(max-width:880px){.calc-wrap{grid-template-columns:1fr; gap:36px}}
.calc-intro p{font-size:0.98rem; color:var(--muted); max-width:42ch; line-height:1.6; margin-bottom:14px}
.calc-intro .hint{font-size:0.86rem; color:var(--muted); padding:14px 16px; background:rgba(0,0,0,0.04); border-radius:10px; margin-top:18px}
.calc-intro .hint strong{color:var(--ink); font-weight:600}
.calc-card{background:#fff; border-radius:14px; padding:32px; border:1px solid var(--line)}
@media(max-width:720px){.calc-card{padding:22px}}
.calc-card .clbl{display:block; font-size:0.7rem; letter-spacing:0.1em; text-transform:uppercase; font-weight:600; color:var(--muted-light); margin-bottom:12px}
.calc-types{display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; margin-bottom:22px}
@media(max-width:720px){.calc-types{grid-template-columns:repeat(3, 1fr)}}
@media(max-width:440px){.calc-types{grid-template-columns:repeat(2, 1fr)}}
.calc-type{display:flex; flex-direction:column; align-items:center; gap:6px; padding:12px 8px; border:1.5px solid var(--line); border-radius:10px; cursor:pointer; background:#fff; transition:border-color 0.15s, background 0.15s; position:relative; text-align:center}
.calc-type input{position:absolute; opacity:0; pointer-events:none}
.calc-type:hover{border-color:var(--ink)}
.calc-type.active{border-color:var(--accent); background:var(--accent-soft)}
.calc-type svg{width:20px; height:20px; stroke:var(--ink); stroke-width:1.6; fill:none}
.calc-type.active svg{stroke:var(--accent)}
.calc-type span{font-size:0.8rem; font-weight:600; color:var(--ink)}
.calc-slider-wrap{margin-bottom:18px}
.calc-slider-wrap label{display:flex; justify-content:space-between; align-items:baseline; font-size:0.72rem; letter-spacing:0.08em; text-transform:uppercase; font-weight:600; color:var(--muted-light); margin-bottom:10px}
.calc-slider-wrap label .val{font-family:var(--heading); font-size:1.2rem; font-weight:700; color:var(--accent); letter-spacing:-0.02em; text-transform:none}
.calc-slider-wrap input[type=range]{width:100%; accent-color:var(--accent); cursor:pointer}
.calc-result{background:var(--ink); color:#fff; border-radius:12px; padding:22px; text-align:center; margin-bottom:14px}
.calc-result .l{font-size:0.7rem; letter-spacing:0.1em; text-transform:uppercase; font-weight:600; color:rgba(255,255,255,0.5); margin-bottom:6px}
.calc-result .r{font-family:var(--heading); font-size:clamp(1.4rem, 2.5vw, 2rem); font-weight:700; letter-spacing:-0.02em; line-height:1.1}
.calc-result .r .sep{color:var(--accent); margin:0 4px}
.calc-result .d{font-size:0.75rem; color:rgba(255,255,255,0.5); margin-top:6px}

/* ============ PROCESS — visual steps ============ */
.process-grid{
  display:grid; grid-template-columns:repeat(4, 1fr); gap:0;
  position:relative;
}
@media(max-width:880px){.process-grid{grid-template-columns:repeat(2, 1fr); gap:20px}}
@media(max-width:540px){.process-grid{grid-template-columns:1fr}}
/* connecting line */
.process-grid::before{
  content:""; position:absolute;
  top:40px; left:calc(12.5% + 16px); right:calc(12.5% + 16px);
  height:2px; background:var(--line);
}
@media(max-width:880px){.process-grid::before{display:none}}
.step{text-align:center; padding:0 16px; position:relative}
.step-num{
  width:56px; height:56px; border-radius:50%;
  background:var(--ink); color:#fff;
  display:flex; align-items:center; justify-content:center;
  font-size:1.1rem; font-weight:800;
  margin:0 auto 18px; position:relative; z-index:2;
  box-shadow:0 0 0 4px var(--paper), 0 0 0 6px var(--line);
}
.step-num svg{width:24px; height:24px; stroke:#fff; stroke-width:2; fill:none}
.step h4{margin-bottom:6px; font-size:1rem}
.step p{font-size:0.86rem; color:var(--muted); line-height:1.5}
.step .step-time{font-size:0.72rem; font-weight:600; color:var(--accent); text-transform:uppercase; letter-spacing:0.06em; margin-top:10px}

/* ============ PRICING ============ */
.price-list{display:flex; flex-direction:column; border-top:1px solid var(--line)}
.price-row{
  display:grid; grid-template-columns:1fr auto; gap:32px;
  padding:22px 0; border-bottom:1px solid var(--line); align-items:center;
}
@media(max-width:720px){.price-row{grid-template-columns:1fr; gap:4px}}
.price-name{font-size:1.05rem; font-weight:600; display:flex; align-items:baseline; gap:10px}
.price-name span{font-weight:400; color:var(--muted); font-size:0.88rem}
.price-amt{font-family:var(--heading); font-size:1.2rem; font-weight:700; letter-spacing:-0.02em; white-space:nowrap}

/* ============ FAQ ============ */
.faq-list{display:flex; flex-direction:column; border-top:1px solid var(--line)}
.faq-item{border-bottom:1px solid var(--line)}
.faq-item summary{
  list-style:none; cursor:pointer; padding:20px 0;
  display:flex; justify-content:space-between; align-items:center; gap:20px;
  font-size:1.02rem; font-weight:600; color:var(--ink); transition:color 0.2s;
}
.faq-item summary::-webkit-details-marker{display:none}
.faq-item summary:hover{color:var(--accent)}
.faq-item summary::after{
  content:"+"; font-size:1.4rem; font-weight:300; color:var(--muted);
  width:32px; height:32px; border:1px solid var(--line); border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  flex-shrink:0; transition:all 0.2s;
}
.faq-item[open] summary::after{content:"−"; background:var(--accent); color:#fff; border-color:var(--accent)}
.faq-item .ans{padding:0 48px 20px 0; color:var(--muted); font-size:0.94rem; line-height:1.65; max-width:68ch}
@media(max-width:720px){.faq-item .ans{padding-right:0}}

/* ============ CTA ============ */
.cta{background:var(--ink); color:#fff; padding:96px 0; position:relative; overflow:hidden}
@media(max-width:720px){.cta{padding:64px 0}}
.cta-inner{max-width:var(--max); margin:0 auto; padding:0 var(--gutter)}
.cta-grid{display:grid; grid-template-columns:1.3fr 1fr; gap:48px; align-items:end}
@media(max-width:880px){.cta-grid{grid-template-columns:1fr; gap:32px}}
.cta h2{color:#fff; max-width:14ch}
.cta-right{display:flex; flex-direction:column; gap:18px}
.cta-points{display:flex; flex-direction:column; gap:10px; margin-bottom:4px}
.cta-points li{list-style:none; display:flex; gap:10px; align-items:flex-start; font-size:0.92rem; color:rgba(255,255,255,0.8)}
.cta-points svg{width:16px; height:16px; stroke:var(--accent); stroke-width:2.5; fill:none; flex-shrink:0; margin-top:3px}
.cta-actions{display:flex; gap:12px; flex-wrap:wrap; margin-top:10px}

/* ============ LEAD FORM ============ */
.lead-form{background:var(--paper); padding:96px 0; border-top:1px solid var(--line)}
@media(max-width:720px){.lead-form{padding:64px 0}}
.lead-form-grid{
  max-width:var(--max); margin:0 auto; padding:0 var(--gutter);
  display:grid; grid-template-columns:1fr 1.1fr; gap:48px; align-items:start;
}
@media(max-width:880px){.lead-form-grid{grid-template-columns:1fr; gap:36px}}
.lf-left h2{margin-bottom:14px}
.lf-left>p{font-size:0.98rem; color:var(--muted); max-width:42ch; line-height:1.6; margin-bottom:24px}
.lf-facts{display:flex; flex-direction:column; gap:12px; padding-top:20px; border-top:1px solid var(--line)}
.lf-fact{display:flex; gap:10px; align-items:center; font-size:0.9rem}
.lf-fact svg{width:16px; height:16px; stroke:var(--accent); stroke-width:2.5; fill:none; flex-shrink:0}
.lf-fact strong{font-weight:600}
.form{background:#fff; border:1px solid var(--line); border-radius:14px; padding:32px}
@media(max-width:720px){.form{padding:22px}}
.form-head{margin-bottom:20px; padding-bottom:18px; border-bottom:1px solid var(--line)}
.form-head h3{font-size:1.3rem; margin-bottom:3px}
.form-head .sub{font-size:0.84rem; color:var(--muted)}
.field{margin-bottom:12px}
.field label{display:block; font-size:0.7rem; letter-spacing:0.08em; text-transform:uppercase; font-weight:600; color:var(--muted-light); margin-bottom:5px}
.field input,.field select,.field textarea{width:100%; padding:12px 14px; border:1px solid var(--line); border-radius:8px; font-family:inherit; font-size:0.92rem; background:var(--paper); transition:border-color 0.2s}
.field input:focus,.field select:focus,.field textarea:focus{outline:none; border-color:var(--ink); background:#fff}
.field-row{display:grid; grid-template-columns:1fr 1fr; gap:10px}
.form button[type=submit]{margin-top:6px}
.form-note{font-size:0.75rem; color:var(--muted-light); text-align:center; margin-top:10px}

/* ============ FOOTER ============ */
footer{background:var(--ink); color:rgba(255,255,255,0.55); padding:56px 0 24px; font-size:0.88rem}
.f-top{
  max-width:var(--max); margin:0 auto; padding:0 var(--gutter);
  display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:36px;
  margin-bottom:40px; padding-bottom:36px;
  border-bottom:1px solid rgba(255,255,255,0.08);
}
@media(max-width:880px){.f-top{grid-template-columns:1fr 1fr; gap:24px}}
@media(max-width:540px){.f-top{grid-template-columns:1fr}}
.f-brand .logo-img{filter:brightness(0) invert(1); height:28px}
.f-brand p{margin-top:12px; max-width:300px; line-height:1.6}
.f-top h5{color:#fff; font-size:0.72rem; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; font-weight:600}
.f-top ul{list-style:none}
.f-top li{margin-bottom:7px}
.f-top a{color:rgba(255,255,255,0.55); transition:color 0.2s}
.f-top a:hover{color:var(--accent)}
.f-bottom{
  max-width:var(--max); margin:0 auto; padding:0 var(--gutter);
  display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;
  font-size:0.78rem;
}

/* ============ MOBILE STICKY ============ */
.m-sticky{display:none; position:fixed; bottom:0; left:0; right:0; background:#fff; border-top:1px solid var(--line); padding:10px 14px; z-index:60; gap:8px; box-shadow:0 -6px 20px rgba(0,0,0,0.06)}
.m-sticky .btn{flex:1; padding:12px; font-size:0.88rem; justify-content:center}
@media(max-width:720px){.m-sticky{display:flex} body{padding-bottom:70px}}

/* ============ FADE ============ */
.fade-up{opacity:0; transform:translateY(20px); transition:opacity 0.6s ease, transform 0.6s ease}
.fade-up.visible{opacity:1; transform:translateY(0)}
.fade-up.d1{transition-delay:0.08s}
.fade-up.d2{transition-delay:0.16s}
.fade-up.d3{transition-delay:0.24s}
</style>
</head>
<body>

<!-- TICKER -->
<div class="top-ticker">
  <div class="ticker-track">
    <span class="ticker-item">Festpreis-Garantie nach Vor-Ort-Termin</span>
    <span class="ticker-item">45 eigene Handwerker — keine Subunternehmer</span>
    <span class="ticker-item">22 Jahre in der Region Heidelberg / Mannheim / Heilbronn</span>
    <span class="ticker-item">Kostenlose Beratung vor Ort</span>
    <span class="ticker-item">4,9 ★ aus 180+ Bewertungen</span>
    <span class="ticker-item">Festpreis-Garantie nach Vor-Ort-Termin</span>
    <span class="ticker-item">45 eigene Handwerker — keine Subunternehmer</span>
    <span class="ticker-item">22 Jahre in der Region Heidelberg / Mannheim / Heilbronn</span>
    <span class="ticker-item">Kostenlose Beratung vor Ort</span>
    <span class="ticker-item">4,9 ★ aus 180+ Bewertungen</span>
  </div>
</div>

<!-- NAV -->
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="#" class="logo"><img src="img/HM Logo.svg" alt="HeinzelMänner" class="logo-img"></a>
    <div class="nav-links">
      <a href="#leistungen">Leistungen</a>
      <a href="#projekte">Referenzen</a>
      <a href="#ablauf">Ablauf</a>
      <a href="#preise">Preise</a>
      <a href="#anfrage">Beratung</a>
    </div>
    <div class="nav-right">
      <a href="tel:+4962249689465" class="nav-phone">
        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>06224 9689465</span>
      </a>
      <a href="#anfrage" class="btn btn-accent">Beratung anfragen</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-grid">
    <div>
      <div class="eyebrow fade-up visible">Sanierung · Rhein-Neckar · Heilbronn</div>
      <h1 class="fade-up visible">Sanierung aus einer Hand. Festpreis, der hält.</h1>
      <p class="hero-lede fade-up visible d1">Komplettsanierung, Bad, Boden, Trockenbau & Maler — <strong>alle Gewerke, ein Ansprechpartner.</strong> Verbindlicher Festpreis nach kostenloser Vor-Ort-Beratung.</p>
      <div class="hero-actions fade-up visible d2">
        <a href="#anfrage" class="btn btn-accent btn-lg">Kostenlose Beratung <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
        <a href="tel:+4962249689465" class="btn btn-outline btn-lg">06224 9689465</a>
      </div>
    </div>
    <div class="hero-visual fade-up visible d1">
      <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Modern saniertes Wohnzimmer">
      <div class="hero-caption-tag">Aktuelle Projekte</div>
      <div class="hero-caption">
        <div class="hero-slide active" data-slide="0">
          <div class="hs-title">Wohnungssanierung · 82 m²</div>
          <div class="hs-sub">Heidelberg-Handschuhsheim · Mai 2026</div>
        </div>
        <div class="hero-slide" data-slide="1">
          <div class="hs-title">Badsanierung · Walk-in-Dusche</div>
          <div class="hs-sub">Mannheim-Lindenhof · April 2026</div>
        </div>
        <div class="hero-slide" data-slide="2">
          <div class="hs-title">Kernsanierung · 95 m² Altbau</div>
          <div class="hs-sub">Heidelberg-Wieblingen · März 2026</div>
        </div>
        <div class="hero-slide" data-slide="3">
          <div class="hs-title">Boden & Maler · 3-Zimmer</div>
          <div class="hs-sub">Schwetzingen · Februar 2026</div>
        </div>
        <div class="hero-dots">
          <span class="hero-dot active" data-dot="0"></span>
          <span class="hero-dot" data-dot="1"></span>
          <span class="hero-dot" data-dot="2"></span>
          <span class="hero-dot" data-dot="3"></span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<section class="stats">
  <div class="stats-inner">
    <div class="stat fade-up">
      <div class="num">22<span>+</span></div>
      <div class="lbl">Jahre in der Region</div>
    </div>
    <div class="stat fade-up d1">
      <div class="num">45</div>
      <div class="lbl">Eigene Handwerker</div>
    </div>
    <div class="stat fade-up d2">
      <div class="num">430<span>+</span></div>
      <div class="lbl">Abgeschlossene Projekte</div>
    </div>
  </div>
</section>

<!-- LEISTUNGEN -->
<section id="leistungen">
  <div class="wrap">
    <div class="sh fade-up">
      <div class="eyebrow">Unsere Leistungen</div>
      <h2>Alle Gewerke aus einer Hand</h2>
      <p>Ob Komplettsanierung, Bad oder Bodenverlegung — wir koordinieren alles und liefern einen verbindlichen Festpreis. Kein Subunternehmer-Chaos, ein Ansprechpartner.</p>
    </div>

    <div class="svc-grid fade-up">
      <a href="kern.html" class="svc-card">
        <div class="svc-card-img"><img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kernsanierung"></div>
        <div class="svc-card-body">
          <h3>Komplettsanierung</h3>
          <p>Wohnung oder Haus komplett auf den Rohbau zurück und neu aufgebaut — Rückbau, Elektro, Sanitär, Boden, Maler.</p>
          <span class="svc-price-tag">ab 850 €/m²</span>
        </div>
      </a>
      <a href="bad.html" class="svc-card">
        <div class="svc-card-img"><img src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Badsanierung"></div>
        <div class="svc-card-body">
          <h3>Badsanierung</h3>
          <p>Komplettbäder, Walk-in-Duschen, barrierefreie Bäder. Sanitär, Fliesen, Elektrik — fertig in 2–4 Wochen.</p>
          <span class="svc-price-tag">ab 12.500 €</span>
        </div>
      </a>
      <a href="boden.html" class="svc-card">
        <div class="svc-card-img"><img src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bodenverlegung"></div>
        <div class="svc-card-body">
          <h3>Bodenverlegung</h3>
          <p>Vinyl, Laminat, Parkett oder Fliesen — inkl. Untergrund, Verlegung und Sockelleisten. In 3–7 Tagen fertig.</p>
          <span class="svc-price-tag">ab 38 €/m²</span>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- INLINE CTA -->
<div class="inline-cta">
  <div class="inline-cta-inner">
    <p>Welches Gewerk brauchen Sie? Wir beraten kostenlos.</p>
    <a href="#anfrage" class="btn">Beratung anfragen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
    <a href="tel:+4962249689465" class="btn btn-outline">06224 9689465</a>
  </div>
</div>

<!-- PROJEKTE -->
<section id="projekte">
  <div class="wrap">
    <div class="sh fade-up">
      <div class="eyebrow">Referenzen</div>
      <h2>Projekte aus der Region</h2>
      <p>Über 430 abgeschlossene Sanierungen in Heidelberg, Mannheim und im Raum Heilbronn.</p>
    </div>

    <div class="proj-grid">
      <div class="proj-card wide fade-up">
        <img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Komplettsanierung">
        <div class="pmeta"><span class="ptag">Kernsanierung</span><div class="pname">Altbauwohnung 95 m² · Heidelberg</div></div>
      </div>
      <div class="proj-card fade-up">
        <img src="https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bad">
        <div class="pmeta"><span class="ptag">Bad</span><div class="pname">Komplettbad · Heidelberg</div></div>
      </div>
      <div class="proj-card fade-up">
        <img src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Boden">
        <div class="pmeta"><span class="ptag">Boden & Maler</span><div class="pname">3-Zimmer · Mannheim</div></div>
      </div>
      <div class="proj-card fade-up">
        <img src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Walk-in Dusche">
        <div class="pmeta"><span class="ptag">Bad</span><div class="pname">Walk-in-Dusche · Sinsheim</div></div>
      </div>
      <div class="proj-card wide fade-up">
        <img src="https://images.pexels.com/photos/6587828/pexels-photo-6587828.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Küche">
        <div class="pmeta"><span class="ptag">Kernsanierung</span><div class="pname">Küche & Wohnbereich · Schwetzingen</div></div>
      </div>
    </div>
  </div>
</section>

<!-- INLINE CTA -->
<div class="inline-cta">
  <div class="inline-cta-inner">
    <p>Ähnliches Projekt geplant?</p>
    <a href="#anfrage" class="btn">Kostenloses Angebot anfragen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
  </div>
</div>

<!-- WARUM -->
<section id="warum">
  <div class="wrap">
    <div class="sh fade-up">
      <div class="eyebrow">Warum HeinzelMänner</div>
      <h2>Was Sie von uns erwarten können</h2>
    </div>

    <div class="usp-grid">
      <div class="usp-card fade-up">
        <h4>Verbindlicher Festpreis</h4>
        <p>Nach der Vor-Ort-Begehung erhalten Sie ein schriftliches Festpreisangebot. Keine Nachforderungen, keine versteckten Positionen.</p>
      </div>
      <div class="usp-card fade-up d1">
        <h4>Eigenes Handwerker-Team</h4>
        <p>45 fest angestellte Mitarbeiter für Sanitär, Elektrik, Fliesen, Trockenbau, Boden und Maler. Ein Ansprechpartner für alles.</p>
      </div>
      <div class="usp-card fade-up d2">
        <h4>Persönliche Beratung vor Ort</h4>
        <p>Unser Bauleiter kommt zu Ihnen, schaut sich Substanz und Anschlüsse an und berät ehrlich — kostenlos und unverbindlich.</p>
      </div>
      <div class="usp-card fade-up d3">
        <h4>22 Jahre in der Region</h4>
        <p>In Leimen ansässig, die Region, die Behörden und die typische Bausubstanz kennen wir. Kurze Wege, schnelle Termine.</p>
      </div>
    </div>
  </div>
</section>

<!-- PREISRECHNER -->
<section class="calc-section" id="rechner">
  <div class="wrap">
    <div class="calc-wrap">
      <div class="calc-intro fade-up">
        <div class="eyebrow">Preis-Indikator</div>
        <h2 style="margin-bottom:14px">Was kostet meine Sanierung?</h2>
        <p>Wählen Sie die Leistung und geben Sie die Fläche an. Der Rechner zeigt eine Preisspanne auf Basis typischer Projekte.</p>
        <div class="hint">
          <strong>Wichtig:</strong> Der finale Preis hängt von Materialauswahl, Substanz und Details ab. Den exakten Festpreis gibt's nach dem kostenlosen Vor-Ort-Termin.
        </div>
      </div>

      <div class="calc-card fade-up d1">
        <span class="clbl">Welche Leistung?</span>
        <div class="calc-types" id="calc-types">
          <label class="calc-type active" data-min="800" data-max="1500" data-unit="m²" data-fixed="0" data-slider-label="Wohnfläche" data-slider-max="300">
            <input type="radio" name="ctype" value="komplett" checked>
            <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 12h6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Komplett</span>
          </label>
          <label class="calc-type" data-min="12500" data-max="25000" data-unit="" data-fixed="1" data-slider-label="" data-slider-max="0">
            <input type="radio" name="ctype" value="bad">
            <svg viewBox="0 0 24 24"><path d="M4 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6H4v6zM6 12V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Bad</span>
          </label>
          <label class="calc-type" data-min="38" data-max="78" data-unit="m²" data-fixed="0" data-slider-label="Bodenfläche" data-slider-max="300">
            <input type="radio" name="ctype" value="boden">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1" fill="none"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18" fill="none" stroke-linecap="round"/></svg>
            <span>Boden</span>
          </label>
          <label class="calc-type" data-min="10" data-max="22" data-unit="m²" data-fixed="0" data-slider-label="Wandfläche" data-slider-max="500">
            <input type="radio" name="ctype" value="maler">
            <svg viewBox="0 0 24 24"><path d="M19 11h-9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M4 4h7l4 5h6v4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="20" r="2" fill="none"/></svg>
            <span>Maler</span>
          </label>
          <label class="calc-type" data-min="52" data-max="75" data-unit="m²" data-fixed="0" data-slider-label="Wandfläche" data-slider-max="200">
            <input type="radio" name="ctype" value="trocken">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1" fill="none"/><path d="M3 9h6V3M9 15h6V9M15 21V15h6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Trockenbau</span>
          </label>
          <label class="calc-type" data-min="22" data-max="48" data-unit="m²" data-fixed="0" data-slider-label="Abriss-Fläche" data-slider-max="200">
            <input type="radio" name="ctype" value="abriss">
            <svg viewBox="0 0 24 24"><path d="M18.37 5.63a9 9 0 1 1-12.73 0M12 2v10" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Abriss</span>
          </label>
          <label class="calc-type" data-min="45" data-max="65" data-unit="m³" data-fixed="0" data-slider-label="Volumen" data-slider-max="100" data-slider-step="1">
            <input type="radio" name="ctype" value="entr">
            <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Entrümpelung</span>
          </label>
        </div>

        <div class="calc-slider-wrap" id="calc-qm-wrap">
          <label id="calc-slider-label">Wohnfläche in m² <span class="val" id="calc-qm-out">75 m²</span></label>
          <input type="range" id="calc-qm" min="5" max="300" value="75" step="5">
        </div>

        <div class="calc-result">
          <div class="l">Geschätzte Preisspanne (brutto, inkl. 19 % MwSt.)</div>
          <div class="r" id="calc-range">60.000 €<span class="sep">—</span>112.500 €</div>
          <div class="d">Verbindlicher Festpreis nach kostenloser Vor-Ort-Begehung</div>
        </div>

        <a href="#anfrage" class="btn btn-block btn-lg">Genaues Angebot anfragen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
      </div>
    </div>
  </div>
</section>

<!-- ABLAUF — visual steps -->
<section id="ablauf">
  <div class="wrap">
    <div class="sh fade-up" style="text-align:center; margin-left:auto; margin-right:auto">
      <div class="eyebrow">So läuft's ab</div>
      <h2>Vier Schritte zum Festpreis</h2>
    </div>

    <div class="process-grid fade-up">
      <div class="step">
        <div class="step-num"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.12 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
        <h4>Anfrage</h4>
        <p>Anrufen oder Formular ausfüllen. Wir melden uns innerhalb von 24 Stunden.</p>
        <div class="step-time">Heute</div>
      </div>
      <div class="step">
        <div class="step-num"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M9 22V12h6v10"/></svg></div>
        <h4>Vor-Ort-Beratung</h4>
        <p>Bauleiter kommt zu Ihnen, schaut alles an und berät — kostenlos, ohne Druck.</p>
        <div class="step-time">In 48 Stunden</div>
      </div>
      <div class="step">
        <div class="step-num"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg></div>
        <h4>Festpreis-Angebot</h4>
        <p>Schriftliches Angebot, aufgeschlüsselt nach Gewerken. Verbindlich und transparent.</p>
        <div class="step-time">Nach 1 Woche</div>
      </div>
      <div class="step">
        <div class="step-num"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div>
        <h4>Ausführung & Übergabe</h4>
        <p>Ein Bauleiter koordiniert alle Gewerke. Wöchentliche Updates, pünktliche Übergabe.</p>
        <div class="step-time">4–14 Wochen</div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section id="preise" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="sh fade-up">
      <div class="eyebrow">Festpreise</div>
      <h2>Preise im Überblick</h2>
      <p>Unsere Richtpreise als Orientierung. Den verbindlichen Festpreis erhalten Sie nach der kostenlosen Vor-Ort-Begehung.</p>
    </div>

    <div class="price-list">
      <a href="kern.html" class="price-row fade-up"><div class="price-name">Kernsanierung <span>Komplett</span></div><div class="price-amt">ab 850 €/m²</div></a>
      <a href="bad.html" class="price-row fade-up"><div class="price-name">Badsanierung <span>5–7 m² komplett</span></div><div class="price-amt">ab 12.500 €</div></a>
      <a href="boden.html" class="price-row fade-up"><div class="price-name">Bodenverlegung <span>Vinyl inkl. Material</span></div><div class="price-amt">ab 42 €/m²</div></a>
      <a href="trockenbau.html" class="price-row fade-up"><div class="price-name">Trockenbau <span>doppelt beplankt + Dämmung</span></div><div class="price-amt">ab 75 €/m²</div></a>
      <a href="maler.html" class="price-row fade-up"><div class="price-name">Malerarbeiten <span>Wände streichen</span></div><div class="price-amt">ab 10 €/m²</div></a>
    </div>
  </div>
</section>

<!-- INLINE CTA -->
<div class="inline-cta">
  <div class="inline-cta-inner">
    <p>Jetzt Festpreis sichern — Beratung in 48 Stunden vor Ort.</p>
    <a href="tel:+4962249689465" class="btn">06224 9689465</a>
    <a href="#anfrage" class="btn btn-outline">Formular ausfüllen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
  </div>
</div>

<!-- FAQ -->
<section id="faq">
  <div class="wrap">
    <div class="sh fade-up">
      <div class="eyebrow">Häufige Fragen</div>
      <h2>Bevor Sie anrufen</h2>
    </div>

    <div class="faq-list">
      <details class="faq-item"><summary>Was kostet eine Komplettsanierung?</summary><div class="ans">Typischerweise 800–1.500 € pro m² Wohnfläche, je nach Substanz, Materialwahl und Ausstattung. Eine 80 m² Wohnung liegt im Bereich 64.000–120.000 €. Den exakten Festpreis erhalten Sie nach der kostenlosen Vor-Ort-Begehung.</div></details>
      <details class="faq-item"><summary>Wie schnell kann begonnen werden?</summary><div class="ans">Der Vor-Ort-Termin ist binnen 48 Stunden möglich. Nach Auftragsannahme starten wir in 4–8 Wochen, je nach Projektgröße. Bei Notfällen (Wasserschaden) oft innerhalb einer Woche.</div></details>
      <details class="faq-item"><summary>Übernehmen Sie alle Gewerke selbst?</summary><div class="ans">Ja — Sanitär, Elektrik, Trockenbau, Boden, Maler, Fliesen und Entrümpelung machen wir mit unseren 45 Mitarbeitern. Nur bei speziellen Anforderungen (Statiker, Schornsteinfeger) arbeiten wir mit langjährigen Partnern.</div></details>
      <details class="faq-item"><summary>Festpreis oder Abrechnung nach Aufwand?</summary><div class="ans">Ausschließlich Festpreise, schriftlich nach Vor-Ort-Begehung. Verbindlich — auch wenn die Arbeit länger dauert. Nur bei nachträglichen Änderungswünschen vereinbaren wir gesondert.</div></details>
      <details class="faq-item"><summary>Können wir während der Sanierung wohnen bleiben?</summary><div class="ans">Bei Badsanierung oder Malerarbeiten oft möglich. Bei Kernsanierung empfehlen wir den Auszug für 3–8 Wochen. Das besprechen wir ehrlich im Vor-Ort-Termin.</div></details>
      <details class="faq-item"><summary>Übernehmen Sie auch nur Teilleistungen?</summary><div class="ans">Selbstverständlich — einzelne Gewerke wie nur die Bodenverlegung oder nur die Malerarbeiten. Auf den Unterseiten finden Sie zu jedem Gewerk Details.</div></details>
      <details class="faq-item"><summary>Wie wickeln Sie Versicherungsschäden ab?</summary><div class="ans">Bei Wasser- oder Brandschäden übernehmen wir die komplette Abwicklung mit Ihrer Versicherung: Schadensaufnahme, Kostenvoranschlag, direkte Abrechnung.</div></details>
      <details class="faq-item"><summary>Welche Förderungen gibt es?</summary><div class="ans">KfW 261/461 für energetische Sanierung bis 75.000 € Kredit. BAFA für Heizungstausch bis 70 %. KfW 455-B für barrierefreien Umbau. Wir wickeln Antrag und Nachweise auf Wunsch komplett ab.</div></details>
    </div>
  </div>
</section>

<!-- LEAD FORM -->
<section class="lead-form" id="anfrage">
  <div class="lead-form-grid">
    <div class="lf-left fade-up">
      <div class="eyebrow">Beratung</div>
      <h2>Lassen Sie uns kurz sprechen</h2>
      <p>10-Minuten-Telefonat — wir klären die Eckpunkte, vereinbaren den Vor-Ort-Termin und Sie haben binnen 2 Wochen Ihr Festpreis-Angebot.</p>
      <div class="lf-facts">
        <div class="lf-fact"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><strong>Antwort binnen 24 Stunden</strong></div>
        <div class="lf-fact"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><strong>Kostenlos & unverbindlich</strong></div>
        <div class="lf-fact"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><strong>Vor-Ort-Termin in 48 Stunden</strong></div>
      </div>
    </div>

    <div class="fade-up d1">
      <form class="form" action="https://formspree.io/f/xwvawqrw" method="POST">
        <input type="hidden" name="_subject" value="Sanierung-Anfrage Landingpage">
        <div class="form-head"><h3>Beratung anfragen</h3><div class="sub">Wir melden uns binnen 24 Stunden</div></div>
        <div class="field"><label>Ihr Name</label><input type="text" name="Name" required placeholder="Vor- und Nachname"></div>
        <div class="field-row">
          <div class="field"><label>Telefon</label><input type="tel" name="Telefon" required placeholder="0171 1234567"></div>
          <div class="field"><label>PLZ / Ort</label><input type="text" name="PLZ" required placeholder="69115 Heidelberg"></div>
        </div>
        <div class="field"><label>Welche Sanierung?</label>
          <select name="Sanierungsart" required>
            <option value="">Bitte auswählen…</option>
            <option>Komplettsanierung</option><option>Badsanierung</option>
            <option>Bodenverlegung</option><option>Trockenbau</option>
            <option>Malerarbeiten</option><option>Mehrere Leistungen</option>
            <option>Beratung nötig</option>
          </select>
        </div>
        <div class="field"><label>Anmerkung (optional)</label><textarea name="Anmerkung" rows="2" placeholder="z. B. Wohnfläche, Wunschtermin"></textarea></div>
        <button type="submit" class="btn btn-accent btn-block btn-lg">Beratung anfragen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></button>
        <div class="form-note">Ihre Daten werden vertraulich behandelt.</div>
      </form>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta-inner">
    <div class="cta-grid">
      <div class="fade-up"><h2>Ihr Projekt. Unser Handwerk.</h2></div>
      <div class="cta-right fade-up d1">
        <ul class="cta-points">
          <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> Kostenlose Vor-Ort-Beratung in 48 Stunden</li>
          <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> Verbindlicher Festpreis — keine Nachforderungen</li>
          <li><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg> 45 eigene Handwerker — keine Subunternehmer</li>
        </ul>
        <div class="cta-actions">
          <a href="tel:+4962249689465" class="btn btn-accent btn-lg">06224 9689465</a>
          <a href="#anfrage" class="btn btn-light btn-lg">Formular ausfüllen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="f-top">
    <div class="f-brand">
      <a href="#" class="logo"><img src="img/HM Logo.svg" alt="HeinzelMänner" class="logo-img"></a>
      <p>Sanierung & Renovierung in der Metropolregion Rhein-Neckar und im Raum Heilbronn. Seit 22 Jahren — Festpreis garantiert.</p>
    </div>
    <div>
      <h5>Leistungen</h5>
      <ul><li><a href="bad.html">Badsanierung</a></li><li><a href="kern.html">Kernsanierung</a></li><li><a href="boden.html">Bodenverlegung</a></li><li><a href="trockenbau.html">Trockenbau</a></li><li><a href="maler.html">Malerarbeiten</a></li></ul>
    </div>
    <div>
      <h5>Kontakt</h5>
      <p>HeinzelMänner GmbH<br>Im Hagen 4<br>69181 Leimen</p>
      <p style="margin-top:10px"><a href="tel:+4962249689465" style="color:#fff">06224 9689465</a><br><a href="mailto:info@hm-sanierung.com">info@hm-sanierung.com</a></p>
    </div>
    <div>
      <h5>Rechtliches</h5>
      <ul><li><a href="../entruempelung/impressum.html">Impressum</a></li><li><a href="../entruempelung/datenschutz.html">Datenschutz</a></li><li><a href="../entruempelung/agb.html">AGB</a></li></ul>
    </div>
  </div>
  <div class="f-bottom">
    <div>© 2026 HeinzelMänner Hausmeister Dienste und Gebäude Service GmbH</div>
    <div>USt-IdNr. DE 192 272 349 · Geschäftsführer Sascha Heck</div>
  </div>
</footer>

<!-- MOBILE STICKY -->
<div class="m-sticky">
  <a href="tel:+4962249689465" class="btn">Anrufen</a>
  <a href="#anfrage" class="btn btn-accent">Beratung</a>
</div>

<script>
// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), {passive:true});

// Fade-up
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible'); obs.unobserve(e.target)} });
}, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Hero caption cycling
(function(){
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if(!slides.length) return;
  let cur = 0;
  setInterval(() => {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
  }, 5000);
})();

// ========== CALCULATOR ==========
(function(){
  const MWST = 1.19;
  const typesWrap   = document.getElementById('calc-types');
  const slider      = document.getElementById('calc-qm');
  const sliderOut   = document.getElementById('calc-qm-out');
  const sliderWrap  = document.getElementById('calc-qm-wrap');
  const sliderLabel = document.getElementById('calc-slider-label');
  const rangeOut    = document.getElementById('calc-range');
  if(!typesWrap || !slider) return;

  const allTypes = typesWrap.querySelectorAll('.calc-type');
  let active = typesWrap.querySelector('.calc-type.active');

  function getActiveData(){
    return {
      min:        parseFloat(active.dataset.min)   || 0,
      max:        parseFloat(active.dataset.max)   || 0,
      unit:       active.dataset.unit              || '',
      fixed:      active.dataset.fixed === '1',
      label:      active.dataset.sliderLabel       || 'Fläche',
      sliderMax:  parseInt(active.dataset.sliderMax) || 300,
      sliderStep: parseInt(active.dataset.sliderStep) || 5
    };
  }

  function fmtEur(n){
    return new Intl.NumberFormat('de-DE', {
      style:'currency', currency:'EUR',
      minimumFractionDigits:0, maximumFractionDigits:0
    }).format(n);
  }

  function update(){
    const d = getActiveData();

    if(d.fixed){
      // Fixed price (e.g. Badsanierung) — hide slider
      sliderWrap.style.display = 'none';
      const lo = Math.round(d.min * MWST);
      const hi = Math.round(d.max * MWST);
      rangeOut.innerHTML = fmtEur(lo) + '<span class="sep">—</span>' + fmtEur(hi);
    } else {
      // Per-unit price — show slider
      sliderWrap.style.display = '';
      const qty = parseFloat(slider.value) || 0;
      const unitLabel = d.unit || 'm²';

      // Update slider config
      slider.max  = d.sliderMax;
      slider.step = d.sliderStep;
      if(parseFloat(slider.value) > d.sliderMax) slider.value = Math.round(d.sliderMax / 2);

      // Update label
      sliderLabel.innerHTML = d.label + ' in ' + unitLabel +
        ' <span class="val" id="calc-qm-out">' + slider.value + ' ' + unitLabel + '</span>';

      const lo = Math.round(qty * d.min * MWST);
      const hi = Math.round(qty * d.max * MWST);
      rangeOut.innerHTML = fmtEur(lo) + '<span class="sep">—</span>' + fmtEur(hi);
    }
  }

  // Type selection
  allTypes.forEach(label => {
    label.addEventListener('click', function(){
      allTypes.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      this.querySelector('input').checked = true;
      active = this;
      update();
    });
  });

  // Slider
  slider.addEventListener('input', update);

  // Init
  update();
})();
</script>

</body>
</html>
