/*
함수형 프로그래밍을 위한 유틸리티
*/


(function() {
  this.define('f', function() {
    return this.exports = {
      validator: function() {
        var funcs;
        funcs = _.toArray(arguments);
        return function() {
          var args;
          args = _.toArray(arguments);
          return _.every(funcs, function(func) {
            return func.apply(null, args);
          });
        };
      }
    };
  });

}).call(this);
