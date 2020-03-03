/*
브라우저에 액션에 의해 노출되는 팝업 페이지
*/


(function() {
  this.define('popup', function($$message, $$analytics, $$storage) {
    var VIEWER_MAX_HEIGHT, VIEWER_TOP_OFFSET, sendDicTypeToggled, sendQuerySubmitted, whenDicTypeToggled, whenWordSearched;
    VIEWER_TOP_OFFSET = 46;
    VIEWER_MAX_HEIGHT = 400;
    whenWordSearched = $$message.createListenerToExtension('P:wordSearched');
    whenDicTypeToggled = $$message.createListenerToWindow('T:dicTypeToggled');
    sendQuerySubmitted = $$message.createSenderToExtension('P:querySubmitted');
    sendDicTypeToggled = $$message.createSenderToExtension('P:dicTypeToggled');
    return angular.module('popupApp', []).controller('mainCtrl', function($scope) {
      var resizePopup;
      $scope.query = '';
      resizePopup = function(height) {
        var properHeight;
        properHeight = height > VIEWER_MAX_HEIGHT ? VIEWER_MAX_HEIGHT : height;
        $('#viewer').height(properHeight);
        return $(document.documentElement).css('height', "" + (VIEWER_TOP_OFFSET + properHeight) + "px");
      };
      $scope.search = function() {
        if (!$scope.query) {
          return;
        }
        $('.viewer-wrap').show();
        sendQuerySubmitted($scope.query);
        return $$analytics.trackEvent('popup:search');
      };
      $scope.selectQuery = function($event) {
        return $event.target.select();
      };
      return $('#query').focus();
    }).controller('viewerCtrl', function($scope) {
      var renderViewer;
      $scope.query = '';
      $scope.result = [];
      $scope.isPlayingAudio = false;
      $scope.isEE = false;
      $scope.playAudio = function(playUrl) {
        var $audio;
        if ($scope.isPlayingAudio) {
          return;
        }
        $scope.isPlayingAudio = true;
        $audio = $('<audio>').attr('src', playUrl);
        $audio.one({
          ended: function() {
            $scope.isPlayingAudio = false;
            $scope.$apply();
            $audio[0].pause();
            return $audio.remove();
          },
          error: function() {
            $scope.isPlayingAudio = false;
            $scope.$apply();
            return $audio.remove();
          }
        });
        return $audio[0].play();
      };
      $scope.toggleDicType = function() {
        return sendDicTypeToggled(!$scope.isEE);
      };
      renderViewer = function(data) {
        $scope.query = data.query;
        $scope.result = data.result;
        $scope.isEE = data.isEE;
        return $scope.$apply();
      };
      return whenWordSearched(function(data) {
        return renderViewer(data);
      });
    });
  });

}).call(this);
