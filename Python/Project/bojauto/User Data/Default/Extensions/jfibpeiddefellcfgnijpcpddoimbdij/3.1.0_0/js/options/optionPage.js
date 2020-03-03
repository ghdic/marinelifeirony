/*
옵션 페이지
*/


(function() {
  this.define('optionPage', function($$constant, $$message, $$options, $$notice) {
    var sendWordSelected;
    sendWordSelected = $$message.createSenderToExtension('T:wordSelected');
    return angular.module('optionsApp', []).controller('mainCtrl', function($scope) {
      return $scope.menu = 'option';
    }).controller('optionCtrl', function($scope) {
      var reloadViewer, showUpdated;
      $scope.DBLCLICK_METHODS = $$options.DBLCLICK_METHODS;
      $scope.DRAG_METHODS = $$options.DRAG_METHODS;
      $scope.SHORTCUTS = $$options.SHORTCUTS;
      $scope.options = {};
      $scope.isChanged = false;
      reloadViewer = function() {
        return $('#viewer').attr('src', 'viewer.html?init=true');
      };
      showUpdated = function() {
        $scope.isChanged = true;
        return $scope.$apply();
      };
      $scope.save = function() {
        return $$options.set($scope.options).then(function() {
          return showUpdated();
        });
      };
      $scope.setSmaller = function() {
        if ($scope.options.fontSize > 60) {
          $scope.options.fontSize -= 5;
        }
        reloadViewer();
        return $scope.save();
      };
      $scope.setLarger = function() {
        if ($scope.options.fontSize < 140) {
          $scope.options.fontSize += 5;
        }
        reloadViewer();
        return $scope.save();
      };
      return $$options.get().then(function(options) {
        $scope.options = options;
        $scope.$apply();
        return sendWordSelected('example');
      });
    }).controller('feedbackCtrl', function($scope) {
      $('#todo').attr('src', $$constant.TODO_DOC_URL);
      $scope.bugUrl = $$constant.BUG_DOC_URL;
      $scope.feedbackUrl = $$constant.FEEDBACK_DOC_URL;
      $scope.notices = [_.first($$notice.getAll())];
      $scope.otherNotices = _.rest($$notice.getAll());
      return $scope.showNotice = function(index) {
        var notice;
        notice = $scope.otherNotices.splice(index, 1)[0];
        return $scope.notices.push(notice);
      };
    });
  });

}).call(this);
