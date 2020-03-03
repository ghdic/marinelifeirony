/*
사전이 렌더링되는 페이지의 스크립트
*/


(function() {
  this.define('viewer', function($$message, $$options, $$analytics) {
    var sendAudioPlayed, sendDicTypeToggled, sendViewerInitialized, sendViewerRenderered, sendViewerRendereredToWindow, shortcutActions, whenAudioEnded, whenOutsideClicked, whenShortcutPressed, whenWordSearched, _isOpen;
    whenWordSearched = $$message.createListenerToExtension('B:wordSearched');
    whenShortcutPressed = $$message.createListenerToExtension('B:shortcutPressed');
    whenOutsideClicked = $$message.createListenerToExtension('B:outsideClicked');
    whenAudioEnded = $$message.createListenerToExtension('B:audioEnded');
    sendViewerInitialized = $$message.createSenderToExtension('T:viewerInitialized');
    sendViewerRenderered = $$message.createSenderToExtension('T:viewerRendered');
    sendViewerRendereredToWindow = $$message.createSenderToWindow(window.top, 'T:viewerRendered');
    sendDicTypeToggled = $$message.createSenderToExtension('T:dicTypeToggled');
    sendAudioPlayed = $$message.createSenderToExtension('T:audioPlayed');
    $$options.get().then(function(options) {
      return $('.wrap').css('font-size', "" + options.fontSize + "%");
    });
    shortcutActions = {
      'g': function() {
        var _ref;
        return (_ref = $('._title')[0]) != null ? _ref.click() : void 0;
      },
      'a': function() {
        return $('._audioBtn').click();
      },
      's': function() {
        return $('._toggleBtn').click();
      }
    };
    _isOpen = false;
    return angular.module('viewerApp', []).config(function($locationProvider) {
      return $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }).controller('mainCtrl', function($scope, $location) {
      var renderViewer;
      $scope.query = '';
      $scope.result = [];
      $scope.isPlayingAudio = false;
      $scope.isEE = false;
      $scope.playAudio = function(playUrl) {
        if ($scope.isPlayingAudio) {
          return;
        }
        $scope.isPlayingAudio = true;
        return sendAudioPlayed(playUrl);
      };
      whenAudioEnded(function() {
        $scope.isPlayingAudio = false;
        return $scope.$apply();
      });
      $scope.toggleDicType = function() {
        sendDicTypeToggled(!$scope.isEE);
        return sendDicTypeToggledToWindow(!$scope.isEE);
      };
      renderViewer = function(data) {
        $scope.query = data.query;
        $scope.result = data.result;
        $scope.isEE = data.isEE;
        $scope.$apply();
        window.scrollTo(0, 0);
        sendViewerRenderered(document.documentElement.scrollHeight);
        return sendViewerRendereredToWindow(document.documentElement.scrollHeight);
      };
      if ($location.search().init === 'true') {
        sendViewerInitialized();
      }
      whenWordSearched(function(data) {
        renderViewer(data);
        return _isOpen = true;
      });
      whenShortcutPressed(function(key) {
        if (_isOpen) {
          return typeof shortcutActions[key] === "function" ? shortcutActions[key]() : void 0;
        }
      });
      return whenOutsideClicked(function() {
        return _isOpen = false;
      });
    });
  });

}).call(this);
