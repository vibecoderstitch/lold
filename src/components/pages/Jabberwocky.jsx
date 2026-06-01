import React, { useState } from 'react';
import { Layers, Shield, Compass, Brain, Terminal, Activity } from 'lucide-react';
import kantSublimeImg from '../../assets/kant_starry_sublime.png';
import kantPortraitImg from '../../assets/kant.jpg';
import hegelPortraitImg from '../../assets/Hegel_by_Schlesinger.jpg';
import critiqueofpureImg from '../../assets/critiqueofpurereason.jpg';

export default function Jabberwocky() {
  const [layoutMode, setLayoutMode] = useState('collapse'); // 'collapse' | 'hud' | 'ladder'
  const [activeShard, setActiveShard] = useState(0);

  const philosophyShards = [
    { speaker: 'Immanuel Kant', text: 'Thoughts without content are empty, intuitions without concepts are blind. Space and time are not independent things; they are the human modes of sensory perception.' },
    { speaker: 'G. W. F. Hegel', text: 'The history of the world is none other than the progress of the consciousness of freedom. The rational is real, and the real is rational; Spirit climbs through Thesis and Antithesis to Synthesis.' },
    { speaker: 'Immanuel Kant', text: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law. The moral law within is as certain as the starry sky above.' }
  ];

  // Falling star/feather particles configuration
  const starParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${(i * 7) % 100}%`,
    delay: `${(i * 1.5) % 12}s`,
    duration: `${6 + (i % 6)}s`,
    isDark: i % 2 === 0,
    size: 5 + (i % 8)
  }));

  return (
    <div style={{ position: 'relative', zIndex: 1, padding: '1rem' }} className="fade-in">
      
      {/* Falling Stars Background Layer */}
      <div className="feather-layer">
        {starParticles.map(f => (
          <div
            key={f.id}
            className={`feather-particle ${f.isDark ? 'dark' : ''}`}
            style={{
              left: f.left,
              animationDelay: f.delay,
              animationDuration: f.duration,
              transform: `scale(${f.size / 10})`
            }}
          />
        ))}
      </div>

      {/* Header Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        borderBottom: '2px solid var(--border-color)',
        paddingBottom: '1rem',
        position: 'relative',
        zIndex: 5
      }}>
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--secondary-color)', fontSize: '0.95rem', letterSpacing: '0.15em' }}>
            CHAPTER_03 // IDEALISM
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, transform: 'skewX(var(--tilt-angle))', color: 'var(--text-color)' }}>
            Idealism: Kant & Hegel
          </h2>
        </div>
        
        {/* Toggle Controls */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Layers size={16} style={{ color: 'var(--secondary-color)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginRight: '0.5rem', opacity: 0.8 }}>LAYOUT:</span>
          
          <button 
            className={`custom-btn ${layoutMode === 'collapse' ? 'active' : ''}`}
            onClick={() => setLayoutMode('collapse')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>Starry Shards</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'hud' ? 'active' : ''}`}
            onClick={() => setLayoutMode('hud')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>Dialectic HUD</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'ladder' ? 'active' : ''}`}
            onClick={() => setLayoutMode('ladder')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>Categories</span>
          </button>
        </div>
      </div>

      {/* RENDER MODES */}
      {layoutMode === 'collapse' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '2.5rem',
          position: 'relative',
          zIndex: 5
        }}>
          {/* ==================== LEFT WING: KANT SIDE ==================== */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'stretch',
            flexWrap: 'wrap'
          }}>
            {/* Panel A: Immanuel Kant Presentation Card */}
            <div className="glass-panel" style={{
              flex: '1 1 280px',
              border: '3px solid var(--primary-color)',
              boxShadow: '8px 8px 0px var(--secondary-color)',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              minHeight: '480px'
            }}>
              {/* Huge Portrait */}
              <div style={{
                width: '100%',
                height: '280px',
                border: '2px solid var(--primary-color)',
                boxShadow: '3px 3px 0 var(--border-color)',
                transform: 'skewX(-4deg)',
                overflow: 'hidden',
                background: '#000'
              }}>
                <img 
                  src={kantPortraitImg} 
                  alt="Immanuel Kant" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'skewX(4deg) scale(1.05)'
                  }}
                />
              </div>

              {/* Text Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-color)' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--secondary-color)',
                  letterSpacing: '0.12em',
                  fontWeight: 'bold'
                }}>
                  // I. KANT // CRITICAL_PHILOSOPHY
                </span>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  lineHeight: '1.45',
                  margin: 0,
                  opacity: 0.95
                }}>
                  Immanuel Kant (1724–1804). Transcendental Idealism. Critiqued the limits of human reason, arguing that space and time are subjective forms of human intuition.
                </p>
              </div>
            </div>

            {/* Panel B: Idealist Shards Selector Menu (To the right of Kant) */}
            <div className="glass-panel" style={{
              width: '240px',
              flexShrink: 0,
              flexGrow: 1,
              border: '2px solid var(--border-color)',
              borderTop: '6px solid var(--primary-color)',
              boxShadow: '6px 6px 0px var(--border-color)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minHeight: '480px'
            }}>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-color)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', margin: 0 }}>
                <Terminal size={14} /> IDEALIST SHARDS
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flexGrow: 1, justifyContent: 'center' }}>
                {philosophyShards.map((sh, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveShard(idx)}
                    className={`staircase-item ${activeShard === idx ? 'active' : ''}`}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      border: '1px solid var(--border-color)',
                      background: activeShard === idx ? 'var(--primary-color)' : 'rgba(255,255,255,0.02)',
                      color: activeShard === idx ? 'var(--bg-color)' : 'var(--text-color)',
                      cursor: 'pointer',
                      transform: 'skewX(-4deg)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ transform: 'skewX(4deg)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.2rem' }}>
                        <span>/ 0{idx+1}</span>
                        <span>{sh.speaker.split(' ').pop().toUpperCase()}</span>
                      </div>
                      <strong style={{ display: 'block', fontSize: '0.9rem', lineHeight: '1.2' }}>
                        {sh.text.substring(0, 30)}...
                      </strong>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ==================== RIGHT WING: HEGEL SIDE ==================== */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'stretch',
            flexWrap: 'wrap'
          }}>
            {/* Panel C: G. W. F. Hegel Presentation Card */}
            <div className="glass-panel" style={{
              flex: '1 1 280px',
              border: '3px solid var(--primary-color)',
              boxShadow: '8px 8px 0px var(--secondary-color)',
              padding: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              minHeight: '480px'
            }}>
              {/* Huge Portrait */}
              <div style={{
                width: '100%',
                height: '280px',
                border: '2px solid var(--primary-color)',
                boxShadow: '3px 3px 0 var(--border-color)',
                transform: 'skewX(-4deg)',
                overflow: 'hidden',
                background: '#000'
              }}>
                <img 
                  src={hegelPortraitImg} 
                  alt="G. W. F. Hegel" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'skewX(4deg) scale(1.05)'
                  }}
                />
              </div>

              {/* Text Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-color)' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--secondary-color)',
                  letterSpacing: '0.12em',
                  fontWeight: 'bold'
                }}>
                  // G. W. F. HEGEL // ABSOLUTE_IDEALISM
                </span>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  lineHeight: '1.45',
                  margin: 0,
                  opacity: 0.95
                }}>
                  Georg Wilhelm Friedrich Hegel (1770–1831). Absolute Idealism. Reality is a dynamic historicized process of the Spirit (Geist) unfolding through thesis and synthesis.
                </p>
              </div>
            </div>

            {/* Panel D: Speech Recovery Monologue Block (To the right of Hegel) */}
            <div className="glass-panel" style={{
              flex: '1.2 1 300px',
              borderLeft: '5px solid var(--secondary-color)',
              borderTop: '2px solid var(--border-color)',
              borderRight: '2px solid var(--border-color)',
              borderBottom: '2px solid var(--border-color)',
              boxShadow: '6px 6px 0px var(--border-color)',
              padding: '2.2rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '480px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Semi-transparent book cover background watermark */}
              {(activeShard === 0 || activeShard === 2) && (
                <img 
                  src={critiqueofpureImg} 
                  alt="Critique of Pure Reason Watermark" 
                  style={{
                    position: 'absolute',
                    right: '6%',
                    bottom: '5%',
                    height: '80%',
                    opacity: 0.12,
                    pointerEvents: 'none',
                    zIndex: 0,
                    objectFit: 'contain',
                    filter: 'grayscale(1) contrast(1.2)'
                  }}
                />
              )}

              <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                  <Compass size={18} className="animate-spin" style={{ color: 'var(--secondary-color)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                    SPEECH_RECOVERY: {philosophyShards[activeShard].speaker.toUpperCase()}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  lineHeight: '1.55',
                  fontStyle: 'italic',
                  color: 'var(--text-color)',
                  margin: '0.8rem 0',
                  borderLeft: '3px solid var(--primary-color)',
                  paddingLeft: '1rem',
                  maxWidth: '90%'
                }}>
                  "{philosophyShards[activeShard].text}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', opacity: 0.6, marginTop: '0.8rem' }}>
                  <span>ENCRYPTION: LEVEL_9</span>
                  <span>STATUS: SUCCESSFUL_LOG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {layoutMode === 'hud' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '2.5rem',
          position: 'relative',
          zIndex: 5,
          alignItems: 'stretch'
        }} className="fade-in">
          {/* Tactical Diagnostic Stats box */}
          <div className="glass-panel" style={{ 
            border: '2px solid var(--primary-color)',
            borderLeft: '8px solid var(--primary-color)',
            boxShadow: '6px 6px 0px var(--secondary-color)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                <Shield size={20} style={{ color: 'var(--primary-color)' }} />
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>DIALECTICAL DEVELOPMENT</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.95rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span>Reason's Universal Synthesis:</span>
                    <strong style={{ color: 'var(--primary-color)' }}>88% [SYNTHESIS]</strong>
                  </div>
                  <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--primary-color)' }}>
                    <div style={{ width: '88%', height: '100%', background: 'var(--primary-color)', boxShadow: '0 0 10px var(--primary-color)' }} />
                  </div>
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span>Absolute Spirit (Geist) progression:</span>
                    <strong style={{ color: 'var(--secondary-color)' }}>45% [DIALECTIC]</strong>
                  </div>
                  <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--secondary-color)' }}>
                    <div style={{ width: '45%', height: '100%', background: 'var(--secondary-color)', boxShadow: '0 0 10px var(--secondary-color)' }} />
                  </div>
                </div>
 
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span>Contradiction resolution:</span>
                    <strong style={{ color: '#ff3b30' }}>100% [RESOLVED]</strong>
                  </div>
                  <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid #ff3b30' }}>
                    <div style={{ width: '100%', height: '100%', background: '#ff3b30' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Chapter Narrative Outline */}
          <div className="glass-panel" style={{ 
            border: '2px solid var(--border-color)',
            boxShadow: '8px 8px 0px var(--primary-color)',
            padding: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
                <Brain size={22} style={{ color: 'var(--secondary-color)' }} />
                <h3 style={{ color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)', fontSize: '1.3rem' }}>
                  // TRANSCENDENTAL APPERCEPTION
                </h3>
              </div>
              <p style={{ 
                fontSize: '1.35rem', 
                lineHeight: '1.7', 
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                borderLeft: '4px solid var(--secondary-color)',
                paddingLeft: '1.5rem',
                margin: '1.5rem 0',
                color: 'var(--text-color)'
              }}>
                "Two things fill the mind with ever new and increasing admiration and awe, the more often and steadily we reflect upon them: the starry heavens above me and the moral law within me. Scepticism yields to critique, and critique constructs the absolute limits of systematic thought."
              </p>
              <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2rem' }}>
                <span className="snip-btn" style={{ padding: '0.6rem 1.6rem', fontSize: '0.9rem' }}>
                  SYNTHESIZE REASON
                </span>
                <span className="snip-btn" style={{ padding: '0.6rem 1.6rem', fontSize: '0.9rem', borderColor: 'var(--secondary-color)' }}>
                  RESOLVE DIALECTIC
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {layoutMode === 'ladder' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 5
        }} className="fade-in">
          <span style={{ color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textAlign: 'center', display: 'block', letterSpacing: '0.2em', fontWeight: 'bold' }}>
            // CRITIQUE OF THE UNDERSTANDING
          </span>
          {[
            { id: 'QUANTITY', text: 'Unity, Plurality, Totality. We synthesize individual sensations into systematic concepts.' },
            { id: 'QUALITY', text: 'Reality, Negation, Limitation. We define what is, what is not, and the limits that contain them.' },
            { id: 'RELATION', text: 'Inherence and Subsistence, Causality and Dependence, Community. The structures of systematic connections.' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.5rem 2rem',
                borderLeft: '5px solid var(--primary-color)',
                boxShadow: activeShard === idx ? '6px 6px 0px var(--secondary-color)' : '6px 6px 0px var(--bg-color)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveShard(idx)}
            >
              <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  color: 'var(--secondary-color)', 
                  fontWeight: 'bold', 
                  fontSize: '1.2rem',
                  border: '1px solid var(--secondary-color)',
                  padding: '0.2rem 0.6rem',
                  backgroundColor: 'rgba(255, 59, 48, 0.05)'
                }}>{item.id}</span>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-color)', lineHeight: '1.5' }}>
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating background noise text */}
      <div className="floating-quote-bg" style={{ bottom: '15%', left: '-2%' }}>
        The starry heavens above me...
      </div>
    </div>
  );
}
