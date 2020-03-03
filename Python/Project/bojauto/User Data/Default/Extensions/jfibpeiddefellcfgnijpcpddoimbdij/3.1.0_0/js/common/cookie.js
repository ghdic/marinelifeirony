(function() {
  this.define('cookie', function($$constant) {
    return this.exports = {
      get: function(name) {
        var deferred;
        deferred = Q.defer();
        chrome.cookies.get({
          url: $$constant.API_URL,
          name: name
        }, function(cookie) {
          var cookieValue;
          cookieValue = (cookie && cookie.value) || null;
          return deferred.resolve(cookieValue);
        });
        return deferred.promise;
      },
      set: function(name, value) {
        var deferred;
        deferred = Q.defer();
        chrome.cookies.remove({
          url: $$constant.API_URL,
          name: name
        }, function() {
          return chrome.cookies.set({
            url: $$constant.API_URL,
            name: name,
            value: value
          }, function(cookie) {
            return deferred.resolve();
          });
        });
        return deferred.promise;
      }
    };
  });

}).call(this);
