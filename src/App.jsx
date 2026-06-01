import React, { useState, useEffect } from 'react';
import { Home, Compass, BookOpen, Star, Layers } from 'lucide-react';
import ButterflyCanvas from './components/ButterflyCanvas';
import FloatingQuotes from './components/FloatingQuotes';
import MainMenu from './components/pages/MainMenu';
import RabbitHole from './components/pages/RabbitHole';
import OwnInvention from './components/pages/OwnInvention';
import GlassInsects from './components/pages/GlassInsects';
import Jabberwocky from './components/pages/Jabberwocky';
import WhichDreamedIt from './components/pages/WhichDreamedIt';

export default function App() {
  const [activeTheme, setActiveTheme] = useState(0); // 0: Menu, 1: Ch 1, 2: Ch 2, 3: Ch 3, 4: Ch 4, 5: Ch 5
  const [transitionStage, setTransitionStage] = useState('idle'); // 'idle' | 'entering' | 'separating' | 'exiting'
  const [targetTheme, setTargetTheme] = useState(0);
  const [sourceTheme, setSourceTheme] = useState(0);

  // Gesture Pull States
  const [isDragging, setIsDragging] = useState(false);
  const [dragSide, setDragSide] = useState(null); // 'left' | 'right' | null
  const [dragWidth, setDragWidth] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  // Sync theme to body class for global CSS variable transitions
  useEffect(() => {
    document.body.className = `theme-${activeTheme}`;
  }, [activeTheme]);

  // Global events during edge drag gestural interactions
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      let clientX = e.clientX;
      if (dragSide === 'right') {
        const width = Math.max(0, window.innerWidth - clientX);
        setDragWidth(width);
      } else if (dragSide === 'left') {
        const width = Math.max(0, clientX);
        setDragWidth(width);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 0) return;
      let clientX = e.touches[0].clientX;
      if (dragSide === 'right') {
        const width = Math.max(0, window.innerWidth - clientX);
        setDragWidth(width);
      } else if (dragSide === 'left') {
        const width = Math.max(0, clientX);
        setDragWidth(width);
      }
    };

    const handleMouseUp = () => {
      finishDrag();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, dragSide, dragWidth]);

  const startDrag = (side) => {
    if (transitionStage !== 'idle' || isDragging || isResetting) return;
    setIsDragging(true);
    setDragSide(side);
    setDragWidth(0);
  };

  const finishDrag = () => {
    const threshold = window.innerWidth * 0.25;
    const currentDragWidth = dragWidth;
    const currentDragSide = dragSide;

    setIsDragging(false);

    if (currentDragWidth > threshold) {
      let targetChapter = activeTheme;
      if (currentDragSide === 'right') {
        targetChapter = activeTheme + 1;
      } else if (currentDragSide === 'left') {
        targetChapter = activeTheme - 1;
      }

      // 1. Smoothly cover the entire viewport with the swipe curtain
      setIsResetting(true);
      setDragWidth(window.innerWidth + 400); // cover completely with slant margin

      // 2. Once the curtain covers the screen (350ms), swap activeTheme and slide it back out
      setTimeout(() => {
        setActiveTheme(targetChapter);
        setDragWidth(0);

        // 3. Clean up reset state once the slide-out finishes
        setTimeout(() => {
          setIsResetting(false);
          setDragSide(null);
        }, 350);
      }, 350);

    } else {
      // Spring back to 0 width
      setIsResetting(true);
      setDragWidth(0);
      setTimeout(() => {
        setIsResetting(false);
        setDragSide(null);
      }, 300);
    }
  };

  const triggerSwipeTransition = (direction) => {
    if (transitionStage !== 'idle' || isDragging || isResetting) return;
    
    const targetChapter = direction === 'right' ? activeTheme + 1 : activeTheme - 1;
    if (targetChapter < 1 || targetChapter > 5) return;

    setDragSide(direction);
    setIsResetting(true);
    setDragWidth(0); // Start at 0 with transition active

    // Trigger the slide-in transition in the next browser frame
    setTimeout(() => {
      setDragWidth(window.innerWidth + 400);
    }, 20);

    // Once the curtain covers the screen (350ms + 20ms offset), swap activeTheme and slide it back out
    setTimeout(() => {
      setActiveTheme(targetChapter);
      setDragWidth(0);

      // Clean up reset state once the slide-out finishes (350ms)
      setTimeout(() => {
        setIsResetting(false);
        setDragSide(null);
      }, 350);
    }, 370);
  };


  // Handle JRPG 5-Stripe Transition
  const handleSelectChapter = (themeId) => {
    if (transitionStage !== 'idle') return;

    setSourceTheme(activeTheme);
    setTargetTheme(themeId);
    setTransitionStage('entering');

    // Stage 1: Entrance. Stripes fall down and cover viewport (takes 650ms)
    setTimeout(() => {
      setActiveTheme(themeId);
      setTransitionStage('separating');
    }, 650);

    // Stage 2: Separation. Non-chosen slide out, chosen expands to cover everything (takes 600ms)
    setTimeout(() => {
      setTransitionStage('exiting');
    }, 1250);

    // Stage 3: Complete. Fade overlay out and return to idle (takes 400ms)
    setTimeout(() => {
      setTransitionStage('idle');
    }, 1650);
  };

  const getChapterName = (themeId) => {
    switch (themeId) {
      case 1: return 'Antiquity: Plato & Aristotle';
      case 2: return 'Modernity: Descartes & Hume';
      case 3: return 'Idealism: Kant & Hegel';
      case 4: return 'Analysis: Wittgenstein & Russell';
      case 5: return 'Speculative Realism';
      default: return 'Core Hub';
    }
  };

  // 5 Chapter Stripes configuration with their respective theme colors (matches the CSS --primary-color)
  const STRIPES_CONFIG = [
    { id: 1, label: 'ANTIQUITY', defaultColor: '#3EB489', left: '-15vw', width: '38vw', delay: '0s' },
    { id: 2, label: 'MODERNITY', defaultColor: '#00EEFC', left: '5vw', width: '38vw', delay: '0.04s' },
    { id: 3, label: 'GERMAN IDEALISM', defaultColor: '#c99a49', left: '25vw', width: '38vw', delay: '0.08s' },
    { id: 4, label: 'ANALYTICAL', defaultColor: '#7FFF00', left: '45vw', width: '38vw', delay: '0.12s' },
    { id: 5, label: 'SPECULATIVE REALISM', defaultColor: '#a8dadc', left: '65vw', width: '40vw', delay: '0.16s' }
  ];

  const getStripeColor = (stripeId) => {
    // If transitioning to or from Chapter 3 (Idealism), apply the new scholarly minimal color palette to all stripes
    if (targetTheme === 3 || sourceTheme === 3) {
      switch (stripeId) {
        case 1: return '#FAF6E9';
        case 2: return '#8c1d25';
        case 3: return '#c99a49';
        case 4: return '#1c1b18';
        case 5: return '#f3ebd4';
        default: return '#FAF6E9';
      }
    }
    // If we are going to core Main Menu (0), transition Stripe 3 (core hub color) to Midnight Void background color
    if (stripeId === 3 && targetTheme === 0) {
      return '#050811';
    }
    const config = STRIPES_CONFIG.find(s => s.id === stripeId);
    return config ? config.defaultColor : '#050811';
  };

  // Renders the stylized JRPG-style chapter title card revealed inside the expanding stripe
  const renderChapterReveal = (themeId) => {
    switch (themeId) {
      case 1:
        return (
          <div className="jrpg-chapter-reveal">
            <div className="reveal-sub">CHAPTER 01 // ANTIQUITY</div>
            <div className="reveal-main-bar">
              <div className="reveal-line primary-block">THE SHADOW &</div>
              <div className="reveal-line secondary-block">THE FORM</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="jrpg-chapter-reveal">
            <div className="reveal-sub">CHAPTER 02 // MODERNITY</div>
            <div className="reveal-main-bar">
              <div className="reveal-line dark-block" style={{ color: 'var(--primary-color)' }}>RADICAL DOUBT &</div>
              <div className="reveal-line secondary-block">SENSORY IMPRESSIONS</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="jrpg-chapter-reveal" style={{ transform: 'skewX(-5deg)' }}>
            <div className="reveal-sub" style={{ transform: 'skewX(5deg)', boxShadow: '4px 4px 0px var(--border-color)', border: '2px solid var(--border-color)', background: '#fdfbf7', color: 'var(--text-color)' }}>CHAPTER 03 // IDEALISM</div>
            <div className="reveal-main-bar">
              <div className="reveal-line primary-block" style={{ transform: 'skewX(5deg)', backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', border: '3px solid var(--border-color)', boxShadow: '8px 8px 0px var(--border-color)' }}>CRITIQUE OF REASON</div>
              <div className="reveal-line secondary-block" style={{ transform: 'skewX(5deg)', backgroundColor: 'var(--secondary-color)', color: '#ffffff', border: '3px solid var(--border-color)', boxShadow: '-8px 8px 0px var(--border-color)' }}>DIALECTICAL SPIRIT</div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="jrpg-chapter-reveal">
            <div className="reveal-sub">CHAPTER 04 // ANALYSIS</div>
            <div className="reveal-main-bar">
              <div className="reveal-line dark-block" style={{ borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}>LIMITS OF LANGUAGE &</div>
              <div className="reveal-line primary-block">TRUTH TABLES</div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="jrpg-chapter-reveal">
            <div className="reveal-sub">CHAPTER 05 // SPECULATIVE REALISM</div>
            <div className="reveal-main-bar">
              <div className="reveal-line secondary-block">THE GREAT OUTDOORS</div>
              <div className="reveal-line primary-block" style={{ backgroundColor: 'var(--primary-color)', color: '#000' }}>THE ANCESTRAL VOID</div>
            </div>
          </div>
        );
      case 0:
      default:
        return (
          <div className="jrpg-chapter-reveal">
            <div className="reveal-sub">SYSTEM CORE</div>
            <div className="reveal-main-bar">
              <div className="reveal-line primary-block">PHILOSOPHICAL</div>
              <div className="reveal-line secondary-block">JOURNEY</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Background canvas particle system */}
      <ButterflyCanvas activeTheme={activeTheme} />
      
      {/* Surreal background floating quotes engine */}
      <FloatingQuotes activeTheme={activeTheme} />
      
      {/* Scanline CRT overlay */}
      <div className="global-overlay" />

      {/* Interactive Swipe Pull Handles */}
      {transitionStage === 'idle' && activeTheme >= 1 && activeTheme < 5 && !isDragging && !isResetting && (
        <div 
          className={`edge-pull-handle right theme-${activeTheme + 1}`}
          onClick={() => triggerSwipeTransition('right')}
          style={{ cursor: 'pointer' }}
        >
          <div className="edge-pull-handle-tab">
            <span className="edge-pull-arrow">»</span>
          </div>
          <span className="edge-pull-label">
            GO TO CHAPTER 0{activeTheme + 1}
          </span>
        </div>
      )}

      {transitionStage === 'idle' && activeTheme > 1 && !isDragging && !isResetting && (
        <div 
          className={`edge-pull-handle left theme-${activeTheme - 1}`}
          onClick={() => triggerSwipeTransition('left')}
          style={{ cursor: 'pointer' }}
        >
          <div className="edge-pull-handle-tab">
            <span className="edge-pull-arrow">«</span>
          </div>
          <span className="edge-pull-label">
            GO TO CHAPTER 0{activeTheme - 1}
          </span>
        </div>
      )}

      {/* Dynamic Swipe Shutter Overlay (Tracks dragging) */}
      {(isDragging || isResetting || dragWidth > 0) && (() => {
        const targetChapter = dragSide === 'right' ? activeTheme + 1 : activeTheme - 1;
        const isActive = dragWidth > 0;
        return (
          <div 
            className={`swipe-shutter-overlay ${dragSide || (dragWidth > 0 ? 'right' : '')} theme-${targetChapter} ${isActive ? 'active' : ''}`}
            style={{
              background: 'var(--background-image)',
              borderColor: 'var(--primary-color)'
            }}
          >
            <div className="swipe-shutter-content" style={{
              borderColor: 'var(--primary-color)',
              boxShadow: `8px 8px 0px var(--secondary-color)`,
              color: 'var(--text-color)'
            }}>
              {dragSide === 'right' ? `Loading Chapter 0${activeTheme + 1}` : `Back to Chapter 0${activeTheme - 1}`}
            </div>
          </div>
        );
      })()}

      {/* JRPG Staggered 5-Stripe Shutter Transition Overlay - Always Mounted */}
      <div className={`shutter-overlay stage-${transitionStage}`}>
        {STRIPES_CONFIG.map((stripe) => {
          // Stripe is selected if we selected its matching chapter,
          // or if we selected Main Menu (0), the middle stripe 3 acts as the selected transition channel
          const isSelected = targetTheme === stripe.id || (targetTheme === 0 && stripe.id === 3);
          const isExpanding = isSelected && (transitionStage === 'separating' || transitionStage === 'exiting');
          // For stripes 3, 4, 5: neutralize the parent's -20vw left shift during expansion to center the JRPG titles in viewport
          const contentLeft = isExpanding && stripe.id >= 3 ? '20vw' : `calc(-1 * ${stripe.left})`;

          return (
            <div
              key={stripe.id}
              className={`shutter-strip ${isSelected ? 'selected' : 'non-selected'}`}
              style={{
                left: stripe.left,
                width: stripe.width,
                backgroundColor: getStripeColor(stripe.id),
                animationDelay: transitionStage === 'entering' ? stripe.delay : '0s',
                transitionDelay: transitionStage === 'entering' ? stripe.delay : '0s',
                overflow: 'hidden'
              }}
            >
              {/* Live spatial masking container (un-skewed at 24deg and horizontally offset) */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: contentLeft,
                  width: '100vw',
                  height: '100%',
                  transform: 'skewX(24deg)', // un-skew the content
                  pointerEvents: 'none',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className={`theme-${stripe.id}`}
              >
                {/* High-fidelity chapter-specific backdrop and JRPG reveal content */}
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'var(--background-image)', 
                  color: 'var(--text-color)', 
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  {/* Render giant JRPG-style chapter title card when stripe is selected and expanding */}
                  {isSelected && (transitionStage === 'separating' || transitionStage === 'exiting') && (
                    renderChapterReveal(targetTheme)
                  )}
                </div>
              </div>

              {/* Heavy black panel outline overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '4px',
                height: '100%',
                backgroundColor: 'var(--border-color)',
                zIndex: 5
              }} />

              {/* Rotated strip label */}
              <div 
                className="shutter-strip-label"
                style={{
                  borderColor: getStripeColor(stripe.id),
                  color: '#fff'
                }}
              >
                {stripe.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Header */}
      <header style={{
        zIndex: 10,
        padding: '1.2rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(5, 8, 17, 0.2)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-color)',
        transition: 'all 0.6s ease'
      }}>
        <div 
          onClick={() => handleSelectChapter(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-headline)',
            fontWeight: 900,
            fontSize: '1.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          <Compass size={22} className="spin-hover-anim" style={{ color: 'var(--primary-color)' }} />
          <span>WESTERN <span style={{ color: 'var(--secondary-color)' }}>PHILOSOPHY</span></span>
        </div>

        {/* Dynamic Status / Breadcrumb in monospace */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.95rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--secondary-color)',
          textTransform: 'uppercase'
        }}>
          <Star size={14} className="spin-hover-anim" />
          <span>STATUS: {getChapterName(activeTheme)}</span>
        </div>

        {/* Quick Route Buttons */}
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          {activeTheme !== 0 && (
            <button 
              className="custom-btn" 
              onClick={() => handleSelectChapter(0)}
              style={{
                padding: '0.4rem 1.2rem',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Home size={14} />
              <span>Menu</span>
            </button>
          )}

          {/* Quick Chapter Hop dropdown dots */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {[1, 2, 3, 4, 5].map((chapterId) => (
              <div
                key={chapterId}
                onClick={() => handleSelectChapter(chapterId)}
                title={getChapterName(chapterId)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: activeTheme === chapterId ? 'var(--primary-color)' : 'rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  border: activeTheme === chapterId ? '2px solid var(--text-color)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main Pages Content */}
      <main style={{
        flexGrow: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem',
        zIndex: 5
      }}>
        {activeTheme === 0 && <MainMenu onSelectChapter={handleSelectChapter} />}
        {activeTheme === 1 && <RabbitHole />}
        {activeTheme === 2 && <GlassInsects />}
        {activeTheme === 3 && <Jabberwocky />}
        {activeTheme === 4 && <OwnInvention />}
        {activeTheme === 5 && <WhichDreamedIt />}
      </main>

      {/* Footer copyright */}
      <footer style={{
        zIndex: 10,
        padding: '1.5rem 2rem',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        opacity: 0.6,
        borderTop: '1px solid var(--border-color)',
        marginTop: 'auto'
      }}>
        <div>// "LIVE HAPPILY!" // DESIGN INSPIRED BY PERSONA & METAPHOR // 2026</div>
      </footer>

      {/* Embedded animations styles */}
      <style>{`
        @keyframes glitch-flash {
          0%, 100% { opacity: 0.8; background: #000; }
          50% { opacity: 0.9; background: #222; }
        }
        .spin-hover-anim:hover {
          transform: rotate(180deg);
          transition: transform 0.6s ease;
        }
      `}</style>
    </div>
  );
}
