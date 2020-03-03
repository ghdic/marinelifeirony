/*
캐시를 위한 유틸리티
*/


(function() {
  this.define('cache', function() {
    var Cache;
    Cache = (function() {
      function Cache(maxSize) {
        if (maxSize == null) {
          maxSize = 30;
        }
        this.maxSize = maxSize;
        this.map = {};
        this.keys = [];
      }

      Cache.prototype.add = function(key, val) {
        var firstKey;
        if (!_.contains(this.keys, key)) {
          this.keys.push(key);
        }
        this.map[key] = val;
        if (this.keys.length > this.maxSize) {
          firstKey = this.keys.shift();
          return delete this.map[firstKey];
        }
      };

      Cache.prototype.get = function(key) {
        return this.map[key];
      };

      Cache.prototype.getLastKey = function() {
        return _.last(this.keys);
      };

      Cache.prototype.getLast = function() {
        return this.get(this.getLastKey());
      };

      return Cache;

    })();
    return this.exports = {
      create: function(options) {
        return new Cache(options);
      }
    };
  });

}).call(this);
