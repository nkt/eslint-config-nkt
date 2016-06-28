/**
 * JSX
 */
module.exports = {
  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': [2, 'never'],

  // Validate closing bracket location in JSX
  'react/jsx-closing-bracket-location': [2, { 'location': 'tag-aligned' }],

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  'react/jsx-curly-spacing': [2, 'never'],

  // Enforce or disallow spaces around equal signs in JSX attributes
  'react/jsx-equals-spacing': [2, 'never'],

  // Restrict file extensions that may contain JSX
  'react/jsx-filename-extension': [2, { 'extensions': ['js', 'ts'] }],

  // Enforce position of the first prop in JSX
  'react/jsx-first-prop-new-line': [2, 'multiline'],

  // Enforce event handler naming conventions in JSX
  'react/jsx-handler-names': [2, {
    'eventHandlerPrefix': 'handle',
    'eventHandlerPropPrefix': 'on'
  }],

  // Validate JSX indentation
  'react/jsx-indent': [2, 2],

  // Validate props indentation in JSX
  'react/jsx-indent-props': [2, 2],

  // Validate JSX has key prop when in array or iterator
  'react/jsx-key': 2,

  // Limit maximum of props on a single line in JSX
  'react/jsx-max-props-per-line': [2, { 'maximum': 4 }],

  // Prevent usage of .bind() and arrow functions in JSX props
  'react/jsx-no-bind': 2,

  // Prevent duplicate props in JSX
  'react/jsx-no-duplicate-props': [2, { 'ignoreCase': true }],

  // Prevent usage of unwrapped JSX strings
  'react/jsx-no-literals': 0,

  // Prevent usage of unsafe target='_blank'
  'react/jsx-no-target-blank': 2,

  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 2,

  // Enforce PascalCase for user-defined JSX components
  'react/jsx-pascal-case': 2,

  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 0,

  // Validate spacing before closing bracket in JSX
  'react/jsx-space-before-closing': 2,

  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 2,

  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 2
};
