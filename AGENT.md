# Subarashiki Hibi "Solipsism-Punk" SPA - Agent Progress Log & Project Roadmap

This file is a comprehensive log of the project requirements, development milestones completed, architectural refinements, and suggested next steps for future developers or agents.

---

## 1. Project Requirements & Goals Set

The primary goal was to construct a highly immersive, single-page React visual companion for the psychological visual novel **«Subarashiki Hibi» (Wonderful Everyday)**.

### Target Specifications:
1.  **High-Fidelity Atlus Aesthetic**: Slanted shapes, brutalist geometry, dynamic HSL-based transitions, interactive menu overlays, custom font pairings, scanlines, and subtle CRT flicker.
2.  **Surreal Atmospheric Additions**: A particle canvas drifting background particles (butterflies, glass shards) and a background quote engine displaying Wittgenstein / Subahibi quotes in random positions.
3.  **Visual Novel Asset Mapping**: Inspect and extract authentic character sprites and game CGs from local assets and integrate them elegantly across chapter layouts.
4.  **Chapter Scope**: Create 5 distinct chapters with custom page designs:
    *   Chapter 1: Down the Rabbit-Hole
    *   Chapter 2: It's my Own Invention
    *   Chapter 3: Looking-glass Insects
    *   Chapter 4: Jabberwocky I
    *   Chapter 5: Which Dreamed It
5.  **Multi-Layout Configurations**: Allow each chapter page to toggle between 3 unique interactive layout modes (e.g. Bento grid, Novel text HUD, Retro simulated OS windows, Messiah dashboards, Mirror splits, Polaroid collages).
6.  **Atlus-Style Transition Shutter**: A staggered vertical entry transition containing 5 skewed columns representing the chapters that collapses non-chosen columns and expands/unskews the selected one.

---

## 2. Chronological Milestones Achieved

### Phase 1: Environment & Asset Mapping
*   Scaffolded Vite + React application and configured asset pipelines.
*   Extracted and inspected 13 high-resolution character sprites and CGs in `temp_source`.
*   Successfully copied and mapped:
    *   `Otonashi_Ayana.webp` (Ayana sprite) -> Main Menu aura display and Chapter 1 & 5 HUD panels.
    *   `hasaki_sprite.png` (Hasaki sprite) -> Chapter 5 layouts and displays.
    *   `Down_the_Rabbit_Hole_I.webp` & `II.webp` -> Chapter 1 backdrops and Novel illustrations.
    *   `Jabberwocky_II.webp` -> Chapter 2 retro windows and Chapter 4 rooftop displays.
    *   `one-of-my-favorite-cgs-from-subahibi-v0-qe0ki8eug5n91.webp` -> Chapter 3 Sunset painterly backdrop.

### Phase 2: Core Components & Layouts
*   Developed `ButterflyCanvas.jsx` to render lightweight 60fps thematic particles (triangles and butterflies).
*   Built `FloatingQuotes.jsx` to fade philosophical quotes at 7s intervals with randomized coordinates, rotations, and custom-scoped typographies matching each chapter.
*   Completed all 6 pages (`MainMenu.jsx` + 5 Chapter pages) supporting 15 total sub-panels (Retro windows, Terminal CLI, Tractatus ladder, Messiah dashboard, Mirror splits, etc.).

### Phase 3: Shutter Transition Overhaul & Layout Fixes
*   **Transition System Overhaul**: Replaced unstable mount-dependent keyframe animations with a bulletproof **CSS state machine** using an always-mounted `.shutter-overlay` in DOM. Created sequential stages: `idle -> entering -> separating -> exiting -> idle`.
*   **Instant-Snap Reset**: Configured `transition: none !important` on `stage-idle` to force the off-screen stripes to instantly snap back to their top positions, eliminating "slide-back" visual glitches.
*   **Atlus Chapter Reveals**: Replaced character sprites with huge, slanted, color-blocked JRPG Chapter Reveal Cards popping in as the chosen stripe expands to `140vw`.
*   **Stripe 3–5 Centering Bug Fix**: Resolved the horizontal spatial offset clipping issue. While keeping stripes 1 and 2 exactly as they were (per user requirements), we dynamically set the inner offset of stripes 3, 4, and 5 to `20vw` when expanding, perfectly centering their text in the viewport.

---

## 3. What is Left to Do & Future Roadmap

For future iterations or agents working on this codebase, the following features are highly recommended to expand the visual novel SPA into an award-winning web app:

### A. Dynamic Audio Engine (Highly Recommended)
*   **Objective**: Integrate sound effects and music matching the psychological Atlus aesthetic.
*   **Action Plan**:
    *   Import a glass-shattering sound effect or a heavy mechanical JRPG UI click sound.
    *   Trigger this audio programmatically inside `handleSelectChapter` in `src/App.jsx` at the exact frame `setTransitionStage('entering')` is fired.
    *   Include a toggle button in the navigation header to play/mute low-volume ambient tracks (e.g. *Subahibi* piano motifs).

### B. Mobile Skew Optimization
*   **Objective**: Maximize responsiveness of skewed transition stripes on small screens.
*   **Action Plan**:
    *   Add responsive CSS media queries inside `src/index.css` targeting `@media (max-width: 768px)`.
    *   Reduce the transition stripe skew angle from `-24deg` to `-8deg` or `0deg` on mobile screens to prevent severe cropping of text.
    *   Scale the horizontal offsets of stripes to prevent gaps on narrow viewports.

### C. Save State / Session Persistence
*   **Objective**: Persist the selected layout settings and active chapter path.
*   **Action Plan**:
    *   Utilize HTML5 `localStorage` in React hooks to save the user's active theme and selected panel configuration (e.g. if the user prefers Retro Windows in Chapter 2, save this layout index).
    *   Load these variables on mount in `App.jsx` to maintain a seamless session experience.
