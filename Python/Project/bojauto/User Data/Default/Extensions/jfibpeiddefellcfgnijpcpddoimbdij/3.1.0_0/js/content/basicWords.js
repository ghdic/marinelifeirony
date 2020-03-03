/*
사전을 띄우지 않을 기본 단어를 정의한다.
*/


(function() {
  this.define('basicWords', function() {
    var BASIC_WORDS, _map;
    BASIC_WORDS = ['is', 'the', 'The', 'will', '전체', 'and', 'to', '있습니다', '제목없는 일정', 'of', 'for', 'com', 'you', 'with', 'that', '있는', '검색', 'your', 'http', 'https', 'this', 'This', 'in', '있다', '한글', 'from', '추천', 'data', '라이프', 'have', 'on', '하지만', '다음', '때문에', 'function', 'ㅋㅋ', 'ㅎㅎ', 'gg', 'name', '그냥', 'are', 'be', '네이버', 'as', '이전', 'not', 'can', '확인', 'We', 'we'];
    _map = _.object(BASIC_WORDS, _.map(BASIC_WORDS, function() {
      return true;
    }));
    return this.exports = {
      isnt: function(str) {
        return !_map[str];
      }
    };
  });

}).call(this);
