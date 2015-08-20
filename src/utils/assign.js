'use strict';

function assign(target) {
  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var item = Object(arguments[i]);
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        to[key] = item[key];
      }
    }
  }

  return to;
}

module.exports = assign;
