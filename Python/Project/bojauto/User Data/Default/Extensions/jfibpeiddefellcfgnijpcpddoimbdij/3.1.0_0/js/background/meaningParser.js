/*
검색 결과의 '타입별 의미' 부분을 파싱하는 모듈
*/


(function() {
  this.define('meaningParser', function() {
    var find, getCurrentDataAndTryNext, getData, getDefinitions, getMoreDefinition, parseHtmlToData, reset, setWrapper, _$wrapper;
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
      var $current, datas;
      datas = [];
      $current = _$wrapper;
      getCurrentDataAndTryNext(datas, $current);
      return datas;
    };
    getCurrentDataAndTryNext = function(datas, $current) {
      if ($current.hasClass("box_a") || $current.hasClass("box_b") || $current.hasClass("box_c")) {
        datas.push(getData($current));
        return getCurrentDataAndTryNext(datas, $current.next());
      }
    };
    getData = function($current) {
      return {
        type: find($current, "h4 .fnt_k28", "text"),
        definitions: getDefinitions($current),
        moreDefinition: getMoreDefinition()
      };
    };
    getDefinitions = function($current) {
      var $defs, datas;
      datas = [];
      $defs = $current.find(".list_ex1 dt");
      $defs.each(function() {
        var $el, def, ex_en, ex_kr;
        $el = $(this);
        if ($el.hasClass("last")) {
          return;
        }
        def = find($el, "", "text");
        ex_en = ($el.next().is("dd") ? find($el.next(), "", "text") : void 0) || "";
        ex_kr = ($el.next().next().is("dd") ? find($el.next().next(), "", "text") : void 0) || "";
        return datas.push({
          def: def,
          ex_en: ex_en,
          ex_kr: ex_kr
        });
      });
      return datas;
    };
    getMoreDefinition = function() {
      var $more;
      $more = _$wrapper.find("dt.last");
      return {
        count: find($more, ".fnt_k14", "text"),
        url: find($more, ".fnt_k22 a", "href")
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
