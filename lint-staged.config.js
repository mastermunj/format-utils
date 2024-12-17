module.exports = {
  'package.json': 'sort-package-json',
  '*.{ts,tsx}': 'eslint . --fix',
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json',
};
