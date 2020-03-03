/*
애널리틱스

- 스크립트를 추가하면 해당 페이지 뷰 코드를 전달한다.
- 지표를 수집하고 싶은 버튼 엘리먼트에 `data-analytics-event="category:action:label"` 속성을 추가하면,
  클릭 시 지표를 수집한다.
- `$$analytics.trackEvent(eventString)`로 직접 호출할 수 있다.
*/


(function() {
  this.define('analytics', function($$message) {
    var sendEventTrackingRequested, sendPageTrackingRequested, _referer;
    _referer = location.href;
    sendEventTrackingRequested = $$message.createSenderToExtension('A:eventTrackingRequested');
    sendPageTrackingRequested = $$message.createSenderToExtension('A:pageTrackingRequested');
    $(document).on('mousedown', '[data-analytics-event]', function(e) {
      var $target;
      $target = $(e.currentTarget);
      return sendEventTrackingRequested({
        eventString: $target.attr('data-analytics-event'),
        referrer: _referer
      });
    });
    return this.exports = {
      trackEvent: function(eventString) {
        return sendEventTrackingRequested({
          eventString: eventString,
          referrer: _referer
        });
      },
      trackPage: sendPageTrackingRequested
    };
  });

}).call(this);
