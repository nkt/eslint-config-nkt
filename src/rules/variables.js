/**
 * Variables
 */
module.exports = {
  // enforce or disallow variable initializations at definition
  'init-declarations': 2,

  // disallow the catch clause parameter name being the same as a variable in the outer scope
  'no-catch-shadow': 2,

  // disallow deletion of variables (recommended)
  'no-delete-var': 2,

  // disallow labels that share a name with a variable
  'no-label-var': 2,

  // disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 2,

  // disallow declaration of variables already declared in the outer scope
  'no-shadow': 2,

  // disallow use of undefined when initializing variables
  'no-undef-init': 2,

  // disallow use of undeclared variables unless mentioned in a /*global */ block (recommended)
  'no-undef': 2,

  // disallow use of undefined variable
  'no-undefined': 2,

  // disallow declaration of variables that are not used in the code (recommended)
  'no-unused-vars': 2,

  // disallow use of variables before they are defined
  'no-use-before-define': 2
};
