/*
크롬 익스텐션의 로컬 스토리지
*/


(function() {
  this.define('storage', function() {
    return this.exports = {
      set: function(key, value) {
        var deferred, items;
        deferred = Q.defer();
        items = {};
        items[key] = value;
        if (chrome.storage) {
          chrome.storage.local.set(items, function() {
            return deferred.resolve();
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      },
      get: function(key) {
        var deferred;
        deferred = Q.defer();
        if (chrome.storage) {
          chrome.storage.local.get(key, function(items) {
            return deferred.resolve(items[key]);
          });
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      }
    };
  });

}).call(this);
