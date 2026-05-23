"use client";

import { useState } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #0a0a0a;
    --cream: #f5f0e8;
    --mauve: #8B5E6E;
    --mauve-light: #c49aaa;
    --mauve-dark: #5c3245;
    --warm-white: #faf7f2;
    --text-muted: #888;
  }

  body { background: var(--black); color: var(--cream); font-family: 'DM Sans', sans-serif; }

  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    overflow: hidden;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 60px 80px 80px;
    position: relative;
    z-index: 2;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(139,94,110,0.15);
    border: 1px solid rgba(139,94,110,0.3);
    color: var(--mauve-light);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 100px;
    width: fit-content;
    margin-bottom: 36px;
    animation: fadeUp 0.8s ease both;
  }

  .badge::before {
    content: '';
    width: 6px; height: 6px;
    background: var(--mauve-light);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  .hero-eyebrow {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--mauve-light);
    margin-bottom: 20px;
    animation: fadeUp 0.8s 0.1s ease both;
  }

  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(52px, 5vw, 76px);
    font-weight: 300;
    line-height: 1.05;
    letter-spacing: -1px;
    color: var(--cream);
    margin-bottom: 12px;
    animation: fadeUp 0.8s 0.2s ease both;
  }

  .hero-title em {
    font-style: italic;
    color: var(--mauve-light);
  }

  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 300;
    font-style: italic;
    color: var(--text-muted);
    margin-bottom: 32px;
    animation: fadeUp 0.8s 0.3s ease both;
  }

  .hero-desc {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(245,240,232,0.7);
    max-width: 420px;
    margin-bottom: 48px;
    animation: fadeUp 0.8s 0.4s ease both;
  }

  .price-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
    animation: fadeUp 0.8s 0.5s ease both;
  }

  .price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px;
    font-weight: 600;
    color: var(--cream);
  }

  .price-og {
    font-size: 20px;
    color: var(--text-muted);
    text-decoration: line-through;
  }

  .price-tag {
    background: var(--mauve);
    color: white;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 4px;
  }

  .cta-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 420px;
    animation: fadeUp 0.8s 0.6s ease both;
  }

  .btn-primary {
    background: var(--cream);
    color: var(--black);
    border: none;
    padding: 18px 32px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  .btn-primary:hover {
    background: var(--mauve-light);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(139,94,110,0.3);
  }

  .btn-secondary {
    background: transparent;
    color: var(--cream);
    border: 1px solid rgba(245,240,232,0.2);
    padding: 16px 32px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  .btn-secondary:hover {
    border-color: var(--mauve-light);
    color: var(--mauve-light);
  }

  .trust-row {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 36px;
    animation: fadeUp 0.8s 0.7s ease both;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--text-muted);
  }

  .trust-icon { font-size: 14px; }

  .hero-right {
    position: relative;
    overflow: hidden;
  }

  .product-visual {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2d1a22 0%, #1a0d14 50%, #0d0609 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-visual::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 60% 40%, rgba(139,94,110,0.3) 0%, transparent 60%);
  }

  .product-mockup {
    width: 340px;
    height: 520px;
    position: relative;
    z-index: 2;
  }

  .legging-shape {
    width: 100%;
    height: 100%;
    background: linear-gradient(160deg, #9b6b7d 0%, #7a4d5e 40%, #5c3245 100%);
    border-radius: 20px 20px 60px 60px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
  }

  .legging-shape::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%);
  }

  .skirt-panel {
    position: absolute;
    top: 80px;
    left: -10px; right: -10px;
    height: 100px;
    background: linear-gradient(160deg, #b07d8d 0%, #8B5E6E 100%);
    border-radius: 8px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    overflow: hidden;
  }

  .skirt-panel::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 30px;
    background: linear-gradient(180deg, transparent, rgba(0,0,0,0.15));
  }

  .snap-dot {
    width: 14px; height: 14px;
    background: #2a1520;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.2);
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  .product-label {
    position: absolute;
    right: -120px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 3;
  }

  .label-line {
    width: 60px;
    height: 1px;
    background: var(--mauve-light);
  }

  .label-text {
    font-size: 11px;
    color: var(--mauve-light);
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .floating-tag {
    position: absolute;
    background: rgba(10,10,10,0.9);
    border: 1px solid rgba(139,94,110,0.3);
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 12px;
    color: var(--cream);
    backdrop-filter: blur(10px);
    z-index: 4;
  }

  .tag-top {
    top: 10%;
    right: 5%;
    animation: float 4s ease-in-out infinite;
  }

  .tag-bottom {
    bottom: 15%;
    right: 8%;
    animation: float 4s 2s ease-in-out infinite;
  }

  .tag-label { color: var(--text-muted); font-size: 10px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px; }
  .tag-value { font-weight: 500; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .features {
    padding: 100px 80px;
    background: var(--black);
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .features-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .section-label {
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--mauve-light);
    margin-bottom: 16px;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 300;
    color: var(--cream);
    line-height: 1.2;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
  }

  .feature-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    padding: 40px 32px;
    transition: all 0.3s ease;
    cursor: default;
  }

  .feature-card:hover {
    background: rgba(139,94,110,0.08);
    border-color: rgba(139,94,110,0.3);
    transform: translateY(-4px);
  }

  .feature-icon {
    font-size: 28px;
    margin-bottom: 20px;
    display: block;
  }

  .feature-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--cream);
    margin-bottom: 12px;
  }

  .feature-desc {
    font-size: 13px;
    font-weight: 300;
    line-height: 1.8;
    color: var(--text-muted);
  }

  .how-it-works {
    padding: 100px 80px;
    background: #0d0d0d;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 48px;
    margin-top: 64px;
  }

  .step {
    position: relative;
    text-align: center;
  }

  .step::after {
    content: '→';
    position: absolute;
    right: -28px;
    top: 20px;
    color: rgba(139,94,110,0.4);
    font-size: 20px;
  }

  .step:last-child::after { display: none; }

  .step-num {
    width: 48px; height: 48px;
    background: rgba(139,94,110,0.15);
    border: 1px solid rgba(139,94,110,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    color: var(--mauve-light);
    margin: 0 auto 20px;
  }

  .step-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    color: var(--cream);
    margin-bottom: 10px;
  }

  .step-desc {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.7;
    font-weight: 300;
  }

  .social-proof {
    padding: 100px 80px;
    background: var(--black);
    text-align: center;
  }

  .testimonials {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 64px;
  }

  .testimonial {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    padding: 36px;
    text-align: left;
    border-radius: 4px;
    transition: border-color 0.3s;
  }

  .testimonial:hover { border-color: rgba(139,94,110,0.3); }

  .testimonial-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 19px;
    font-style: italic;
    font-weight: 300;
    color: var(--cream);
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .testimonial-author { font-size: 12px; color: var(--text-muted); letter-spacing: 1px; }
  .testimonial-name { color: var(--mauve-light); font-weight: 500; }

  .stars { color: var(--mauve-light); font-size: 14px; margin-bottom: 16px; }

  .waitlist-section {
    padding: 120px 80px;
    background: linear-gradient(135deg, #1a0d14 0%, #0d0609 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .waitlist-section::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(139,94,110,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  .waitlist-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(42px, 5vw, 64px);
    font-weight: 300;
    color: var(--cream);
    line-height: 1.1;
    margin-bottom: 16px;
  }

  .waitlist-sub {
    font-size: 15px;
    color: var(--text-muted);
    font-weight: 300;
    margin-bottom: 48px;
  }

  .waitlist-form {
    display: flex;
    gap: 0;
    max-width: 480px;
    margin: 0 auto 24px;
  }

  .email-input {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-right: none;
    color: var(--cream);
    padding: 16px 20px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s;
    border-radius: 2px 0 0 2px;
  }

  .email-input:focus { border-color: var(--mauve-light); }
  .email-input::placeholder { color: rgba(255,255,255,0.3); }

  .btn-join {
    background: var(--mauve);
    color: white;
    border: none;
    padding: 16px 28px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 0 2px 2px 0;
    white-space: nowrap;
  }

  .btn-join:hover { background: var(--mauve-dark); }

  .waitlist-note {
    font-size: 12px;
    color: var(--text-muted);
    letter-spacing: 0.5px;
  }

  .waitlist-count {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    font-size: 13px;
    color: var(--mauve-light);
  }

  .success-state {
    background: rgba(139,94,110,0.1);
    border: 1px solid rgba(139,94,110,0.3);
    border-radius: 8px;
    padding: 24px 32px;
    max-width: 480px;
    margin: 0 auto;
  }

  .success-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    color: var(--cream);
    margin-bottom: 8px;
  }

  .success-sub { font-size: 14px; color: var(--text-muted); }

  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 20px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(10,10,10,0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 600;
    color: var(--cream);
    letter-spacing: 2px;
  }

  .nav-logo span { color: var(--mauve-light); }

  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }

  .nav-links a {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s;
  }

  .nav-links a:hover { color: var(--cream); }

  .nav-cta {
    background: var(--mauve);
    color: white;
    border: none;
    padding: 10px 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.3s;
  }

  .nav-cta:hover { background: var(--mauve-dark); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .colors-row {
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    animation: fadeUp 0.8s 0.45s ease both;
  }

  .color-swatch {
    width: 28px; height: 28px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
    border: 2px solid transparent;
  }

  .color-swatch:hover, .color-swatch.active {
    transform: scale(1.2);
    border-color: white;
  }

  footer {
    padding: 40px 80px;
    background: #050505;
    border-top: 1px solid rgba(255,255,255,0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    color: rgba(255,255,255,0.3);
    letter-spacing: 2px;
  }

  .footer-note { font-size: 12px; color: rgba(255,255,255,0.2); }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; }
    .hero-right { display: none; }
    .hero-left { padding: 100px 32px 60px; }
    nav { padding: 16px 24px; }
    .nav-links { display: none; }
    .features, .how-it-works, .social-proof, .waitlist-section { padding: 60px 32px; }
    .features-grid, .steps, .testimonials { grid-template-columns: 1fr; }
    .step::after { display: none; }
    footer { padding: 32px 24px; flex-direction: column; gap: 12px; text-align: center; }
    .waitlist-form { flex-direction: column; }
    .email-input { border-right: 1px solid rgba(255,255,255,0.1); border-bottom: none; border-radius: 2px 2px 0 0; }
    .btn-join { border-radius: 0 0 2px 2px; }
  }
`;

const COLORS = [
  { name: "Dusty Mauve", hex: "#8B5E6E" },
  { name: "Midnight Black", hex: "#1a1a1a" },
  { name: "Olive Dusk", hex: "#5c6645" },
  { name: "Slate Blue", hex: "#4a5a6e" },
  { name: "Sand Beige", hex: "#b5a08a" },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleWaitlist = () => {
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    // In production: POST to your CRM / email tool
    console.log("Waitlist signup:", email);
  };

  const handleBuyNow = () => {
    setShowModal(true);
  };

  return (
    <>
      <style>{style}</style>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
            zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(8px)"
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#141414", border: "1px solid rgba(139,94,110,0.3)",
              borderRadius: "12px", padding: "48px", maxWidth: "440px", width: "90%",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 32, color: "#f5f0e8", marginBottom: 12 }}>
              You're early.
            </div>
            <div style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 32 }}>
              We're not live yet — but you can be the first to know when we launch. Join the waitlist and get <strong style={{ color: "#c49aaa" }}>20% off</strong> your first order.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f5f0e8", padding: "14px 18px", fontFamily: "DM Sans, sans-serif",
                  fontSize: 14, outline: "none", borderRadius: 4
                }}
              />
              <button
                onClick={() => { if (email.includes("@")) { setSubmitted(true); setShowModal(false); } }}
                style={{
                  background: "#8B5E6E", color: "white", border: "none", padding: "14px",
                  fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 500,
                  letterSpacing: "1.5px", textTransform: "uppercase", cursor: "pointer",
                  borderRadius: 4
                }}
              >
                Reserve My Spot
              </button>
            </div>
            <div style={{ fontSize: 11, color: "#666", marginTop: 16 }}>No spam. No credit card. Just first access.</div>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav>
        <div className="nav-logo">Her<span>Era</span></div>
        <ul className="nav-links">
          <li><a href="#">Product</a></li>
          <li><a href="#">How It Works</a></li>
          <li><a href="#">Sizing</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <button className="nav-cta" onClick={handleBuyNow}>Join Waitlist</button>
      </nav>

      {/* Hero */}
      <section className="hero" style={{ paddingTop: 72 }}>
        <div className="hero-left">
          <div className="badge">Launching Soon · India's First</div>
          <div className="hero-eyebrow">Detachable Coverup Leggings</div>
          <h1 className="hero-title">
            Move Without<br />
            <em>Holding Back.</em>
          </h1>
          <p className="hero-subtitle">Coverage on your terms. Confidence every rep.</p>
          <p className="hero-desc">
            Gym leggings with a snap-on cover-up panel — attach it for squats and hip thrusts,
            detach it in seconds when you don't need it. Built for Indian women who refuse to
            let insecurity limit their workout.
          </p>

          <div className="colors-row">
            {COLORS.map((c, i) => (
              <div
                key={i}
                className={`color-swatch${activeColor === i ? " active" : ""}`}
                style={{ background: c.hex }}
                onClick={() => setActiveColor(i)}
                title={c.name}
              />
            ))}
          </div>

          <div className="price-row">
            <span className="price">₹1,799</span>
            <span className="price-og">₹2,499</span>
            <span className="price-tag">Founder Price</span>
          </div>

          <div className="cta-group">
            <button className="btn-primary" onClick={handleBuyNow}>
              Reserve Yours — First 100 Only
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('how').scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </button>
          </div>

          <div className="trust-row">
            <div className="trust-item"><span className="trust-icon">🔒</span> No payment now</div>
            <div className="trust-item"><span className="trust-icon">✦</span> Free shipping</div>
            <div className="trust-item"><span className="trust-icon">↩</span> Easy returns</div>
          </div>
        </div>

        <div className="hero-right">
          <div className="product-visual">
            <div className="floating-tag tag-top">
              <div className="tag-label">Cover Up</div>
              <div className="tag-value">Snaps On/Off ⚡</div>
            </div>
            <div className="floating-tag tag-bottom">
              <div className="tag-label">Fabric</div>
              <div className="tag-value">Squat-Proof ✓</div>
            </div>
            <div className="product-mockup">
              <div className="legging-shape" style={{ background: `linear-gradient(160deg, ${COLORS[activeColor].hex}cc, ${COLORS[activeColor].hex}66, #1a0a10)` }}>
                <div className="skirt-panel">
                  <div className="snap-dot" />
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase" }}>
                    Coverup Panel
                  </div>
                  <div className="snap-dot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-header">
          <div className="section-label">Why HerEra</div>
          <h2 className="section-title">Engineered for how<br />Indian women actually move</h2>
        </div>
        <div className="features-grid">
          {[
            { icon: "⚡", title: "Snap On. Off.", desc: "Magnetic-grade snaps that stay locked during your heaviest set. Detach in under 3 seconds between exercises." },
            { icon: "🛡", title: "Squat-Proof", desc: "4-way stretch fabric passes the bend-over test. Zero transparency at any angle. Tested across 200+ squat variations." },
            { icon: "📐", title: "Indian Fit", desc: "Proportioned for Indian body types — high-rise waistband, correct inseam lengths, wider hip allowance. Not a Western size converted." },
            { icon: "🌬", title: "Breathable Panel", desc: "Laser-cut perforations on the cover-up panel ensure zero heat buildup. Lightweight enough to forget it's there." },
          ].map((f, i) => (
            <div className="feature-card" key={i}>
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how">
        <div style={{ textAlign: "center" }}>
          <div className="section-label">The Mechanism</div>
          <h2 className="section-title">Four steps. Total freedom.</h2>
        </div>
        <div className="steps">
          {[
            { n: "1", title: "Wear your leggings", desc: "Put on like any high-rise legging. The panel lies flat against the waistband — invisible." },
            { n: "2", title: "Snap on the panel", desc: "Before squats or hip thrusts — snap the cover-up into place in under 3 seconds." },
            { n: "3", title: "Train with confidence", desc: "Move freely. The panel stays put through every rep, every angle." },
            { n: "4", title: "Detach instantly", desc: "Done with that exercise? Unsnap and tuck it back. Nobody notices a thing." },
          ].map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">{s.n}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="social-proof">
        <div className="section-label">Early Feedback</div>
        <h2 className="section-title">From women who wore<br />the prototype</h2>
        <div className="testimonials">
          {[
            { text: "I've been avoiding hip thrusts for two years. I did 5 sets today without once checking if anyone was watching.", author: "Priya S., 28", loc: "Mumbai" },
            { text: "The snap is actually strong. I was doing lunges and it didn't shift even once. I forgot it was there.", author: "Anika R., 24", loc: "Bangalore" },
            { text: "Finally a gym brand that gets that we don't all have the same body or the same confidence level on every day.", author: "Shreya M., 32", loc: "Delhi" },
          ].map((t, i) => (
            <div className="testimonial" key={i}>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.author}</span> · {t.loc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="waitlist-section">
        <div className="section-label">Early Access</div>
        <h2 className="waitlist-title">
          First 100 women get<br />
          <em style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "#c49aaa" }}>20% off. Forever.</em>
        </h2>
        <p className="waitlist-sub">No credit card. No commitment. Just first access when we launch.</p>

        {submitted ? (
          <div className="success-state">
            <div className="success-title">You're on the list. ✦</div>
            <p className="success-sub">We'll email you the moment we go live — with your founder discount locked in.</p>
          </div>
        ) : (
          <>
            <div className="waitlist-form">
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleWaitlist()}
              />
              <button className="btn-join" onClick={handleWaitlist}>Reserve Spot</button>
            </div>
            <div className="waitlist-note">Join 340+ women already on the waitlist</div>
            <div className="waitlist-count">
              <span style={{ width: 8, height: 8, background: "#8B5E6E", borderRadius: "50%", display: "inline-block" }} />
              Spots filling fast · Founder pricing ends at 100 signups
            </div>
          </>
        )}
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">HerEra.</div>
        <div className="footer-note">© 2026 HerEra · Built for Indian women · Made in India</div>
      </footer>
    </>
  );
}
