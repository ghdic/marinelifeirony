/*
각 프레임에서 마우스, 키보드 액션을 관찰하고, 이벤트 발생 시 적합한 작업을 수행한다.
*/


(function() {
  this.define('actionWatcher', function($$options, $$message, $$f, $$analytics, $$basicWords) {
    var DRAG_THRESHOLD, containsCharacters, getSelectedText, isNotSameCharaterSequence, isTextableElement, isValidCharacter, isValidWord, onDocument, onDoubleClick, onMouseDown, onMouseUp, sendOutsideClicked, sendWordSelected, sendWordSelectedToSearch, underThreeWords, upperTwoCharacter, _dblclickMethod, _dragMethod, _isDblclickOptionMatched, _isDragOptionMatched, _startX, _startY, _useDrag;
    onDocument = function(eventType, handler) {
      return $(document).on(eventType, handler);
    };
    _isDblclickOptionMatched = null;
    _isDragOptionMatched = null;
    _dblclickMethod = null;
    _dragMethod = null;
    _useDrag = false;
    (function() {
      return $$options.get().then(function(options) {
        var dblclickOption, dragOption;
        dblclickOption = _.find($$options.DBLCLICK_METHODS, function(option) {
          return option.value === options.dblclickMethod;
        });
        dragOption = _.find($$options.DRAG_METHODS, function(option) {
          return option.value === options.dragMethod;
        });
        _dblclickMethod = options.dblclickMethod;
        _dragMethod = options.dragMethod;
        _isDblclickOptionMatched = dblclickOption != null ? dblclickOption.handler : void 0;
        _isDragOptionMatched = dragOption != null ? dragOption.handler : void 0;
        return _useDrag = options.useDrag;
      });
    })();
    onMouseDown = _.debounce(_.partial(onDocument, 'mousedown'), 200, true);
    onDoubleClick = _.partial(onDocument, 'dblclick');
    onMouseDown = _.partial(onDocument, 'mousedown');
    onMouseUp = _.partial(onDocument, 'mouseup');
    sendWordSelected = $$message.createSenderToExtension('T:wordSelected');
    sendOutsideClicked = $$message.createSenderToExtension('T:outsideClicked');
    isTextableElement = function(e) {
      return /(input|textarea)/i.test(e.target.tagName);
    };
    getSelectedText = function() {
      return window.getSelection().toString().trim();
    };
    containsCharacters = function(str) {
      return /[a-zㄱ-ㅎㄱ-힣]+/i.test(str);
    };
    isValidCharacter = function(str) {
      return /^[0-9a-zㄱ-ㅎ가-힣. -]+$/i.test(str);
    };
    underThreeWords = function(str) {
      return str.match(/\S+/g).length <= 3;
    };
    upperTwoCharacter = function(str) {
      return str.length > 1;
    };
    isNotSameCharaterSequence = function(str) {
      return !/(.)\1{2,}/.test(str);
    };
    isValidWord = $$f.validator(containsCharacters, isValidCharacter, underThreeWords, upperTwoCharacter, isNotSameCharaterSequence, $$basicWords.isnt);
    _startX = 0;
    _startY = 0;
    DRAG_THRESHOLD = 15;
    onMouseDown(function(e) {
      _startX = e.pageX;
      _startY = e.pageY;
      if (location.pathname !== '/viewer.html') {
        return sendOutsideClicked();
      }
    });
    onMouseUp(function(e) {
      var diffX, diffY;
      if (!_useDrag) {
        return;
      }
      if (!(_.isFunction(_isDragOptionMatched) && _isDragOptionMatched(e))) {
        return;
      }
      diffX = Math.abs(_startX - e.pageX);
      diffY = Math.abs(_startY - e.pageY);
      if (diffX >= DRAG_THRESHOLD || diffY >= DRAG_THRESHOLD) {
        return sendWordSelectedToSearch(e, _dragMethod);
      }
    });
    onDoubleClick(function(e) {
      return sendWordSelectedToSearch(e, _dblclickMethod);
    });
    return sendWordSelectedToSearch = function(e, method) {
      var selectionText;
      if (_.isFunction(_isDblclickOptionMatched) && _isDblclickOptionMatched(e) && !isTextableElement(e)) {
        selectionText = getSelectedText();
        if (isValidWord(selectionText)) {
          sendWordSelected(selectionText);
          return $$analytics.trackEvent("actionWatcher:trigger:" + method);
        }
      }
    };
  });

}).call(this);
