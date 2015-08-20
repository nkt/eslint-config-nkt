var assign = require('../../utils/assign');

module.exports = assign.apply(null, [
  require('./possible-errors'),
  require('./best-practices'),
  require('./strict-mode'),
  require('./variables'),
  require('./node'),
  require('./stylistic-issues'),
  require('./es2015')
]);
