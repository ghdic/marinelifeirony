/*
단어 검색 결과를 파싱하는 모듈

보조사전의 API 검색 결과는 HTML 형태로 떨어진다.
요청 예) http://endic.naver.com/searchAssistDict.nhn?query=dictionary

이 모듈에서는 검색 결과를 파싱해 JSON 형태로 반환한다.
임의의 DOM을 생성해 HTML을 넣은 후,
jquery 셀렉터로 값을 가져오는 방식으로 파싱한다.
*/


(function() {
  this.define('resultHtmlParser', function($$wordParser, $$meaningParser) {
    var init, parseHtmlToData, readyParsing, reset, _$meaning, _$word, _$wrapper;
    _$wrapper = null;
    _$word = null;
    _$meaning = null;
    init = function() {
      return _$wrapper = $("<div>");
    };
    readyParsing = function(html) {
      _$wrapper.html(html);
      _$word = _$wrapper.find("h3");
      return _$meaning = _$wrapper.find(".box_a");
    };
    parseHtmlToData = function() {
      var i, result, wordData, _i, _ref;
      result = [];
      for (i = _i = 0, _ref = _$word.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        $$wordParser.setWrapper(_$word.get(i));
        $$meaningParser.setWrapper(_$meaning.get(i));
        wordData = $$wordParser.parse();
        wordData.meanings = $$meaningParser.parse();
        result.push(wordData);
      }
      return {
        result: result
      };
    };
    reset = function() {
      _$wrapper.remove();
      _$word = null;
      return _$meaning = null;
    };
    init();
    return this.exports = {
      parse: function(html) {
        var parsed;
        readyParsing(html);
        parsed = parseHtmlToData();
        reset();
        return parsed;
      }
    };
  });

}).call(this);
