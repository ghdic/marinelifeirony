/*
영어사전 익스텐션의 옵션
*/


(function() {
  this.define('options', function($$storage) {
    var DBLCLICK_METHODS, DEFAULT_OPTIONS, DRAG_METHODS, SHORTCUTS, altKeyName, ctrlKeyName, isMac, migrateTriggerOption;
    isMac = navigator.platform === 'MacIntel';
    ctrlKeyName = isMac ? '<Cmd>' : '<Ctrl>';
    altKeyName = '<Alt>';
    DBLCLICK_METHODS = [
      {
        value: 'dblclick',
        desc: "<더블클릭>",
        handler: function(e) {
          return true;
        }
      }, {
        value: 'ctrl_dblclick',
        desc: "" + ctrlKeyName + " + <더블클릭>",
        handler: function(e) {
          if (isMac) {
            return e.metaKey;
          } else {
            return e.ctrlKey;
          }
        }
      }, {
        value: 'alt_dblclick',
        desc: "" + altKeyName + " + <더블클릭>",
        handler: function(e) {
          return e.altKey;
        }
      }
    ];
    DRAG_METHODS = [
      {
        value: 'drag',
        desc: "<드래그>",
        handler: function(e) {
          return true;
        }
      }, {
        value: 'ctrl_drag',
        desc: "" + ctrlKeyName + " + <드래그>",
        handler: function(e) {
          if (isMac) {
            return e.metaKey;
          } else {
            return e.ctrlKey;
          }
        }
      }, {
        value: 'alt_drag',
        desc: "" + altKeyName + " + <드래그>",
        handler: function(e) {
          return e.altKey;
        }
      }
    ];
    SHORTCUTS = {
      'a': '발음 듣기',
      's': '영한/영영 전환',
      'g': '영어사전 페이지로 이동'
    };
    DEFAULT_OPTIONS = {
      useDrag: false,
      dblclickMethod: DBLCLICK_METHODS[0].value,
      dragMethod: DRAG_METHODS[0].value,
      fontSize: 100,
      useShortcut: false
    };
    migrateTriggerOption = function(options) {
      if (options.dblclickMethod && options.dragMethod) {
        return;
      }
      switch (options.triggerMethod) {
        case 'mouse':
          options.dblclickMethod = 'dblclick';
          options.dragMethod = 'drag';
          break;
        case 'ctrl_mouse':
          options.dblclickMethod = 'ctrl_dblclick';
          options.dragMethod = 'ctrl_drag';
          break;
        case 'alt_mouse':
          options.dblclickMethod = 'alt_dblclick';
          options.dragMethod = 'alt_drag';
      }
      return delete options.triggerMethod;
    };
    return this.exports = {
      DBLCLICK_METHODS: DBLCLICK_METHODS,
      DRAG_METHODS: DRAG_METHODS,
      SHORTCUTS: SHORTCUTS,
      DEFAULT_OPTIONS: DEFAULT_OPTIONS,
      get: function() {
        var _this = this;
        return $$storage.get('options').then(function(options) {
          if (options == null) {
            options = {};
          }
          migrateTriggerOption(options);
          return _.defaults(options, DEFAULT_OPTIONS);
        });
      },
      set: function(options) {
        if (options == null) {
          options = {};
        }
        return $$storage.set('options', options);
      }
    };
  });

}).call(this);
