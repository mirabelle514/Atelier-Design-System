const fs = require('fs');
const path = require('path');

const colors = require('./src/colors');
const typography = require('./src/typography');
const spacing = require('./src/spacing');

const tokens = {
  ...colors,
  ...typography,
  ...spacing
};

// Ensure dist directories exist
const distDirs = ['dist', 'dist/css', 'dist/js', 'dist/json'];
distDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate CSS custom properties
const cssTokens = Object.entries(tokens.atelier)
  .map(([key, value]) => `  --atelier-${key}: ${value};`)
  .join('\n');

const cssContent = `:root {\n${cssTokens}\n}`;

// Generate JavaScript tokens
const jsContent = `export const atelierTokens = ${JSON.stringify(tokens, null, 2)};`;

// Generate JSON tokens
const jsonContent = JSON.stringify(tokens, null, 2);

// Write files
fs.writeFileSync('dist/css/tokens.css', cssContent);
fs.writeFileSync('dist/js/tokens.js', jsContent);
fs.writeFileSync('dist/json/tokens.json', jsonContent);

console.log('Atelier design tokens built successfully!');
