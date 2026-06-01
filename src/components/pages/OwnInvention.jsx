import React, { useState } from 'react';
import { ShieldAlert, Terminal as TerminalIcon, Layers } from 'lucide-react';
import wittgensteinPortraitImg from '../../assets/Ludwig_Wittgenstein.jpg';
import russellPortraitImg from '../../assets/russell.jpg';
import tractatusBookImg from '../../assets/tractatuslogicophilo.jpg';
import sunflowersImg from '../../assets/sunflowers_wittgenstein.jpg';

export default function OwnInvention() {
  const [layoutMode, setLayoutMode] = useState('retro'); // 'retro' | 'glitch' | 'terminal'
  const [glitchLevel, setGlitchLevel] = useState(1);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'LOGICAL SYSTEM INITIALIZED : TRUTH_TABLE_CALCULATOR',
    'STATUS: TRACTATUS_INJECTION_ACTIVE // SOLIPSISTIC_MODE',
    'Type "help" or "wittgenstein" to query propositions.'
  ]);

  const handleIgnoreReality = () => {
    setGlitchLevel(prev => (prev % 3) + 1);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const input = terminalInput.trim().toLowerCase();
    let response = '';

    if (input === 'help') {
      response = 'AVAILABLE COMMANDS: "wittgenstein", "russell", "limit", "clear"';
    } else if (input === 'wittgenstein') {
      response = 'TRACTATUS 5.62: What solipsism means is quite correct, only it cannot be said, but shows itself.';
    } else if (input === 'russell') {
      response = 'PRINCIPIA MATHEMATICS: Mathematics may be defined as the subject in which we never know what we are talking about, nor whether what we are saying is true.';
    } else if (input === 'limit') {
      response = 'COGNITIVE LIMIT REACHED. SENSORY DISTORTION ACTIVE...';
      setGlitchLevel(prev => (prev % 3) + 1);
    } else if (input === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      response = `LOGIC_ERROR: Unknown command "${input}". Type "help" for options.`;
    }

    setTerminalLogs(prev => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput('');
  };

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
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
            CHAPTER_04 // ANALYSIS
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, transform: 'skewX(var(--tilt-angle))' }} className="glitch-text" data-text="Analysis: Wittgenstein & Russell">
            Analysis: Wittgenstein & Russell
          </h2>
        </div>
        
        {/* Toggle Controls (Expand Capabilities) */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Layers size={16} style={{ color: 'var(--primary-color)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginRight: '0.5rem' }}>HUD:</span>
          
          <button 
            className={`custom-btn ${layoutMode === 'retro' ? 'active' : ''}`}
            onClick={() => setLayoutMode('retro')}
            style={{ padding: '0.4rem 1.2rem', fontSize: '0.95rem', width: '200px', height: '62px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1.2' }}
          >
            <span>Logical Errors</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'glitch' ? 'active' : ''}`}
            onClick={() => setLayoutMode('glitch')}
            style={{ padding: '0.4rem 1.2rem', fontSize: '0.95rem', width: '200px', height: '62px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1.2' }}
          >
            <span>Logical Grid</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'terminal' ? 'active' : ''}`}
            onClick={() => setLayoutMode('terminal')}
            style={{ padding: '0.4rem 1.2rem', fontSize: '0.95rem', width: '200px', height: '62px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1.2' }}
          >
            <span>Terminal</span>
          </button>
        </div>
      </div>

      {/* RENDER LAYOUT MODES */}
      {layoutMode === 'retro' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Russell & Tractatus Object */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Russell Profile Card */}
            <div className="retro-window">
              <div className="retro-window-header" style={{ background: 'linear-gradient(90deg, var(--secondary-color), #000)' }}>
                <span>BERTRAND_RUSSELL_LOGIC.EXE</span>
                <button className="retro-window-btn">_</button>
              </div>
              <div className="retro-window-body" style={{ display: 'flex', gap: '1.5rem', alignItems: 'start', padding: '1.5rem' }}>
                <img 
                  src={russellPortraitImg} 
                  alt="Bertrand Russell" 
                  style={{ 
                    width: '110px', 
                    height: '140px', 
                    objectFit: 'cover', 
                    border: '2px solid var(--secondary-color)', 
                    boxShadow: '4px 4px 0 var(--border-color)', 
                    flexShrink: 0 
                  }}
                />
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '1.1rem', 
                    color: 'var(--secondary-color)', 
                    marginBottom: '0.6rem', 
                    fontWeight: 900 
                  }}>
                    BERTRAND RUSSELL
                  </h4>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8rem', 
                    display: 'block', 
                    marginBottom: '0.8rem', 
                    opacity: 0.7 
                  }}>
                    // ANALYTICAL FOUNDATION // PARADOX ENGINE
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <p style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontStyle: 'italic', 
                      fontSize: '1.1rem', 
                      lineHeight: '1.4', 
                      color: '#130e01',
                      borderLeft: '3px solid var(--secondary-color)',
                      paddingLeft: '0.8rem'
                    }}>
                      "Mathematics may be defined as the subject in which we never know what we are talking about, nor whether what we are saying is true."
                    </p>
                    <p style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontStyle: 'italic', 
                      fontSize: '1.1rem', 
                      lineHeight: '1.4', 
                      color: '#130e01',
                      borderLeft: '3px solid var(--secondary-color)',
                      paddingLeft: '0.8rem'
                    }}>
                      "The point of philosophy is to start with something so simple as not to seem worth stating, and to end with something so paradoxical that no one will believe it."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tractatus Book Cover Window (Separate Object) */}
            <div className="retro-window">
              <div className="retro-window-header" style={{ background: 'linear-gradient(90deg, #444, #000)' }}>
                <span>TRACTATUS_OBJECT_DATA.SYS</span>
                <button className="retro-window-btn">?</button>
              </div>
              <div className="retro-window-body" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
                <img 
                  src={tractatusBookImg} 
                  alt="Tractatus Logico-Philosophicus Cover" 
                  style={{ 
                    width: '120px', 
                    height: '170px', 
                    objectFit: 'cover', 
                    border: '1.5px solid var(--primary-color)', 
                    boxShadow: '4px 4px 0 var(--border-color)', 
                    flexShrink: 0 
                  }}
                />
                <div style={{ flexGrow: 1, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  <div style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.4rem' }}>
                    TRACTATUS LOGICO-PHILOSOPHICUS
                  </div>
                  <div style={{ opacity: 0.8, marginBottom: '0.8rem' }}>
                    L. WITTGENSTEIN // PUBLISHED 1921
                  </div>
                  <div style={{ 
                    padding: '0.8rem', 
                    background: 'rgba(0,0,0,0.3)', 
                    border: '1px solid var(--border-color)', 
                    fontSize: '0.8rem', 
                    lineHeight: '1.4', 
                    fontFamily: 'var(--font-mono)' 
                  }}>
                    <strong style={{ color: 'var(--secondary-color)' }}>PROP 1:</strong> "The world is all that is the case."
                    <br />
                    <strong style={{ color: 'var(--secondary-color)' }}>PROP 7:</strong> "What we cannot speak about we must pass over in silence."
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Wittgenstein & Sunflowers Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Wittgenstein Profile Card */}
            <div className="retro-window">
              <div className="retro-window-header" style={{ background: 'linear-gradient(90deg, var(--primary-color), #000)' }}>
                <span>LUDWIG_WITTGENSTEIN_LIMIT.EXE</span>
                <button className="retro-window-btn" onClick={handleIgnoreReality}>X</button>
              </div>
              <div className="retro-window-body" style={{ display: 'flex', gap: '1.5rem', alignItems: 'start', padding: '1.5rem' }}>
                <img 
                  src={wittgensteinPortraitImg} 
                  alt="Ludwig Wittgenstein" 
                  style={{ 
                    width: '110px', 
                    height: '140px', 
                    objectFit: 'cover', 
                    border: '2px solid var(--primary-color)', 
                    boxShadow: '4px 4px 0 var(--border-color)', 
                    flexShrink: 0 
                  }}
                />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <ShieldAlert size={20} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                    <h4 style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '1.1rem', 
                      color: 'var(--primary-color)', 
                      fontWeight: 900 
                    }}>
                      L. WITTGENSTEIN
                    </h4>
                  </div>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8rem', 
                    display: 'block', 
                    marginBottom: '0.8rem', 
                    opacity: 0.7 
                  }}>
                    // BOUNDARIES OF LANGUAGE // SOLIPSISM MATRIX
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <p style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontStyle: 'italic', 
                      fontSize: '1.1rem', 
                      lineHeight: '1.4', 
                      color: '#130e01',
                      borderLeft: '3px solid var(--primary-color)',
                      paddingLeft: '0.8rem'
                    }}>
                      "What solipsism means is quite correct, only it cannot be said, but shows itself. The subject does not belong to the world, but it is a limit of the world."
                    </p>
                    <p style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontStyle: 'italic', 
                      fontSize: '1.1rem', 
                      lineHeight: '1.4', 
                      color: '#130e01',
                      borderLeft: '3px solid var(--primary-color)',
                      paddingLeft: '0.8rem'
                    }}>
                      "The limits of my language mean the limits of my world. Whereof one cannot speak, thereof one must be silent."
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
                    <button className="retro-window-btn" onClick={handleIgnoreReality} style={{ fontWeight: 'bold', padding: '4px 12px', fontSize: '0.8rem' }}>
                      TEST COGNITION LIMIT (Glitch x{glitchLevel})
                    </button>
                    <button className="retro-window-btn" onClick={() => alert("LOGIC ERROR: Language boundaries cannot be broken.")} style={{ padding: '4px 12px', fontSize: '0.8rem' }}>
                      ACCEPT BOUNDS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunflowers Diagnostic Matrix */}
            <div className="retro-window">
              <div className="retro-window-header" style={{ background: 'linear-gradient(90deg, var(--primary-color), #000)' }}>
                <span>SUNFLOWERS.EXE // ARTIFACT</span>
                <button className="retro-window-btn" onClick={() => alert("LOGICAL ARTIFACT: Wittgenstein's Sunflowers.")}>?</button>
              </div>
              <div className="retro-window-body" style={{
                background: '#000',
                padding: '0.8rem',
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Scanline CRT overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(255, 20, 147, 0.1) 50%)',
                  backgroundSize: '100% 4px',
                  zIndex: 4,
                  pointerEvents: 'none',
                  opacity: 0.5
                }} />
                <div className="sunflower-glitch-image" style={{ 
                  backgroundImage: `url(${sunflowersImg})`,
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.9,
                  border: '1.5px solid var(--primary-color)',
                  boxShadow: '0 0 15px rgba(127, 255, 0, 0.1)'
                }} />
                {/* Absolute overlay tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'var(--primary-color)',
                  color: '#000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  padding: '2px 6px',
                  zIndex: 5
                }}>
                  STATE: GLITCHED
                </div>
              </div>
              <div style={{ padding: '0.8rem', background: '#e0e0e0', borderTop: '2px solid #888', fontSize: '0.85rem', color: '#333', fontFamily: 'var(--font-mono)' }}>
                * Wittgensteinian glitched sunflowers representation active.
              </div>
            </div>

          </div>
        </div>
      )}

      {layoutMode === 'glitch' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '2rem',
          alignItems: 'center'
        }} className="fade-in">
          {/* Left Column: Aggressive Skewed Shards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="glass-panel" style={{ transform: 'skewX(-15deg)', borderLeft: '6px solid var(--primary-color)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>THE MICROCOSM</h3>
              <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-serif)' }}>
                "I am my world. The microcosm." The thinking, presenting subject is not an object inside the world, but a boundary that contains it.
              </p>
            </div>
            
            <div className="glass-panel" style={{ transform: 'skewX(-15deg)', borderLeft: '6px solid var(--secondary-color)' }}>
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>THE LADDER OF MEANING</h3>
              <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-serif)' }}>
                "He must, so to speak, throw away the ladder after he has climbed up it." Logical propositions serve only as tools to transcend them.
              </p>
            </div>
          </div>

          {/* Right Column: Giant glitchy info board */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <span style={{ color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>
              // LOGICAL_PUNK_READOUT
            </span>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', color: 'var(--primary-color)' }}>ANALYTICAL PUNK VIBE</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
              This layout implements the pure structural friction of early analytical philosophy. Charcoal backgrounds intersect with neon green logic channels and truth tables to build the ultimate systematic console.
            </p>
            <button className="custom-btn" onClick={handleIgnoreReality}>
              <span>TRIGGER SYSTEM OVERLOAD</span>
            </button>
          </div>
        </div>
      )}

      {layoutMode === 'terminal' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1.2fr) minmax(280px, 0.8fr)',
          gap: '2rem',
          alignItems: 'stretch',
          minHeight: '420px'
        }} className="fade-in">
          
          {/* Left Column: Hacker Terminal Console */}
          <div style={{
            background: '#070707',
            border: '3px solid var(--primary-color)',
            boxShadow: '0 0 20px rgba(127, 255, 0, 0.2)',
            fontFamily: 'var(--font-mono)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            {/* Terminal Title Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--primary-color)',
              paddingBottom: '0.5rem',
              marginBottom: '1rem',
              color: 'var(--primary-color)',
              fontSize: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TerminalIcon size={16} />
                <span>LOGICAL_TERMINAL_V1.04</span>
              </div>
              <span>USER: RUSSELL</span>
            </div>

            {/* Terminal Outputs */}
            <div style={{
              flexGrow: 1,
              overflowY: 'auto',
              maxHeight: '260px',
              marginBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '1rem',
              color: 'var(--primary-color)'
            }}>
              {terminalLogs.map((log, index) => (
                <div key={index} style={{
                  color: log.startsWith('>') ? '#fff' : log.startsWith('CRITICAL') || log.startsWith('LOGIC_ERROR') ? 'var(--secondary-color)' : 'var(--primary-color)'
                }}>
                  {log}
                </div>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleTerminalSubmit} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Enter command (e.g. 'help', 'wittgenstein')..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  flexGrow: 1,
                  outline: 'none',
                  caretColor: 'var(--primary-color)'
                }}
              />
            </form>
          </div>

          {/* Right Column: High-Fidelity Chromatic Aberration Glitch Window */}
          <div className="retro-window" style={{
            borderColor: 'var(--secondary-color)',
            boxShadow: '8px 8px 0px var(--primary-color), 0 0 20px rgba(255, 20, 147, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div className="retro-window-header" style={{ background: 'linear-gradient(90deg, var(--secondary-color), #000)' }}>
              <span>TRACTATUS_FACTS.EXE</span>
              <button className="retro-window-btn" onClick={handleIgnoreReality} style={{ fontWeight: 'bold' }}>!</button>
            </div>
            
            {/* Chromatic aberration layers */}
            <div className="retro-window-body" style={{
              background: '#020005',
              flexGrow: 1,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1.5rem',
              overflow: 'hidden'
            }}>
              {/* Scanline CRT overlay for the glitch window */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(255, 20, 147, 0.15) 50%)',
                backgroundSize: '100% 4px',
                zIndex: 4,
                pointerEvents: 'none',
                opacity: 0.6
              }} />

              {/* Dynamic chromatic aberration text container */}
              <div className="aberration-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--primary-color)', display: 'block', marginBottom: '0.5rem', opacity: 0.8 }}>
                  // ERROR: LANGUAGE_LIMIT_REACHED
                </span>
                
                {/* Aberration Glitched Text Layers */}
                <h4 className="chromatic-glitch-text" data-text="Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.">
                  "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt."
                </h4>
                
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontStyle: 'italic', color: '#ff69b4', marginTop: '0.5rem', opacity: 0.9 }}>
                  (The limits of my language mean the limits of my world.)
                </p>
              </div>

              {/* Glitch Overlay Bars */}
              <div className="glitch-bar bar-1" />
              <div className="glitch-bar bar-2" />
              <div className="glitch-bar bar-3" />
            </div>
          </div>
        </div>
      )}

      {/* Background quote noise */}
      <div className="floating-quote-bg" style={{ top: '25%', left: '-5%', opacity: 0.08 * glitchLevel }}>
        Die Grenzen meiner Sprache...
      </div>

      <style>{`
        .chromatic-glitch-text {
          font-family: var(--font-mono);
          font-size: 1.05rem;
          font-weight: 900;
          color: #fff;
          position: relative;
          text-shadow: 2px 0 0 #00eefc, -2px 0 0 #ff1493;
          animation: chroma-flicker 2s infinite linear alternate-reverse;
          line-height: 1.3;
          margin: 0.5rem 0;
        }
        
        .chromatic-glitch-text::before,
        .chromatic-glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        
        .chromatic-glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #7fff00;
          clip: rect(10px, 450px, 30px, 0);
          animation: glitch-slice-1 3s infinite linear alternate-reverse;
        }

        .chromatic-glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #ff1493, 0 2px #00eefc;
          clip: rect(40px, 450px, 60px, 0);
          animation: glitch-slice-2 2.5s infinite linear alternate-reverse;
        }

        @keyframes chroma-flicker {
          0%, 100% { text-shadow: 2px 0 0 #00eefc, -2px 0 0 #ff1493; }
          50% { text-shadow: -3px 0 0 #7fff00, 3px 0 0 #ff1493; }
        }

        @keyframes glitch-slice-1 {
          0% { clip: rect(12px, 9999px, 35px, 0); }
          50% { clip: rect(2px, 9999px, 15px, 0); }
          100% { clip: rect(20px, 9999px, 45px, 0); }
        }

        @keyframes glitch-slice-2 {
          0% { clip: rect(30px, 9999px, 50px, 0); }
          50% { clip: rect(42px, 9999px, 68px, 0); }
          100% { clip: rect(5px, 9999px, 35px, 0); }
        }

        .glitch-bar {
          position: absolute;
          left: 0;
          width: 100%;
          background: rgba(127, 255, 0, 0.15);
          mix-blend-mode: overlay;
          z-index: 3;
          pointer-events: none;
        }
        
        .glitch-bar.bar-1 {
          height: 15px;
          top: 10%;
          animation: glitch-bar-move 6s infinite linear;
        }
        
        .glitch-bar.bar-2 {
          height: 8px;
          top: 45%;
          background: rgba(255, 20, 147, 0.2);
          animation: glitch-bar-move 4s infinite linear reverse;
        }
        
        .glitch-bar.bar-3 {
          height: 25px;
          top: 75%;
          animation: glitch-bar-move 8s infinite linear;
        }

        @keyframes glitch-bar-move {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        .sunflower-glitch-card {
          position: fixed;
          bottom: 25px;
          left: 25px;
          width: 125px;
          height: 175px;
          border: 2px solid var(--secondary-color);
          background: #000;
          box-shadow: 4px 4px 0px var(--primary-color);
          z-index: 100;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        .sunflower-glitch-card:hover {
          transform: scale(1.08) rotate(-2deg);
          box-shadow: 6px 6px 0px var(--secondary-color), 0 0 15px var(--primary-color);
          border-color: var(--primary-color);
        }
        
        .sunflower-glitch-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0.8;
          animation: sunflower-tear 3.5s infinite steps(2) alternate;
        }
        
        .sunflower-glitch-label {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(0,0,0,0.85);
          color: var(--primary-color);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          text-align: center;
          padding: 2px 0;
          border-top: 1px solid var(--primary-color);
        }

        @keyframes sunflower-tear {
          0%, 100% {
            filter: hue-rotate(0deg) contrast(1.2);
            clip-path: inset(0 0 0 0);
            transform: scale(1);
          }
          20% {
            filter: hue-rotate(90deg) saturate(1.8) contrast(1.5);
            clip-path: inset(10% 0 80% 0);
            transform: scale(1.05) skewX(5deg);
          }
          40% {
            filter: invert(0.15) contrast(1.1);
            clip-path: inset(45% 0 35% 0);
            transform: scale(0.98) translateX(-3px);
          }
          60% {
            filter: hue-rotate(-60deg) brightness(1.25);
            clip-path: inset(75% 0 5% 0);
            transform: scale(1.03) skewX(-4deg);
          }
          80% {
            filter: contrast(2) saturate(0.6);
            clip-path: inset(15% 0 60% 0);
            transform: scale(1.04) translateY(2px);
          }
        }
      `}</style>

    </div>
  );
}
