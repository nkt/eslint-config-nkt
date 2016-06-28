const eslint = require('./rules/eslint');

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  rules: Object.assign({}, eslint)
};
