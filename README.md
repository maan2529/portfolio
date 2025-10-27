# Portfolio Website

A modern, performant portfolio website built with React, Vite, and optimized scroll animations.

## Features

- **Smooth Scrolling**: Powered by Locomotive Scroll with GSAP ScrollTrigger integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Efficient scroll management with centralized context
- **Modern Stack**: React 19, Vite, GSAP, Tailwind CSS

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP with ScrollTrigger
- **Smooth Scrolling**: Locomotive Scroll
- **Build Tool**: Vite

## Scroll Setup

The project uses a centralized scroll management system:

1. **ScrollProvider Context** (`src/context/ScrollProvider.jsx`): Manages Locomotive Scroll and ScrollTrigger globally
2. **Centralized Configuration**: All ScrollTrigger instances inherit the same scroller and settings
3. **Clean Components**: Components use `useScroll()` hook for scroll state without complex setup logic

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── context/
│   └── ScrollProvider.jsx    # Centralized scroll management
├── components/
│   ├── About.jsx            # About section with pinned elements
│   ├── Projects.jsx         # Projects section with horizontal scroll
│   ├── Hero.jsx             # Hero section
│   └── ...
└── App.jsx                  # Main app with ScrollProvider
```

## ScrollTrigger Integration

All scroll animations are managed through the ScrollProvider context, which:

- Initializes Locomotive Scroll once
- Sets up ScrollTrigger proxy for seamless integration
- Provides `isReady` state for component synchronization
- Handles cleanup automatically
- Supports responsive breakpoints

## Deployment

The setup is optimized for hosting platforms and includes:

- Single refresh cycle to prevent layout thrashing
- Proper cleanup to avoid memory leaks
- SSR-compatible initialization
- Optimized bundle size (removed unused libraries)
