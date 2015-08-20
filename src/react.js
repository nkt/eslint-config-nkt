var assign = require('./utils/assign');
var eslint = require('./rules/eslint');
var react = require('./rules/react');

module.exports = {
  rules: assign(eslint, react)
};
