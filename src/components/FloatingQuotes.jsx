import React, { useState, useEffect } from 'react';

const QUOTES_POOL = [
  // Classical & Modern Philosophy Quotes
  { text: "The measure of a man is what he does with power.", author: "Plato", category: "philosophy" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", category: "philosophy" },
  { text: "I think, therefore I am.", author: "René Descartes", category: "philosophy" },
  { text: "A wise man proportions his belief to the evidence.", author: "David Hume", category: "philosophy" },
  { text: "Two things fill the mind with ever new and increasing admiration: the starry heavens above and the moral law within.", author: "Immanuel Kant", category: "philosophy" },
  { text: "The rational is real, and the real is rational.", author: "G. W. F. Hegel", category: "philosophy" },
  { text: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell", category: "philosophy" },
  { text: "We must grasp the absolute necessity of the contingency of everything.", author: "Quentin Meillassoux", category: "philosophy" },
  { text: "Real objects withdraw from all relation, hidden in an obsidian dark.", author: "Graham Harman", category: "philosophy" },
  
  // Wittgenstein Tractatus quotes
  { text: "The limits of my language mean the limits of my world.", author: "Wittgenstein (5.6)", category: "philosophy" },
  { text: "The world is everything that is the case.", author: "Wittgenstein (1)", category: "philosophy" },
  { text: "What we cannot speak about we must pass over in silence.", author: "Wittgenstein (7)", category: "philosophy" },
  { text: "The world of the happy man is a different one from that of the unhappy man.", author: "Wittgenstein (6.43)", category: "philosophy" },
  { text: "Death is not an event in life: we do not live to experience death.", author: "Wittgenstein (6.4311)", category: "philosophy" },
  { text: "The subject does not belong to the world but it is a limit of the world.", author: "Wittgenstein (5.632)", category: "philosophy" },
  { text: "If a question can be framed at all, it is also possible to answer it.", author: "Wittgenstein (6.5)", category: "philosophy" }
];

export default function FloatingQuotes({ activeTheme }) {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: '20%', left: '10%', rotation: '2deg' });

  useEffect(() => {
    // Show first quote after a short delay
    const initialTimeout = setTimeout(spawnQuote, 2000);
    
    // Interval loop to rotate quotes
    const interval = setInterval(() => {
      setVisible(false);
      // Wait for fade out, then spawn new quote
      setTimeout(spawnQuote, 1000);
    }, 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [activeTheme]);

  const spawnQuote = () => {
    // Pick random quote
    const randQuote = QUOTES_POOL[Math.floor(Math.random() * QUOTES_POOL.length)];
    setCurrentQuote(randQuote);

    // Randomize positioning coordinates avoiding center
    const topVal = 12 + Math.floor(Math.random() * 65); // 12% to 77%
    const side = Math.random() < 0.5 ? 'left' : 'right';
    let leftVal = 'auto';
    let rightVal = 'auto';

    if (side === 'left') {
      leftVal = `${2 + Math.floor(Math.random() * 8)}%`; // 2% to 10% from the left
    } else {
      rightVal = `${2 + Math.floor(Math.random() * 8)}%`; // 2% to 10% from the right
    }

    const rotVal = -6 + Math.floor(Math.random() * 12); // -6deg to +6deg

    setPosition({
      top: `${topVal}%`,
      left: leftVal,
      right: rightVal,
      rotation: `${rotVal}deg`
    });
    setVisible(true);
  };

  if (!currentQuote) return null;

  // Determine dynamic typography style based on chapter theme
  const getTypographyStyle = () => {
    switch (activeTheme) {
      case 1: // Sweet Dreams (Rabbit-Hole)
        return {
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          color: 'var(--primary-color)',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
          letterSpacing: '0.02em'
        };
      case 2: // Glitch Vapor-punk (Own Invention)
        return {
          fontFamily: 'var(--font-mono)',
          fontWeight: 'bold',
          color: 'var(--secondary-color)',
          fontSize: 'clamp(0.95rem, 2.2vw, 1.5rem)',
          letterSpacing: '0.05em',
          textShadow: '0 0 10px rgba(255,20,147,0.3)'
        };
      case 3: // Velvet Abyss (Glass Insects)
        return {
          fontFamily: 'var(--font-headline)',
          color: 'var(--secondary-color)',
          fontSize: 'clamp(1rem, 2.2vw, 1.6rem)',
          letterSpacing: '0.1em'
        };
      case 4: // Velvet Rooftop Collapse (Jabberwocky I)
        return {
          fontFamily: 'var(--font-mono)',
          color: 'var(--primary-color)',
          fontSize: 'clamp(0.95rem, 2vw, 1.5rem)',
          letterSpacing: '0.15em'
        };
      case 5: // Mirror Solipsism (Which Dreamed It)
        return {
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          color: 'var(--secondary-color)',
          fontSize: 'clamp(1.05rem, 2.4vw, 1.7rem)',
          letterSpacing: '0.01em'
        };
      default: // Core Hub
        return {
          fontFamily: 'var(--font-headline)',
          fontStyle: 'normal',
          color: 'var(--primary-color)',
          fontSize: 'clamp(1.1rem, 2.2vw, 1.9rem)',
          opacity: 0.8
        };
    }
  };

  const textStyle = getTypographyStyle();

  return (
    <div
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        right: position.right,
        transform: `rotate(${position.rotation})`,
        zIndex: 1, // behind panels, above butterfly canvas
        pointerEvents: 'none',
        transition: 'opacity 1s ease-in-out',
        opacity: visible ? 0.32 : 0, // increased opacity from 0.08 to 0.32
        maxWidth: '320px', // narrowed from 480px to 320px
        padding: '1rem',
        userSelect: 'none'
      }}
    >
      <p style={{
        ...textStyle,
        margin: 0,
        lineHeight: '1.4'
      }}>
        "{currentQuote.text}"
      </p>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        display: 'block',
        marginTop: '0.5rem',
        opacity: 0.6,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--text-color)'
      }}>
        // {currentQuote.author}
      </span>
    </div>
  );
}
