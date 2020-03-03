/*
검색 결과의 '단어 제목' 부분을 파싱하는 모듈
*/


(function() {
  this.define('wordParser', function() {
    var find, parseHtmlToData, reset, setWrapper, _$wrapper;
    _$wrapper = null;
    find = function(parent, selector, type) {
      var attr, host, href, target;
      target = (selector ? parent.find(selector) : void 0) || parent;
      host = "http://endic.naver.com";
      switch (type) {
        case "text":
          return target.text().trim();
        case "href":
          href = target.attr("href") || "";
          if (href) {
            href = host + href;
          }
          return href;
        default:
          attr = target.attr(type) || "";
          return attr;
      }
    };
    setWrapper = function(elWrapper) {
      return _$wrapper = $(elWrapper);
    };
    parseHtmlToData = function() {
      return {
        title: find(_$wrapper, ".t1 strong", "text") || find(_$wrapper, ".t1 a", "text"),
        number: find(_$wrapper, ".t1 sup", "text"),
        url: find(_$wrapper, ".t1 a", "href"),
        phonetic_symbol: find(_$wrapper, ".t2", "text"),
        pronunciation: find(_$wrapper, "#pron_en", "playlist")
      };
    };
    reset = function() {
      _$wrapper.remove();
      return _$wrapper = null;
    };
    return this.exports = {
      setWrapper: function(elWrapper) {
        return setWrapper(elWrapper);
      },
      parse: function() {
        var parsed;
        parsed = parseHtmlToData();
        reset();
        return parsed;
      }
    };
  });

}).call(this);
