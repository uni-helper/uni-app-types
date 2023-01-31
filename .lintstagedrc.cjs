module.exports = {
  '*.md': 'markdownlint --fix',
  './types/**/*.{js,cjs,mjs,ts,cts,mts}': 'eslint --fix --cache --no-error-on-unmatched-pattern',
};
