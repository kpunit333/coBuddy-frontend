import { Box } from '@chakra-ui/react';

/**
 * SparklingWatermark
 *
 * Generates a dense, repeating pattern of small squares with varying opacities
 * to create a professional "sparkling" depth effect across the entire UI.
 * This pattern is non-interactive and sits in front of all content.
 */
const SparklingWatermark = () => {
  // --- DEFINE THE PATTERN DENSITY AND VIBRATION ---
  
  // Grid 'tile' size (the repeating pattern block). Smaller = denser squares.
  const GRID_SIZE = 100;
  
  // Your professional, subtle violet shades from the previous theme discussion
  const VIOLET_800 = "#3d3470"; // The deep, legible text color
  const VIOLET_500 = "#8470ff"; // The primary, distinct lavender

  return (
    <Box
      // 1. OCCUPY THE ENTIRE VIEWPORT
      position="fixed"
      inset="0"
      zIndex="1000" // Sits on top of EVERYTHING
      
      // 2. DISABLE INTERACTION (The watermark is "ghosted")
      pointerEvents="none" 
      userSelect="none"
      
      // 3. GENERATE THE PATTERN ON A PSEUDO-ELEMENT (Highest Performance)
      _after={{
        content: '""',
        position: 'absolute',
        inset: '0',
        
        // Use a slight violet tint in light mode or deep indigo in dark mode
        _light: { opacity: "0.10" }, 
        _dark: { opacity: "0.07" },
        
        // --- THE "SPARKLING" SVG PATTERN ---
        // We define a repeating background image that uses SVG code directly.
        // We place small squares randomly within the grid to create "depth".
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${GRID_SIZE}' height='${GRID_SIZE}' viewBox='0 0 ${GRID_SIZE} ${GRID_SIZE}'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${VIOLET_800.substring(1)}' fill-opacity='0.4'%3E%3Cpath d='M0 0h2v2H0zM20 30h4v4h-4zM60 10h3v3h-3zM80 50h2v2h-2zM40 70h3v3h-3zM90 90h2v2h-2z'/%3E%3C/g%3E%3Cg fill='%23${VIOLET_500.substring(1)}' fill-opacity='0.8'%3E%3Cpath d='M10 10h1v1h-1zM45 45h2v2h-2zM75 75h1v1h-1zM25 80h2v2h-2zM15 55h1v1h-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        
        // Ensure the pattern is infinite and crisp
        backgroundRepeat: "repeat",
        imageRendering: "pixelated", // Keeps squares sharp
      }}
    />
  );
};

/**
 * GradientSquareWatermark
 * * Generates a high-performance, dense overlay of miniature gradient squares 
 * using a repeating SVG background pattern applied to a pseudo-element.
 * This pattern is non-interactive and adapts slightly to color modes.
 */
const GradientSquareWatermark = () => {
  // --- DEFINE THE PATTERN DENSITY AND DIMENSIONS ---
  
  // Grid 'tile' size (the repeating pattern block). Smaller = denser squares.
  const GRID_SIZE = 120;
  
  // The specific deep/midnight purples from your theme discussion
  const DEEP_VIOLET = "#0c002e"; // Vibe.900 (Shadow)
  const MIDNIGHT_PURPLE = "#1a004d"; // Vibe.800 ( royal Base)
  
  // Action/Gradient Colors (Brighter Violets for the "flicker" effect)
  const PRIMARY_VIOLET = "#8000ff"; // Vibe.500 (Primary)
  const ELECTRIC_VIOLET = "#a64dff"; // Vibe.400 (Bright)

  // Encode the colors so they can be safely inserted into the SVG URL
  const deep = encodeURIComponent(DEEP_VIOLET);
  const midnight = encodeURIComponent(MIDNIGHT_PURPLE);
  const primary = encodeURIComponent(PRIMARY_VIOLET);
  const electric = encodeURIComponent(ELECTRIC_VIOLET);

  return (
    <Box
      // 1. OCCUPY THE ENTIRE VIEWPORT
      position="fixed"
      inset="0"
      zIndex="1000" // Sits on top of EVERYTHING (modals, nav, etc.)
      
      // 2. DISABLE INTERACTION (The watermark must be "ghosted")
      pointerEvents="none" 
      userSelect="none"
      
      // 3. GENERATE THE PATTERN ON A PSEUDO-ELEMENT (Highest Performance)
      // This uses CSS variables and native browser rendering instead of React nodes.
      _after={{
        content: '""',
        position: 'absolute',
        inset: '0',
        
        // --- ADAPT OPACITY FOR COLOR MODE ---
        // Hardcoded opacities ensure the watermark is protective but not distracting.
        _light: { opacity: "0.08" }, // Subtler on white/light backgrounds
        _dark: { opacity: "0.05" }, // Deeply subtle on obsidian/dark backgrounds
        
        // --- THE DENSE GRADIENT SVG PATTERN ---
        // We define a single 120x120 SVG 'tile' with nested gradient definitions.
        // We then repeat small, varied squares randomly within that tile.
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${GRID_SIZE}' height='${GRID_SIZE}' viewBox='0 0 ${GRID_SIZE} ${GRID_SIZE}'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='${deep}'/%3E%3Cstop offset='100%25' stop-color='${midnight}'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='100%25' y1='0' x2='0' y2='100%25'%3E%3Cstop offset='0' stop-color='${primary}'/%3E%3Cstop offset='100%25' stop-color='${electric}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill-rule='evenodd'%3E%3Cg opacity='0.5' fill='url(%23a)'%3E%3Cpath d='M0 0h2v2H0zM20 20h3v3h-3zM80 80h2v2h-2zM10 60h3v3h-3zM50 10h1v1h-1zM110 40h2v2h-2z'/%3E%3C/g%3E%3Cg fill='url(%23b)'%3E%3Cpath d='M40 40h1v1h-1zM70 10h1v1h-1zM100 70h2v2h-2zM30 90h1v1h-1zM0 110h2v2h-2zM90 20h1v1h-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        
        // Ensure the pattern is infinite and crisp
        backgroundRepeat: "repeat",
        imageRendering: "pixelated", // Keeps squares sharp
      }}
    />
  );
};

/**
 * DiagonalGridWatermark
 * Creates a large, professional diagonal square grid across the viewport.
 * Uses a single repeating SVG tile for maximum browser performance.
 */
const DiagonalGridWatermark = () => {
  // --- CONFIGURATION ---
  // Size of the square tile. Larger = wider grid spacing.
  const GRID_SIZE = 120; 
  
  // Theme color from your "Vibe" scale (Deep Shadow / Royal Base)
  const GRID_COLOR = "#1a004d"; // vibe.900

  return (
    <Box
      position="fixed"
      inset="0"
      zIndex="0" // Sits behind the form but above the base background
      pointerEvents="none"
      userSelect="none"
      overflow="hidden"
      _after={{
        content: '""',
        position: 'absolute',
        inset: "-100%", // Oversized to handle the rotation without gaps
        
        // --- ADAPT OPACITY ---
        _light: { opacity: "0.05" },
        _dark: { opacity: "0.15" },

        // --- THE SVG GRID PATTERN ---
        // We draw two lines that meet at the corner to create a repeating square.
        // The rotation is handled via CSS for better control.
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${GRID_SIZE}' height='${GRID_SIZE}' viewBox='0 0 ${GRID_SIZE} ${GRID_SIZE}'%3E%3Cpath d='M${GRID_SIZE} 0 L0 0 0 ${GRID_SIZE}' fill='none' stroke='${encodeURIComponent(GRID_COLOR)}' stroke-width='1'/%3E%3C/svg%3E")`,
        
        // --- ROTATION FOR DIAGONAL EFFECT ---
        transform: "rotate(45deg)",
        backgroundRepeat: "repeat",
      }}
    />
  );
};

const NexusLogo = GradientSquareWatermark;

export default NexusLogo;