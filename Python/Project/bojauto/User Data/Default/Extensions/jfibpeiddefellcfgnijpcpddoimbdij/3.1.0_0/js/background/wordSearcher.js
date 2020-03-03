/*
API에 단어를 요청해 검색한다.
*/


(function() {
  this.define('wordSearcher', function($$cache, $$cookie, $$constant, $$resultHtmlParser) {
    var API_URL, createCacheKey, getDicTypeFromCookie, getIsEeFromCacheKey, getQueryFromCacheKey, searchWord, setDicTypeCookie, _recentQuery, _responseCache;
    API_URL = "http://endic.naver.com/searchAssistDict.nhn?query=";
    _responseCache = $$cache.create();
    _recentQuery = '';
    createCacheKey = function(query) {
      return getDicTypeFromCookie().then(function(isEE) {
        return "" + query + "_" + isEE;
      });
    };
    getDicTypeFromCookie = function() {
      return $$cookie.get($$constant.DIC_TYPE_COOKIE_NAME).then(function(value) {
        if (value == null) {
          value = 'N';
        }
        return value === 'Y';
      });
    };
    getQueryFromCacheKey = function(cacheKey) {
      if (cacheKey) {
        return _.first(cacheKey.split('_'));
      }
    };
    getIsEeFromCacheKey = function(cacheKey) {
      if (cacheKey) {
        return _.last(cacheKey.split('_')) === 'true';
      }
      return false;
    };
    setDicTypeCookie = function(isEE) {
      return $$cookie.set($$constant.DIC_TYPE_COOKIE_NAME, isEE ? 'Y' : 'N');
    };
    searchWord = function(query, callback) {
      return createCacheKey(query).then(function(cacheKey) {
        if (_responseCache.get(cacheKey)) {
          _recentQuery = getQueryFromCacheKey(cacheKey);
          return callback(_responseCache.get(cacheKey));
        }
        return $.ajax({
          url: "" + $$constant.API_URL + "?query=" + query,
          crossDomain: false,
          dataType: 'html',
          success: function(data) {
            var parsedData;
            parsedData = $$resultHtmlParser.parse(data);
            parsedData.query = query;
            parsedData.isEE = getIsEeFromCacheKey(cacheKey);
            _responseCache.add(cacheKey, parsedData);
            _recentQuery = query;
            return callback(parsedData);
          }
        });
      });
    };
    return this.exports = {
      searchWord: function(query, callback) {
        return searchWord(query, callback);
      },
      searchWordWithRecentQuery: function(callback) {
        return searchWord(_recentQuery, callback);
      },
      toggleDicType: function(isEE, callback) {
        var _this = this;
        return setDicTypeCookie(isEE).then(function() {
          return _this.searchWordWithRecentQuery(callback);
        });
      }
    };
  });

}).call(this);
