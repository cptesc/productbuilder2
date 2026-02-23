# Lotto Number Generator - Modern Edition

## Overview
A high-performance, visually appealing Lotto Number Generator built with modern web standards (ES Modules, Web Components, and CSS Baseline features). It provides an immersive "drawing" experience with smooth animations and a vibrant design.

## Features
- **Immersive Drawing Experience**: Instead of instant display, numbers "roll" or appear with animations.
- **Dynamic Color Coding**: Balls are color-coded based on their number range (standard lotto style).
- **Responsive Layout**: Works perfectly on mobile, tablet, and desktop using Container Queries and Flexbox.
- **History Tracking**: Keeps track of recent draws during the session.
- **Interactive UI**: Hover effects, tactile buttons, and glassmorphism elements.

## Design Specification
- **Typography**: Expressive sans-serif fonts (e.g., 'Inter' or system defaults) with emphasized font sizes for the numbers.
- **Color Palette**: Vibrant OKLCH colors for balls (1-10: Yellow, 11-20: Blue, 21-30: Red, 31-40: Gray, 41-45: Green).
- **Texture**: Subtle noise texture on the background for a premium feel.
- **Shadows**: Multi-layered soft shadows to create depth (lifted cards).
- **Interactivity**: Glow effects on buttons and interactive elements.

## Tech Stack
- **HTML5**: Semantic structure.
- **CSS**: Modern features (OKLCH, `:has()`, Cascade Layers, Variables).
- **JavaScript**: ES Modules, Web Components (Custom Elements), Shadow DOM.

## Development Plan
1. **[Current] Update Blueprint**: Define the vision and technical path.
2. **Refactor HTML**: Set up the container for the Web Component and main UI.
3. **Enhance CSS**: Implement the global styles, theme variables, and animations.
4. **Implement Web Components**:
    - `<lotto-ball>`: A reusable component for individual numbers with dynamic styling.
    - `<lotto-draw>`: A component to manage the drawing sequence.
5. **Update Logic (main.js)**: Orchestrate the drawing process and history management.
6. **Validation**: Check for errors and ensure smooth performance in the preview.
