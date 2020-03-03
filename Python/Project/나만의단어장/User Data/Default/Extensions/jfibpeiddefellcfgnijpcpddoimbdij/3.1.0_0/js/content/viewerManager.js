/*
사전을 보여줄 iframe을 생성하고, iframe의 on/off를 담당한다.
페이지가 시작될 때 최상위 프레임에 추가한다.
*/


(function() {
  this.define('viewerManager', function($$constant, $$message, $$analytics) {
    var DEFAULT_HEIGHT, allowDocumentWheelEvent, createViewer, expandViewerHeight, hideViewer, preventDocumentWheelEvent, restoreViewerHeight, setCurrentViewerHeight, showViewer, whenOutsideClicked, whenViewerRendered, whenWordSearched, _$viewer, _hideTimer, _isAttached, _isViewerOpened;
    DEFAULT_HEIGHT = 168;
    _$viewer = null;
    _isAttached = false;
    _isViewerOpened = false;
    _hideTimer = null;
    createViewer = function() {
      return _$viewer = $('<iframe>').attr({
        id: $$constant.ID,
        src: chrome.extension.getURL('viewer.html?init=true')
      });
    };
    showViewer = function() {
      if (!_isAttached) {
        _$viewer.appendTo(document.documentElement);
        _isAttached = true;
      }
      clearTimeout(_hideTimer);
      _hideTimer = null;
      _$viewer.addClass('on');
      _isViewerOpened = true;
      return preventDocumentWheelEvent();
    };
    expandViewerHeight = function(height) {
      var maxHeight, properHeight;
      if (height <= DEFAULT_HEIGHT) {
        properHeight = DEFAULT_HEIGHT;
      } else {
        maxHeight = Math.floor($(window).height() * 0.9);
        properHeight = Math.min(height, maxHeight);
      }
      return _$viewer.attr('style', "height: " + properHeight + "px !important");
    };
    preventDocumentWheelEvent = function() {
      allowDocumentWheelEvent();
      return $(document).on("wheel." + $$constant.ID, function(e) {
        if (e.target.id === $$constant.ID) {
          return e.preventDefault();
        }
      });
    };
    restoreViewerHeight = function() {
      return _$viewer.removeAttr('style');
    };
    allowDocumentWheelEvent = function() {
      return $(document).off("wheel." + $$constant.ID);
    };
    hideViewer = function() {
      if (!_$viewer) {
        return;
      }
      if (!_isViewerOpened) {
        return;
      }
      _isViewerOpened = false;
      return _hideTimer = _.delay(function() {
        _$viewer.removeClass('on');
        restoreViewerHeight();
        return allowDocumentWheelEvent();
      }, 300);
    };
    setCurrentViewerHeight = function(height) {
      var _currentViewerHeight;
      return _currentViewerHeight = height;
    };
    whenWordSearched = $$message.createListenerToExtension('B:wordSearched');
    whenOutsideClicked = $$message.createListenerToExtension('B:outsideClicked');
    whenViewerRendered = $$message.createListenerToExtension('B:viewerRendered');
    createViewer();
    whenWordSearched(showViewer);
    whenOutsideClicked(hideViewer);
    return whenViewerRendered(expandViewerHeight);
  });

}).call(this);
