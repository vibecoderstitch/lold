Edited README.md

# ⚡ SOLIPSISM-PUNK // WESTERN PHILOSOPHY ⚡

> **A theatrical JRPG-inspired interactive engine mapping the history of Western Philosophy.**  
> *Inspired by the bold, kinetic art direction of Persona 5 and Metaphor: ReFantazio, blending heavy academic thought with vapor-punk, glitch, and scholarly minimal aesthetics.*

🔗 **[Live Demo / Deployed App](https://vibecoderstitch.github.io/lold/)** | ⚙️ **[Google Stitch Prototype](https://stitch.withgoogle.com/projects/14254639833327776468)**

---

## 🎨 The Aesthetic Concept

Philosophy is not a dry graveyard of textbooks—it is a battleground of radical, reality-shattering ideas. **SOLIPSISM-PUNK** visualizes this intellectual combat by turning major historical epochs into playable digital worlds.

The interface breaks away from traditional static grids, utilizing **asymmetric axes (skewed at -12°)**, hyper-contrasted color palettes, scanline CRT filters, and hardware-accelerated dramatic curtain transitions that evoke the immediate visual weight of a premium Atlus console game.

---

## 🧭 Playable Chapters

Each chapter is treated as an isolated visual timeline with its own tailored layouts and custom interactive components:

### 🟢 Chapter 01 // Antiquity (Plato & Aristotle)
* **Theme**: *Sweet Dreams* (Mint Green, Lilac, and Soft Chalk White).
* **Core Interface**: **Dialogue HUD**—a visual novel interface rendered with a classical painting backdrop of *Plato's Cave*, complete with Socrates logs and a compact Bento grid.

### 🔵 Chapter 02 // Modernity (Descartes & Hume)
* **Theme**: *Radical Doubt* (Vapor-Punk Neon Pink, Lime Green, and Deep Midnight).
* **Core Interface**: **Doubt Wheel**—an interactive selection dial for empirical quotes, featuring center-aligned skewed philosopher cards with custom padding.

### 🟡 Chapter 03 // German Idealism (Kant & Hegel)
* **Theme**: *Scholarly Minimalism* (Warm Amber Gold, Crimson Red, and Charcoal).
* **Core Interface**: **Double-Wing Cockpit**—a symmetrical cockpit layout grouping Kant + Shards on the left and Hegel + Monologues on the right, backed by a borderless watermark of the *Critique of Pure Reason* title page.

### 🔴 Chapter 04 // Analytical Philosophy (Wittgenstein & Russell)
* **Theme**: *Limits of Language* (Velvet Red, Neon Green, and Industrial Charcoal).
* **Core Interface**: **Logical Console**—a vintage retro diagnostic terminal displaying high-contrast quotes (`#130e01`) alongside a dedicated data window for the *Tractatus Logico-Philosophicus* logic propositions.

---

## 🚀 Technical Features & Optimization

This project is built to deliver smooth console-grade performance directly in the web browser:

* **Hardware-Accelerated Transitions (GPU-Driven)**: All major transitions (side swipe curtains and staggered 5-stripe JRPG animations) are fully powered by GPU composite layers using `transform: translate3d` and `scaleX` instead of CPU-bound layout properties like `width` or `left`. This completely eliminates layout reflows, ensuring **buttery-smooth 60fps execution**.
* **Contrast-Optimized Typography**: A meticulous typographic layout pairing highly legible, heavy display grotesque fonts (`Outfit` & `Anybody`) with elegant, classical book-print serifs (`EB Garamond`) for scholarly gravity.
* **Dynamic Variable Styling**: Skew and layout coordinates are synchronized globally via CSS custom variables (such as `--curtain-skew`), allowing custom chapter aesthetics to blend seamlessly with motion animations.

---

## 🧠 Inspirations & References

* **Persona 5 & Metaphor: ReFantazio** — The foundational UI reference for dynamic asymmetrical panels, stark high-contrast color choices, and heavy typographic branding.
* **Subarashiki Hibi** — A subtle aesthetic nod in the particle system (drifting neon glitched butterflies), sky-blue imagery, and solipsistic themes exploring the limits of logic and language.
* **Ludwig Wittgenstein** — The logical backbone of our analytical console layout.

---

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/solipsism-punk.git
   cd solipsism-punk
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

// "LIVE HAPPILY!" // DESIGN INSPIRED BY PERSONA & METAPHOR // 2026 //
