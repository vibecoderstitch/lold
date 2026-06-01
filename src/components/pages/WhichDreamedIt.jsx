import React, { useState } from 'react';
import { Layers, Camera, Compass, Heart, Eye } from 'lucide-react';
import polaroidImg1 from '../../assets/arche_fossil_cosmic.png';
import polaroidImg2 from '../../assets/obsidian_withdrawal.png';
import polaroidImg3 from '../../assets/great_outdoors_abyss.png';
import meyasuPortraitImg from '../../assets/meyasu.jpg';
import harmanPortraitImg from '../../assets/harman.jpg';

export default function WhichDreamedIt() {
  const [layoutMode, setLayoutMode] = useState('mirror'); // 'mirror' | 'polaroid' | 'dualism'
  const [hoveredSide, setHoveredSide] = useState(null); // null | 'brother' | 'sister'
  const [selectedMemory, setSelectedMemory] = useState(0);
  const [mirrorUnlocked, setMirrorUnlocked] = useState(false);

  const objects = [
    { title: 'The Arche-Fossil', year: 'Primordial', log: 'Reality before human thought. An ancestral environment of swirling hot gas, radioactive decay, and stellar nebula. It proves that the universe exists independently of our correlationist circles.' },
    { title: 'Object Withdrawal', year: 'Autonomous', log: "Graham Harman's core thesis: real objects withdraw from all human and physical access, hidden in an obsidian dark. A stone, a star, or a dream exists in its own autonomous vault." },
    { title: 'The Great Outdoors', year: 'Absolute', log: "Quentin Meillassoux's absolute contingency: the outside which does not depend on our thought. A desolate alien landscape of jagged crystals and obsidian mountains under cold, twin suns." },
    { title: 'Graham Harman', year: 'OOO Founder', log: 'Graham Harman (born 1968) is an American philosopher of metaphysics. He is the founder of Object-Oriented Ontology, arguing that objects are autonomous, fully withdrawn from relations, and democratically flat.' },
    { title: 'Quentin Meillassoux', year: 'After Finitude', log: 'Quentin Meillassoux (born 1967) is a French philosopher. He coined the term correlationism and argues for the absolute necessity of absolute contingency and the reality of the ancestral void.' }
  ];

  // Falling feather particles configuration
  const feathers = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${(i * 9) % 100}%`,
    delay: `${(i * 1.8) % 15}s`,
    duration: `${8 + (i % 8)}s`,
    isDark: i % 3 === 0,
    size: 4 + (i % 6)
  }));

  return (
    <div style={{ position: 'relative', zIndex: 1, padding: '1rem' }} className="fade-in">
      
      {/* Falling Feathers Background Layer */}
      <div className="feather-layer">
        {feathers.map(f => (
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
        zIndex: 15
      }}>
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--secondary-color)', fontSize: '0.95rem', letterSpacing: '0.15em' }}>
            CHAPTER_05 // SPECULATIVE_REALISM
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, transform: 'skewX(var(--tilt-angle))', color: 'var(--text-color)' }}>
            Speculative Realism
          </h2>
        </div>
        
        {/* Toggle Controls */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Layers size={16} style={{ color: 'var(--secondary-color)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginRight: '0.5rem', opacity: 0.8 }}>LAYOUT:</span>
          
          <button 
            className={`custom-btn ${layoutMode === 'mirror' ? 'active' : ''}`}
            onClick={() => setLayoutMode('mirror')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>The Void</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'polaroid' ? 'active' : ''}`}
            onClick={() => setLayoutMode('polaroid')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>Flat Ontology</span>
          </button>
          
          <button 
            className={`custom-btn ${layoutMode === 'dualism' ? 'active' : ''}`}
            onClick={() => setLayoutMode('dualism')}
            style={{ padding: '0.4rem 1rem', fontSize: '0.95rem', minWidth: '160px' }}
          >
            <span>Correlation</span>
          </button>
        </div>
      </div>

      {/* RENDER MODES */}
      {layoutMode === 'mirror' && (
        <div className="diagonal-split-wrapper" style={{ position: 'relative', zIndex: 10 }}>
          
          {/* LEFT PANEL: Quentin Meillassoux */}
          <div 
            onMouseEnter={() => setHoveredSide('brother')}
            onMouseLeave={() => setHoveredSide(null)}
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, #020e24 0%, #0c1c38 100%)',
              color: '#d5e3ff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRight: '2px solid var(--border-color)',
              transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
              opacity: hoveredSide === 'sister' ? 0.25 : 1,
              filter: hoveredSide === 'sister' ? 'blur(4px) grayscale(0.5)' : 'none',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ maxWidth: '420px', position: 'relative', zIndex: 5 }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: '#00f0ff', fontSize: '1.25rem', display: 'block', letterSpacing: '0.15em' }}>
                // COGNITIVE_SOURCE_01 // THE ANCESTRAL
              </span>
              <h3 style={{ fontSize: '2.1rem', margin: '0.8rem 0', fontWeight: 800, color: '#00f0ff' }}>THE ANCESTRAL</h3>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', lineHeight: '1.6', margin: '1rem 0', fontStyle: 'italic', opacity: 0.95 }}>
                "We must grasp the absolute necessity of the contingency of everything. The universe before human consciousness exists as a primordial reality, mocking our correlationist circles."
              </p>
              
              {/* Meillassoux Portrait */}
              <div style={{ height: '190px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5rem' }}>
                <img 
                  src={meyasuPortraitImg} 
                  alt="Quentin Meillassoux" 
                  style={{ width: '130px', height: '100%', objectFit: 'cover', border: '2px solid #00f0ff', boxShadow: '4px 4px 0px rgba(0,240,255,0.2)', zIndex: 10 }}
                />
              </div>
            </div>
            {/* Background geometric design element */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120px', height: '120px', border: '1px solid rgba(168, 218, 220, 0.15)', transform: 'rotate(45deg)' }} />
          </div>

          {/* RIGHT PANEL: Graham Harman */}
          <div 
            onMouseEnter={() => setHoveredSide('sister')}
            onMouseLeave={() => setHoveredSide(null)}
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, #fcf8ff 0%, #faedcd 100%)',
              color: '#00132d',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderLeft: '2px solid var(--border-color)',
              transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
              opacity: hoveredSide === 'brother' ? 0.25 : 1,
              filter: hoveredSide === 'brother' ? 'blur(4px) grayscale(0.5)' : 'none',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ maxWidth: '420px', position: 'relative', zIndex: 5 }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: '#8c1d25', fontSize: '1.25rem', display: 'block', letterSpacing: '0.15em' }}>
                // COGNITIVE_SOURCE_02 // OBJECTS
              </span>
              <h3 style={{ fontSize: '2.1rem', margin: '0.8rem 0', fontWeight: 800, color: '#b31b26' }}>OBJECT ONTO</h3>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', lineHeight: '1.6', margin: '1rem 0', fontStyle: 'italic', opacity: 0.95, color: '#1a1a2e' }}>
                "Real objects withdraw from all relation. An obsidian sphere floating in an empty void exists completely independently of our sensory perceptions."
              </p>
              
              {/* Harman Portrait */}
              <div style={{ height: '190px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5rem' }}>
                <img 
                  src={harmanPortraitImg} 
                  alt="Graham Harman" 
                  style={{ width: '130px', height: '100%', objectFit: 'cover', border: '2px solid #b31b26', boxShadow: '4px 4px 0px rgba(179,27,38,0.2)', zIndex: 10 }}
                />
              </div>
            </div>
            {/* Background geometric design element */}
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '150px', height: '150px', border: '1px solid rgba(230, 57, 70, 0.1)', transform: 'rotate(45deg)' }} />
          </div>

          {/* Symmetrical central mirror shard overlay button */}
          <div 
            className="snip-btn"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              width: '85px',
              height: '85px',
              background: mirrorUnlocked ? 'var(--secondary-color)' : 'var(--primary-color)',
              border: '4px solid var(--text-color)',
              boxShadow: mirrorUnlocked ? '0 0 25px var(--secondary-color)' : '0 0 20px var(--primary-color)',
              zIndex: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)'
            }} 
            onClick={() => {
              setMirrorUnlocked(!mirrorUnlocked);
            }}
          >
            <div style={{ transform: 'rotate(-45deg)', color: 'var(--bg-color)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {mirrorUnlocked ? <Eye size={24} /> : <Compass size={24} className="animate-pulse" />}
            </div>
          </div>
        </div>
      )}

      {/* Mirror room unlocked panel dialogue popup */}
      {layoutMode === 'mirror' && mirrorUnlocked && (
        <div className="glass-panel fade-in" style={{
          marginTop: '2rem',
          borderLeft: '8px solid var(--secondary-color)',
          padding: '2.5rem 3.5rem',
          boxShadow: '8px 8px 0px var(--primary-color)',
          position: 'relative',
          zIndex: 20
        }}>
          <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#e63946', fontWeight: 'bold', display: 'block', marginBottom: '0.8rem' }}>
              // SPECULATIVE_INTEGRATION_UNLOCKED // SYSTEM: ACTIVE
            </span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', lineHeight: '1.7', fontStyle: 'italic', margin: '0.5rem 0' }}>
              "What speculative realism teaches us is the absolute contingency of everything. We step out of the correlationist cage and face the Great Outdoors, where objects live their own secret, silent, obsidian lives."
            </p>
          </div>
        </div>
      )}

      {layoutMode === 'polaroid' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1.2fr) minmax(280px, 0.8fr)',
          gap: '3rem',
          position: 'relative',
          zIndex: 10,
          alignItems: 'center',
          minHeight: '440px'
        }} className="fade-in">
          
          {/* Left: Interactive Polaroid Photo Pile */}
          <div style={{
            position: 'relative',
            height: '520px',
            width: '100%',
            overflow: 'visible'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: 'var(--secondary-color)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontFamily: 'var(--font-mono)',
              position: 'absolute',
              top: '-30px',
              left: 0
            }}>
              <Camera size={20} /> // FLAT ONTOLOGY PILE (CLICK TO ZOOM)
            </h3>

            {/* Polaroid 1: The Arche-Fossil */}
            <div 
              onClick={() => setSelectedMemory(0)}
              className={`polaroid-card ${selectedMemory === 0 ? 'selected' : ''}`}
              style={{
                position: 'absolute',
                top: '40px',
                left: '10px',
                transform: 'rotate(-8deg)',
                zIndex: selectedMemory === 0 ? 5 : 2
              }}
            >
              <div className="polaroid-photo-frame">
                <img src={polaroidImg1} alt="The Arche-Fossil" className="polaroid-photo" />
              </div>
              <div className="polaroid-caption">The Arche-Fossil</div>
            </div>

            {/* Polaroid 2: Object Withdrawal */}
            <div 
              onClick={() => setSelectedMemory(1)}
              className={`polaroid-card ${selectedMemory === 1 ? 'selected' : ''}`}
              style={{
                position: 'absolute',
                top: '60px',
                left: '260px',
                transform: 'rotate(6deg)',
                zIndex: selectedMemory === 1 ? 5 : 3
              }}
            >
              <div className="polaroid-photo-frame">
                <img src={polaroidImg2} alt="Object Withdrawal" className="polaroid-photo" />
              </div>
              <div className="polaroid-caption">Object Withdrawal</div>
            </div>

            {/* Polaroid 3: The Great Outdoors */}
            <div 
              onClick={() => setSelectedMemory(2)}
              className={`polaroid-card ${selectedMemory === 2 ? 'selected' : ''}`}
              style={{
                position: 'absolute',
                top: '230px',
                left: '130px',
                transform: 'rotate(-3deg)',
                zIndex: selectedMemory === 2 ? 5 : 4
              }}
            >
              <div className="polaroid-photo-frame">
                <img src={polaroidImg3} alt="The Great Outdoors" className="polaroid-photo" />
              </div>
              <div className="polaroid-caption">Great Outdoors</div>
            </div>

            {/* Polaroid 4: Graham Harman */}
            <div 
              onClick={() => setSelectedMemory(3)}
              className={`polaroid-card ${selectedMemory === 3 ? 'selected' : ''}`}
              style={{
                position: 'absolute',
                top: '280px',
                left: '15px',
                transform: 'rotate(7deg)',
                zIndex: selectedMemory === 3 ? 5 : 2
              }}
            >
              <div className="polaroid-photo-frame">
                <img src={harmanPortraitImg} alt="Graham Harman" className="polaroid-photo" />
              </div>
              <div className="polaroid-caption">Graham Harman</div>
            </div>

            {/* Polaroid 5: Quentin Meillassoux */}
            <div 
              onClick={() => setSelectedMemory(4)}
              className={`polaroid-card ${selectedMemory === 4 ? 'selected' : ''}`}
              style={{
                position: 'absolute',
                top: '190px',
                left: '260px',
                transform: 'rotate(-8deg)',
                zIndex: selectedMemory === 4 ? 5 : 2
              }}
            >
              <div className="polaroid-photo-frame">
                <img src={meyasuPortraitImg} alt="Quentin Meillassoux" className="polaroid-photo" />
              </div>
              <div className="polaroid-caption">Q. Meillassoux</div>
            </div>
          </div>

          {/* Right: Detailed Memory Display Card */}
          <div className="glass-panel polaroid-zoom-panel" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3rem 3.5rem',
            border: '2px solid var(--primary-color)',
            borderLeft: '8px solid var(--secondary-color)',
            boxShadow: '8px 8px 0px var(--primary-color)',
            minHeight: '400px',
            position: 'relative',
            zIndex: 10,
            animation: 'polaroid-slide-in 0.4s cubic-bezier(0.19, 1, 0.22, 1)'
          }} key={selectedMemory}> {/* key={selectedMemory} forces re-mount for animation */}
            <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))' }}>
              <div style={{ display: 'flex', justifySelf: 'flex-start', fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#e63946', fontWeight: 'bold', marginBottom: '0.8rem' }}>
                OBJECT_RECOVERY: {objects[selectedMemory].year} // ANCESTRAL
              </div>
              <h3 style={{ fontSize: '2.1rem', margin: '0.5rem 0', fontWeight: 900, color: '#1d3557' }}>
                {objects[selectedMemory].title}
              </h3>
              <p style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.35rem', 
                lineHeight: '1.6', 
                fontStyle: 'italic',
                margin: '1.2rem 0',
                borderLeft: '3px solid #1d3557',
                paddingLeft: '1rem',
                color: '#1d3557'
              }}>
                "{objects[selectedMemory].log}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', opacity: 0.8, fontFamily: 'var(--font-mono)', color: '#1d3557', fontWeight: 'bold' }}>
                <Heart size={14} style={{ color: 'var(--secondary-color)' }} />
                <span>INTEGRITY: 100% SPECULATIVE</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {layoutMode === 'dualism' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          position: 'relative',
          zIndex: 10
        }} className="fade-in">
          {/* Correlationist Text Blocks */}
          <div className="glass-panel" style={{ 
            border: '2px solid var(--border-color)',
            borderLeft: '8px solid var(--secondary-color)',
            boxShadow: '8px 8px 0px var(--primary-color)',
            padding: '3rem 3.5rem',
            minHeight: '280px'
          }}>
            <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))' }}>
              <h3 style={{ marginBottom: '1rem', color: '#b31b26', fontFamily: 'var(--font-mono)', fontSize: '1.40rem', letterSpacing: '0.05em' }}>
                // THE CORRELATIONIST CIRCLE
              </h3>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#2b2b2b' }}>
                "Correlationism is the idea according to which we only ever have access to the correlation between thinking and being, and never to either term considered apart from the other. We must break this circle to reach the absolute."
              </p>
            </div>
          </div>

          <div className="glass-panel" style={{ 
            border: '2px solid var(--border-color)',
            borderLeft: '8px solid var(--primary-color)',
            boxShadow: '8px 8px 0px var(--secondary-color)',
            padding: '3rem 3.5rem',
            minHeight: '280px'
          }}>
            <div style={{ transform: 'skewX(calc(-1 * var(--tilt-angle)))' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1d3557', fontFamily: 'var(--font-mono)', fontSize: '1.40rem', letterSpacing: '0.05em' }}>
                // FLAT ONTOLOGY
              </h3>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontFamily: 'var(--font-serif)', color: '#2b2b2b' }}>
                Flat ontology is the democratizing of objects. In Graham Harman's OOO, a black hole, a sunflower, a greek temple bust, and a mathematical equation are all equally real, interacting on a flat playing field.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating background noise */}
      <div className="floating-quote-bg" style={{ bottom: '10%', right: '-2%' }}>
        The Great Outdoors.
      </div>

      <style>{`
        .polaroid-card {
          background: #fdfdfd;
          padding: 16px 16px 32px 16px;
          border: 1px solid rgba(0,0,0,0.15);
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          width: 250px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          transform-origin: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .polaroid-card:hover {
          transform: scale(1.18) translateY(-12px) !important;
          z-index: 100 !important;
          box-shadow: 0 15px 35px rgba(0, 238, 252, 0.4);
          border-color: var(--primary-color);
        }

        .polaroid-card.selected {
          border: 2px solid var(--secondary-color);
          box-shadow: 0 10px 25px rgba(255, 105, 180, 0.4);
          transform: scale(1.1) translateY(-5px) !important;
        }

        .polaroid-photo-frame {
          width: 100%;
          height: 195px;
          overflow: hidden;
          background: #000;
          border: 1px solid #ccc;
        }

        .polaroid-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.2) contrast(1.1);
          transition: filter 0.3s ease;
        }

        .polaroid-card:hover .polaroid-photo {
          filter: grayscale(0) contrast(1);
        }

        .polaroid-caption {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.15rem;
          color: #2b2b2b;
          margin-top: 14px;
          text-align: center;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }

        @keyframes polaroid-slide-in {
          0% { transform: skewX(var(--tilt-angle)) translateX(30px); opacity: 0; }
          100% { transform: skewX(var(--tilt-angle)) translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
