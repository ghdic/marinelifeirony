/*
애널리틱스 수집 모듈

모든 애널리틱스 지표는 백그라운드에서 처리한다.
뷰어나 다른 모듈에서는 바로 수집하는 대신 백그라운드로 메시지를 보낸다.
*/


(function() {
  this.define('analyticsTracker', function($$constant, $$uuid, $$storage, $$message) {
    var startTracking, trackEvent, whenEventTrackingRequested, whenPageTrackingRequested;
    whenEventTrackingRequested = $$message.createListenerToExtension('A:eventTrackingRequested');
    whenPageTrackingRequested = $$message.createListenerToExtension('A:pageTrackingRequested');
    startTracking = function(clientId) {
      
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ;
      this.ga('create', $$constant.ANALYTICS_ID, {
        'storage': 'none',
        'clientId': clientId
      });
      this.ga('set', 'forceSSL', true);
      this.ga('set', 'checkProtocolTask', null);
      return this.ga('send', 'pageview', {
        useBeacon: true
      });
    };
    trackEvent = function(eventString, referrer) {
      var action, category, label, _ref;
      if (referrer == null) {
        referrer = '';
      }
      _ref = eventString.split(':'), category = _ref[0], action = _ref[1], label = _ref[2];
      this.ga('set', 'referrer', referrer);
      return this.ga('send', 'event', category, action, label, {
        useBeacon: true
      });
    };
    return $$storage.get('clientId').then(function(clientId) {
      if (clientId) {
        return clientId;
      }
      return $$storage.set('clientId', $$uuid.generateGuid()).then(function() {
        return $$storage.get('clientId');
      });
    }).then(function(clientId) {
      startTracking(clientId);
      whenEventTrackingRequested(function(data) {
        return trackEvent(data.eventString, data.referrer);
      });
      return whenPageTrackingRequested(function(pageUrl) {
        return this.ga('send', 'pageview', pageUrl, {
          useBeacon: true
        });
      });
    });
  });

}).call(this);
