function build(items) {
  var rules = {};
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var keys = Object.keys(item);
    for (var j = 0; j < keys.length; j++) {
      var key = keys[j];
      rules[key] = item[key];
    }
  }

  return rules;
}

module.exports = build([
  require('./possible-errors'),
  require('./best-practices'),
  require('./strict-mode'),
  require('./variables'),
  require('./node'),
  require('./stylistic-issues'),
  require('./es2015')
]);
