# Lotto Number Generator - Casino Edition

## Overview
A high-performance, visually appealing Lotto Number Generator inspired by casino slot machines and classic lottery drawings. It features a physical "lever" interaction and a "pouch" that ejects multiple sets of numbers simultaneously.

## Features
- **Slot Machine Lever**: The generation button is styled as a 3D lever that moves when clicked.
- **Lotto Pouch Animation**: Numbers are ejected from a central "pouch" icon with a dynamic "pop-out" effect.
- **5-Set Generation**: Each draw produces 5 distinct sets of 6 numbers for a complete experience.
- **Theme Switching**: Dark/Light mode persistence.
- **Dynamic Color Coding**: Balls color-coded by number range.
- **Responsive Layout**: Mobile-first design using modern CSS.

## Design Specification
- **Interactivity**: 
    - Lever "Pull" animation (active state).
    - Balls "flying" from the center pouch to their slots.
- **Layout**: 5 rows of combinations displayed in a sleek, glassmorphic container.
- **Color Palette**: Rich casino-inspired colors (Gold, Emerald, Deep Red) mixed with modern OKLCH themes.

## Tech Stack
- **HTML5/CSS3**: Custom properties, OKLCH, Grid/Flexbox.
- **JavaScript**: ES Modules, Web Components, Async/Await for timing.
- **Git**: Deployment and version control.

## Development Plan
1. **[Completed] Theme Switcher**: Dark/Light mode implementation.
2. **[Current] Casino Experience**:
    - Implement Slot Lever UI and Animation.
    - Create the "Lotto Pouch" visual container.
    - Update `main.js` to generate 5 sets and handle "ejection" animations.
3. **Refactor UI**: Ensure 5 sets fit perfectly on all screens.
4. **Validation**: Error checking and performance tuning.
