const eslint = require('./rules/eslint');
const react = require('./rules/react');

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: { jsx: true }
  },
  rules: Object.assign({}, eslint, react)
};
