#!/usr/bin/env node

const hexToRgb = (hex) => {
  const cleanedHex = hex.replace('#', '');

  const isValidHex = /^[0-9A-Fa-f]{6}$/i.test(cleanedHex);
  if (!isValidHex) {
    console.error("Invalid hex color. Please provide a valid 6-character hex code in the format #RRGGBB.");
    process.exit(1);
  }

  const r = parseInt(cleanedHex.substring(0, 2), 16);
  const g = parseInt(cleanedHex.substring(2, 4), 16);
  const b = parseInt(cleanedHex.substring(4, 6), 16);

  return { r, g, b };
};

const [hex] = process.argv.slice(2);

if (!hex) {
  console.error("Usage: hex2rgb-cli <hex>");
  process.exit(1);
}

const { r, g, b } = hexToRgb(hex);

console.log(`HEX: ${hex}`);
console.log(`RGB: (${r}, ${g}, ${b})`);

console.log(`\x1b[48;2;${r};${g};${b}m   COLOR   \x1b[0m`);