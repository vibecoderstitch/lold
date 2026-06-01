import React, { useState } from 'react';
import { BookOpen, Calendar, Layers } from 'lucide-react';
import platoCaveImg from '../../assets/platocave.jpg';
import platoPortraitImg from '../../assets/platon-1.jpg';
import aristotelPortraitImg from '../../assets/aristotel.png';
import platoBackgroundImg from '../../assets/backgroundforplato.jpg';

export default function RabbitHole() {
  const [layoutMode, setLayoutMode] = useState('bento'); // 'bento' | 'novel' | 'philosophy'

  const philosophyLogs = [
    { date: 'Book I', text: 'Socrates discusses the nature of justice with Thrasymachus. Is justice merely the interest of the stronger? We must search deeper for a universal truth.', tag: 'Justice' },
    { date: 'Book VII', text: 'The Allegory of the Cave. Imagine prisoners chained in an underground cave, seeing only shadows of puppets cast by fire on the wall. To them, the shadows are reality.', tag: 'Knowledge' },
    { date: 'Book X', text: 'The myth of Er. A soldier dies in battle but awakens on his funeral pyre to recount his journey through the afterlife and the cosmic choice of new souls.', tag: 'Soul' }
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
            CHAPTER_01 // ANTIQUITY
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, transform: 'skewX(var(--tilt-angle))' }}>
            Antiquity: Plato & Aristotle
          </h2>
        </div>
        
        {/* Toggle Controls (Expand Capabilities) */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Layers size={16} style={{ color: 'var(--secondary-color)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginRight: '0.5rem' }}>Layout:</span>
          
          <button 
            className={`custom-btn ${layoutMode === 'bento' ? 'active' : ''}`}
            onClick={() => setLayoutMode('bento')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>Bento Logs</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'novel' ? 'active' : ''}`}
            onClick={() => setLayoutMode('novel')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>Dialogue HUD</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'philosophy' ? 'active' : ''}`}
            onClick={() => setLayoutMode('philosophy')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>Metaphysics</span>
          </button>
        </div>
      </div>

      {/* RENDER LAYOUT MODES */}
      {layoutMode === 'bento' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Original Bento Grid untouched */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '1rem'
          }}>
            {/* Bento Cell 1: Narrative Intro + Rooftop Artwork */}
            <div className="bento-cell" style={{ gridColumn: 'span 2', minHeight: '260px', position: 'relative', overflow: 'hidden' }}>
              {/* Background CG overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '45%',
                height: '100%',
                backgroundImage: `url(${platoCaveImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.85,
                borderLeft: '4px solid var(--border-color)',
                zIndex: 0
              }} />
              <div style={{ position: 'relative', zIndex: 1, width: '50%', paddingRight: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                  // THE SHADOW AND THE FORM
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', fontFamily: 'var(--font-serif)' }}>
                  "All men by nature desire to know." In this chapter, we explore the origins of philosophy. From Plato's world of perfect transcendental Forms to Aristotle's empirical analysis of substance and cause, we trace how early thinkers sought to define the ultimate limits of reality and human virtue.
                </p>
              </div>
            </div>

            {/* Bento Cell 2: Diary entries */}
            <div className="bento-cell" style={{ gridRow: 'span 2' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} /> Dialectical Logs
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {philosophyLogs.map((log, index) => (
                  <div key={index} style={{
                    padding: '1rem',
                    border: '1px solid var(--border-color)',
                    position: 'relative'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 'bold' }}>{log.date}</span>
                      <span style={{
                        fontSize: '0.85rem',
                        background: 'var(--secondary-color)',
                        color: '#fff',
                        padding: '2px 6px',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-mono)'
                      }}>{log.tag}</span>
                    </div>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.4' }}>{log.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Cell 3: Aesthetic Quote Shard */}
            <div className="bento-cell" style={{ background: 'var(--primary-color)', color: 'var(--bg-color)', justifyContent: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontStyle: 'italic', textAlign: 'center', lineHeight: '1.3' }}>
                "Virtue is the golden mean between two extremes, one of excess and the other of deficiency."
              </h4>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', textAlign: 'center', marginTop: '0.8rem', opacity: 0.7 }}>
                - Aristotle, Nicomachean Ethics
              </span>
            </div>

            {/* Bento Cell 4: Character Cards preview */}
            <div className="bento-cell" style={{ gridColumn: 'span 2' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>// CORE SCHOOLS</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {['The Academy (Plato)', 'The Lyceum (Aristotle)', 'The Stoa (Zeno)'].map((name, i) => (
                  <div key={i} style={{
                    border: '2px solid var(--border-color)',
                    padding: '1rem 0.8rem',
                    textAlign: 'center',
                    transform: 'skewX(-5deg)',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', display: 'block', fontFamily: 'var(--font-mono)', marginBottom: '0.3rem' }}>01_SCHOOL_{i+1}</span>
                    {i === 0 && (
                      <img 
                        src={platoPortraitImg} 
                        alt="Plato Portrait" 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--primary-color)', margin: '0.5rem 0', boxShadow: '2px 2px 0 var(--border-color)' }}
                      />
                    )}
                    {i === 1 && (
                      <img 
                        src={aristotelPortraitImg} 
                        alt="Aristotle Portrait" 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--primary-color)', margin: '0.5rem 0', boxShadow: '2px 2px 0 var(--border-color)' }}
                      />
                    )}
                    {i === 2 && (
                      <div style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', border: '2px dashed var(--border-color)', borderRadius: '50%', margin: '0.5rem 0' }}>🏛️</div>
                    )}
                    <strong style={{ fontSize: '1.1rem', display: 'block', margin: '0.3rem 0' }}>{name}</strong>
                    <span style={{ fontSize: '0.95rem', opacity: 0.8 }}>Athens Core</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      {layoutMode === 'novel' && (
        <div style={{
          minHeight: '520px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'relative',
          padding: '1.5rem',
          border: '2px dashed var(--border-color)',
          backgroundImage: `url(${platoBackgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.4)'
        }}>
          {/* Animated Sky Background Title */}
          <div style={{
            position: 'absolute',
            top: '8%',
            left: '5%',
            fontSize: '4.5rem',
            fontWeight: 900,
            opacity: 0.15,
            lineHeight: 1,
            pointerEvents: 'none',
            color: '#fff',
            fontFamily: 'var(--font-headline)'
          }}>
            THE SHADOW &<br />THE FORM
          </div>

          {/* High-Fidelity Character Portrait for Plato */}
          <div style={{
            position: 'absolute',
            bottom: '160px',
            left: '10%',
            height: '290px',
            width: '230px',
            zIndex: 1,
            border: '3px solid var(--primary-color)',
            background: 'rgba(5, 8, 17, 0.9)',
            boxShadow: '6px 6px 0px var(--secondary-color)',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
            transform: 'skewX(var(--tilt-angle)) scale(1.02)'
          }}>
            <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src={platoPortraitImg} 
                alt="Plato Portrait" 
                style={{ width: '100%', height: '200px', objectFit: 'cover', border: '1.5px solid var(--border-color)', marginBottom: '8px' }}
              />
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--primary-color)' }}>PLATO</strong>
                <span style={{ fontSize: '0.75rem', color: '#ffffff', opacity: 0.8 }}>FOUNDER // ACADEMY</span>
              </div>
            </div>
          </div>

          {/* Classic Visual Novel Textbox in Sweet Dreams style */}
          <div className="glass-panel" style={{
            width: '100%',
            position: 'relative',
            marginTop: 'auto',
            padding: '1.8rem',
            zIndex: 2,
            background: 'rgba(255,255,255,0.92)'
          }}>
            {/* Speaker Tag */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '30px',
              background: 'var(--secondary-color)',
              color: '#fff',
              padding: '4px 18px',
              fontWeight: 900,
              fontSize: '1.05rem',
              boxShadow: '4px 4px 0 var(--border-color)',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase'
            }}>
              Plato (The Republic)
            </div>
            
            {/* Dialogue text */}
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              lineHeight: '1.6',
              marginBottom: '1rem',
              color: 'var(--text-color)'
            }}>
              "Consider, Socrates... if one of these prisoners were released and forced to look at the light itself, would his eyes not ache? Would he not flee back to the shadows he can easily discern, believing them to be clearer than the light?"
            </p>
            
            {/* Navigation indicator */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              color: 'var(--secondary-color)'
            }}>
              <span>CLICK TO ADVANCE</span>
              <BookOpen size={14} className="bounce-anim" />
            </div>
          </div>
        </div>
      )}

      {layoutMode === 'philosophy' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2.5rem',
          alignItems: 'center',
          minHeight: '450px'
        }}>
          {/* Left Column: Interactive quote cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)' }}>
              // METAPHYSICAL TRUTHS
            </h3>
            
            {[
              { id: 'I', german: 'Substantia est compositum ex materia et forma.', english: 'Substance is a composite of prime matter and substantial form (Hylomorphism).' },
              { id: 'II', german: 'Causae sunt quattuor: materialis, formalis, efficiens, finalis.', english: 'To know a thing is to know its cause: Material, Formal, Efficient, and Final.' },
              { id: 'III', german: 'Primum movens immobile.', english: 'There must be an eternal, unmoved source of all motion and change in the cosmos.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                border: '2px solid var(--border-color)',
                padding: '1.8rem',
                transform: 'skewX(-8deg)',
                background: 'rgba(255,255,255,0.03)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} className="philosophy-card">
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-color)', fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>
                  SECTION {item.id}
                </span>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.3rem', marginBottom: '0.6rem', lineHeight: '1.4' }}>
                  "{item.german}"
                </p>
                <p style={{ fontSize: '1.1rem', opacity: 0.85, lineHeight: '1.4' }}>
                  "{item.english}"
                </p>
              </div>
            ))}
          </div>
 
          {/* Right Column: Concept Explanation */}
          <div className="glass-panel" style={{ padding: '3.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', color: 'var(--primary-color)', fontFamily: 'var(--font-headline)' }}>THE ALLEGORY & TRUTH</h3>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontFamily: 'var(--font-serif)' }}>
              In classical thought, philosophy is not merely a theoretical game but a release from visual cages. To step out of the cave is to seek the transcendental Forms that govern the physical world. Virtue and reason are the ultimate guides to living well.
            </p>
          </div>
        </div>
      )}

      {/* Floating background noise text */}
      <div className="floating-quote-bg" style={{ bottom: '10%', right: '-5%' }}>
        All men by nature desire to know.
      </div>
      
      <style>{`
        .philosophy-card:hover {
          background: rgba(255, 68, 180, 0.05) !important;
          border-color: var(--secondary-color) !important;
          transform: skewX(-8deg) translate(-5px, -5px) !important;
          box-shadow: 6px 6px 0px var(--border-color);
        }
        .bounce-anim {
          animation: bounce 1.2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .plato-3d-showcase-container {
          animation: plato-3d-float 5s infinite ease-in-out;
        }
        @keyframes plato-3d-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
