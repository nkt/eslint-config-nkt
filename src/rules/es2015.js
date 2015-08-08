/**
 * ES2015
 */
module.exports = {
  // require parens in arrow function arguments
  // disabled due async/await support
  'arrow-parens': [0, 'always'],

  // require space before/after arrow function's arrow
  'arrow-spacing': [2, {
    'before': true,
    'after': true
  }],

  // verify calls of super() in constructors
  'constructor-super': 2,

  // enforce spacing around the * in generator functions
  // disabled due async/await support
  'generator-star-spacing': [0, 'before'],

  // disallow modifying variables of class declarations
  'no-class-assign': 2,

  // disallow modifying variables that are declared using const
  'no-const-assign': 2,

  // disallow use of this/super before calling super() in constructors.
  'no-this-before-super': 2,

  // require let or const instead of var
  'no-var': 2,

  // require method and property shorthand syntax for object literals
  'object-shorthand': 2,

  // suggest using const declaration for variables that are never modified after declared
  'prefer-const': 2,

  // suggest using the spread operator instead of .apply().
  'prefer-spread': 2,

  // suggest using Reflect methods where applicable
  'prefer-reflect': 0,

  // disallow generator functions that do not have yield
  'require-yield': 2
};
