# Anselo Portfolio - World Class Cinematic Experience

A high-end, award-winning style portfolio inspired by the raw energy of [Lando Norris](https://landonorris.com) and the refined cinematic eye of [Lol Crawley](https://lolcrawley.com).

## 🏆 "The Best" Upgrade Features

### 🎥 Global Cinematic Atmosphere
- **Noise & Grain Overlay:** A persistent, subtle film grain that adds texture and depth to every pixel, removing the "digital flatness" of standard websites.
- **Magnetic Fluid Cursor:** A custom cursor that tracks movement with physics-based springs and uses `mix-blend-difference` to invert colors dynamically over content.
- **Cursor-None Mode:** The default system cursor is hidden for complete immersion.
- **Cinematic Luxury Palette:** A refined high-contrast theme featuring Rich Black (#0A0A0A), Off-White (#F3F4F6), and Professional Amber Gold (#F59E0B) for maximum visibility and impact.

### 📸 "Shutter" Landing Sequence
- **High-Tension Counter:** A mono-spaced, tabular-nums loader that counts from 00 to 100 with randomized intervals for realism.
- **Shutter Reveal:** The screen physically "splits" open (shutter effect) using Framer Motion layout transitions, revealing the hero section underneath.
- **Sound Design Visuals:** Rapid-fire text flickering ("INITIALIZING", "EST 2026") simulates technical readouts.

### ⚡ Editorial Hero Section
- **Video Background Loop:** High-quality background video (`hero-loop.mp4`) providing dynamic visual context.
- **Massive Typography (15vw):** "ANSELO" spans the entire view width, creating an instant bold statement.
- **Card Reveal Scroll:** The content section slides up like a physical card over the fixed hero video, inspired by **Lol Crawley**.
- **Mix-Blend-Mode Styling:** Text interacts with the background video using difference blending.

### 📜 Digital Credentials
- **Dynamic Certificate Grid:** Automatically imports and displays professional certificates from the assets folder.
- **Holographic Cards:** Glassmorphism design with hover glow effects and 3D lift.
- **Smart Formatting:** Filename parsing to display clean, professional titles automatically.

### 📦 Resources & Downloads
- **Resume & CV Integration:** Direct download links integrated into Navbar, About Section, and Footer for easy access.
- **Visual Cues:** Animated arrow indicators on hover for all download links.

### 🖼️ Professional Work Grid
- **Cinematographer Layout:** Clean, grid-based presentation of work that lets the imagery speak for itself (Lol Crawley style).
- **Hover Interactions:** Cards lift and glow on hover, maintaining the "premium" feel without being distracting.

### 💎 Technical Stack Upgrades
- **Framer Motion AnimatePresence:** For seamless page transitions and entrance/exit effects.
- **React Hooks (useMotionValue, useSpring):** For 60fps physics-based cursor movement.
- **Tailwind JIT:** For arbitrary values (like `text-[15vw]`) and complex blending modes.
- **Vite Glob Imports:** Efficiently handling bulk asset loading for the certificate section.
