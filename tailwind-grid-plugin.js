// tailwind-grid-plugin.js
console.log('[TAILWIND-PLUGIN] loaded');
module.exports = function ({ addUtilities }) {
  const gridUtilities = {};
  for (let i = 1; i <= 12; i++) {
    gridUtilities[`.grid-cols-${i}`] = { 'grid-template-columns': `repeat(${i}, minmax(0, 1fr))` };
  }
  const gapUtilities = {};
  for (let i = 0; i <= 12; i++) {
    gapUtilities[`.gap-${i}`] = { gap: i === 0 ? '0' : `calc(var(--spacing) * ${i})` };
  }
  addUtilities(gridUtilities, { variants: ['responsive'] });
  addUtilities(gapUtilities, { variants: ['responsive'] });
};
