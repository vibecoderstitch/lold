import React from 'react';
import sokratImg from '../../assets/sokrat.jpg';

export default function MainMenu({ onSelectChapter }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(320px, 1.2fr) minmax(300px, 0.8fr)',
      minHeight: '80vh',
      alignItems: 'center',
      gap: '5rem', // increased gap to 5rem to avoid overlaps
      position: 'relative',
      padding: '2rem 1rem',
      zIndex: 1
    }} className="fade-in">
      
      {/* Left side: Vector Art + High-Fidelity Character Sprite */}
      <div style={{
        position: 'relative',
        height: '100%',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'flex-start', // aligned left
        alignItems: 'center',
        paddingLeft: '3.5rem' // extra padding to shift sprite left
      }}>
        {/* Glowing aura background in P3R/P5 crossover style */}
        <div style={{
          position: 'absolute',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '40% 60% 70% 30% / 40% 40% 60% 60%',
          background: 'linear-gradient(45deg, var(--secondary-color), var(--primary-color))',
          filter: 'blur(45px)',
          opacity: 0.3,
          zIndex: 0,
          animation: 'blob-spin 15s infinite linear'
        }} />
        
        {/* Stylized background geometry */}
        <svg
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none'
          }}
          viewBox="0 0 400 600"
        >
          <polygon points="40,100 200,60 350,150 310,480 90,520" fill="none" stroke="var(--primary-color)" strokeWidth="2" opacity="0.25" strokeDasharray="5,5" />
          <polygon points="70,160 290,110 370,400 180,500" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" opacity="0.3" />
        </svg>
 
        {/* High-Fidelity Socrates Guide Card */}
        <div style={{
          width: '320px',
          height: '450px',
          border: '3px solid var(--primary-color)',
          background: 'rgba(5, 8, 17, 0.85)',
          boxShadow: '8px 8px 0px var(--secondary-color)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '1.5rem',
          transform: 'skewX(var(--tilt-angle)) scale(1.02) translateX(-35px)',
          zIndex: 2,
          color: 'var(--primary-color)',
          fontFamily: 'var(--font-mono)'
        }}>
          <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={sokratImg} 
              alt="Socrates Guide" 
              style={{ 
                width: '100%', 
                height: '240px', 
                objectFit: 'cover', 
                border: '2px solid var(--primary-color)',
                boxShadow: '4px 4px 0px var(--secondary-color)',
                marginBottom: '1.2rem' 
              }} 
            />
            <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--primary-color)', textTransform: 'uppercase' }}>SOCRATES // SPIRIT</strong>
            <p style={{ fontSize: '0.85rem', color: '#ffffff', opacity: 0.9, lineHeight: '1.4', padding: '0 0.5rem', fontFamily: 'var(--font-body)' }}>
              "The only true wisdom is in knowing you know nothing." Let Socrates guide your logical journey.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side: Tilted Menu Options */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '2rem'
      }}>
        {/* Small subtitle indicator in monospace */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--secondary-color)',
          fontSize: '1.05rem',
          letterSpacing: '0.2em',
          marginBottom: '0.5rem',
          textTransform: 'uppercase'
        }}>
          // Philosophy UI : Active Philosophical Eras
        </span>
        
        {/* Dynamic header title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          lineHeight: '0.95',
          marginBottom: '2rem',
          fontWeight: 900,
          textShadow: '4px 4px 0px var(--border-color)',
          transform: 'skewX(var(--tilt-angle))'
        }}>
          Philosophical<br />
          <span style={{ color: 'var(--primary-color)' }}>Journey</span>
        </h1>
        
        {/* Menu selections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <button className="tilted-item" onClick={() => onSelectChapter(1)} style={{ fontSize: '1.25rem', padding: '0.2rem 1.2rem', margin: '0.2rem 0' }}>
            I. Antiquity: Plato & Aristotle
          </button>
          
          <button className="tilted-item" onClick={() => onSelectChapter(2)} style={{ fontSize: '1.25rem', padding: '0.2rem 1.2rem', margin: '0.2rem 0' }}>
            II. Modernity: Descartes & Hume
          </button>
          
          <button className="tilted-item" onClick={() => onSelectChapter(3)} style={{ fontSize: '1.25rem', padding: '0.2rem 1.2rem', margin: '0.2rem 0' }}>
            III. Idealism: Kant & Hegel
          </button>
 
          <button className="tilted-item" onClick={() => onSelectChapter(4)} style={{ fontSize: '1.25rem', padding: '0.2rem 1.2rem', margin: '0.2rem 0' }}>
            IV. Analysis: Wittgenstein & Russell
          </button>
 
          <button className="tilted-item" onClick={() => onSelectChapter(5)} style={{ fontSize: '1.25rem', padding: '0.2rem 1.2rem', margin: '0.2rem 0' }}>
            V. Speculative Realism
          </button>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style>{`
        @keyframes blob-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes butterfly-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3) translate(2px, -3px); }
        }
        .fade-in {
          animation: fade-in-anim 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes fade-in-anim {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
