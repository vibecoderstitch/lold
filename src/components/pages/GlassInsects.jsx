import React, { useState } from 'react';
import { Layers, Compass, HelpCircle, ArrowUpRight } from 'lucide-react';
import descartesPortraitImg from '../../assets/renedecart.jpg';
import humePortraitImg from '../../assets/David_Hume_Ramsay.jpg';
import delamethodeImg from '../../assets/delamethode.jpg';

export default function GlassInsects() {
  const [layoutMode, setLayoutMode] = useState('canvas'); // 'canvas' | 'wheel' | 'staircase'
  const [selectedQuote, setSelectedQuote] = useState(0);

  const philosophyQuotes = [
    { id: 'I', text: 'If I am being deceived by an evil demon, then I must exist. In order to think and be deceived, there must be a thinking subject to experience it. This is the first indubitable truth of rationalism.', eng: 'Cogito, ergo sum. (I think, therefore I am.)' },
    { id: 'II', text: 'To find a firm and lasting foundation in the sciences, we must once in our lives throw down all our received opinions and start rebuilding from the bedrock foundations.', eng: 'De omnibus dubitandum. (Everything must be doubted.)' },
    { id: 'III', text: 'A wise man proportions his belief to the evidence. Custom is the great guide of human life, not rational proof. We never see cause itself, only constant conjunction.', eng: 'A wise man proportions his belief to the evidence.' },
    { id: 'IV', text: 'Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve and obey them.', eng: 'Reason is the slave of the passions.' }
  ];

  return (
    <div style={{ position: 'relative', zIndex: 1, padding: '1rem' }} className="fade-in">
      
      {/* Top Header & Variant Toggle bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        borderBottom: '2px solid var(--border-color)',
        paddingBottom: '1rem'
      }}>
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--secondary-color)', fontSize: '0.95rem' }}>
            CHAPTER_02 // MODERNITY
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, transform: 'skewX(var(--tilt-angle))' }}>
            Modernity: Descartes & Hume
          </h2>
        </div>
        
        {/* Toggle Controls (Expand Capabilities) */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Layers size={16} style={{ color: 'var(--secondary-color)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginRight: '0.5rem' }}>STYLING:</span>
          
          <button 
            className={`custom-btn ${layoutMode === 'canvas' ? 'active' : ''}`}
            onClick={() => setLayoutMode('canvas')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '180px' }}
          >
            <span>Empirical Canvas</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'wheel' ? 'active' : ''}`}
            onClick={() => setLayoutMode('wheel')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '180px' }}
          >
            <span>Doubt Wheel</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'staircase' ? 'active' : ''}`}
            onClick={() => setLayoutMode('staircase')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '180px' }}
          >
            <span>Rational Steps</span>
          </button>
        </div>
      </div>

      {/* RENDER LAYOUT MODES */}
      {layoutMode === 'canvas' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '4.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Painterly texts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="painterly-block" style={{ padding: '2.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-color)', fontSize: '1rem', display: 'block', marginBottom: '0.5rem' }}>
                // THE BLANK SLATE
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>SENSORY IMPRESSIONS AND RADICAL DOUBT</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', fontFamily: 'var(--font-serif)' }}>
                "De omnibus dubitandum. Doubt everything." René Descartes began his search for absolute truth by sweeping away all received wisdom, questioning if even his own body and the physical world were illusions. In contrast, David Hume argued that all ideas are derived from sensory impressions, mapping the limits of human reason to empirical observations of cause and effect.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ borderLeft: '4px solid var(--secondary-color)', padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>THE EVIL DEMON</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                  Descartes proposed a thought experiment: what if an all-powerful, malicious demon is deceiving our senses about space, figures, and sounds?
                </p>
              </div>

              <div className="glass-panel" style={{ borderLeft: '4px solid var(--primary-color)', padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary-color)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>HUME'S FORK</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                  Hume divided knowledge into two: Relations of Ideas (certain math/logic truths) and Matters of Fact (truths based on experience).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Grand Dossier Panel */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100%'
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--secondary-color)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              // COGNITIVE_ARCHETYPES // HISTORICAL_PORTRAITS
            </span>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              alignItems: 'stretch'
            }}>
              {/* Descartes Dossier Card */}
              <div style={{
                border: '3px solid var(--secondary-color)',
                background: 'rgba(5, 8, 17, 0.9)',
                boxShadow: '6px 6px 0px var(--border-color)',
                padding: '1rem',
                transform: 'skewX(var(--tilt-angle))',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <img 
                    src={descartesPortraitImg} 
                    alt="René Descartes" 
                    style={{ 
                      width: '100%', 
                      height: '240px', 
                      objectFit: 'cover', 
                      border: '2px solid var(--secondary-color)',
                      boxShadow: '3px 3px 0 var(--border-color)'
                    }} 
                  />
                  <div style={{ marginTop: '0.8rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)' }}>
                      R. DESCARTES
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#fff', opacity: 0.7, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      FOUNDATION: COGITO
                    </span>
                  </div>
                </div>
              </div>

              {/* Hume Dossier Card */}
              <div style={{
                border: '3px solid var(--primary-color)',
                background: 'rgba(5, 8, 17, 0.9)',
                boxShadow: '6px 6px 0px var(--border-color)',
                padding: '1rem',
                transform: 'skewX(var(--tilt-angle))',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <img 
                    src={humePortraitImg} 
                    alt="David Hume" 
                    style={{ 
                      width: '100%', 
                      height: '240px', 
                      objectFit: 'cover', 
                      border: '2px solid var(--primary-color)',
                      boxShadow: '3px 3px 0 var(--border-color)'
                    }} 
                  />
                  <div style={{ marginTop: '0.8rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--primary-color)', fontFamily: 'var(--font-mono)' }}>
                      DAVID HUME
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#fff', opacity: 0.7, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      FOUNDATION: SENSES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {layoutMode === 'wheel' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2.5rem',
          alignItems: 'center',
          minHeight: '400px'
        }} className="fade-in">
          
          {/* Left Column: Interactive Wheel of Quotes */}
          <div>
            <span style={{ color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)', fontSize: '1rem', display: 'block', marginBottom: '1rem' }}>
              // INTERACTIVE_DOUBT_WHEEL
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {philosophyQuotes.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedQuote(idx)}
                  style={{
                    textAlign: 'left',
                    background: selectedQuote === idx ? 'rgba(0, 238, 252, 0.1)' : 'transparent',
                    border: '1px solid',
                    borderColor: selectedQuote === idx ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)',
                    color: selectedQuote === idx ? '#fff' : 'var(--sub-text-color)',
                    padding: '1rem',
                    transform: 'skewX(10deg)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ transform: 'skewX(-10deg)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--secondary-color)', display: 'block' }}>
                      SECTION {q.id}
                    </span>
                    <strong style={{ fontSize: '1.1rem', display: 'block', marginTop: '0.2rem' }}>
                      {q.eng.substring(0, 45)}...
                    </strong>
                  </div>
                  <ArrowUpRight size={18} style={{ opacity: selectedQuote === idx ? 1 : 0.3, color: 'var(--primary-color)' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Center Glass Shard Reflection */}
          <div className="glass-panel" style={{
            position: 'relative',
            padding: '2rem',
            border: '2px solid var(--secondary-color)',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.15)',
            minHeight: '340px',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            <img 
              src={delamethodeImg} 
              alt="Discours de la méthode" 
              style={{ width: '100px', height: '155px', objectFit: 'cover', border: '1.5px solid var(--border-color)', boxShadow: '4px 4px 0 var(--border-color)', flexShrink: 0 }}
            />
            <div style={{ flexGrow: 1 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--primary-color)' }}>
                // REFLECTION : RESOLVED_MEDITATION
              </span>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                lineHeight: '1.5',
                margin: '0.8rem 0',
                color: '#fff'
              }}>
                "{philosophyQuotes[selectedQuote].text}"
              </p>
              <span style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)' }}>
                COGNITO ERGO SUM // 1637
              </span>
            </div>
          </div>
        </div>
      )}

      {layoutMode === 'staircase' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          minHeight: '400px',
          padding: '2rem 0',
          position: 'relative'
        }} className="fade-in">
          
          {/* Aesthetic staircase offset narrative cards */}
          {[
            { step: '01', title: 'SENSES DECEIVE', text: 'Our senses frequently deceive us, and it is prudent never to trust completely those who have once deceived us. We must doubt the physical world first.' },
            { step: '02', title: 'THE COGITO', text: 'Even if I doubt, even if I dream, I am thinking. I doubt my own physical body, yet I cannot doubt the existence of my doubting mind. Cogito, ergo sum.' },
            { step: '03', title: 'CUSTOM AND HABIT', text: 'Hume reminds us that we never see "cause" itself, only constant conjunction. Our belief in natural laws is a product of custom and habit, not rational certainty.' }
          ].map((card, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                width: '75%',
                alignSelf: index === 0 ? 'flex-start' : index === 1 ? 'center' : 'flex-end',
                padding: '2rem',
                borderLeft: '4px solid var(--secondary-color)',
                boxShadow: '8px 8px 0px rgba(0, 238, 252, 0.05)',
                transform: 'skewX(var(--tilt-angle))'
              }}
            >
              <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))', display: 'flex', gap: '1.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: 'var(--primary-color)',
                  lineHeight: 1
                }}>
                  {card.step}
                </span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 800 }}>{card.title}</h4>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', lineHeight: '1.5' }}>
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating background quote noise */}
      <div className="floating-quote-bg" style={{ bottom: '20%', left: '5%' }}>
        Cogito, ergo sum.
      </div>
      
      <style>{`
        @keyframes descartes-struggle {
          0%, 100% { transform: skewX(12deg) scale(1.05); }
          50% { transform: skewX(12deg) scale(1.08) translate(-4px, -4px); }
        }
      `}</style>
    </div>
  );
}
