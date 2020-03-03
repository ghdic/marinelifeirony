/*
키가 클릭되면 백그라운드로 메시지를 보낸다.
*/


(function() {
  this.define('shortcutWatcher', function($$message, $$options) {
    var ALPHABET, SPECIAL, findKey, sendShortcutPressed, whitelist;
    ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    SPECIAL = {
      27: 'esc',
      13: 'enter'
    };
    whitelist = _.keys($$options.SHORTCUTS);
    sendShortcutPressed = $$message.createSenderToExtension('T:shortcutPressed');
    findKey = function(keyCode) {
      if ((65 <= keyCode && keyCode <= 90)) {
        return ALPHABET[keyCode - 65];
      }
      return SPECIAL[keyCode];
    };
    return (function() {
      return $$options.get().then(function(options) {
        if (!options.useShortcut) {
          return;
        }
        return $(document).on('keyup', function(e) {
          var key, target;
          target = e.target;
          if (/(input|textarea)/i.test(target.tagName) && !(e.keyCode in SPECIAL)) {
            return;
          }
          key = findKey(e.keyCode);
          if (_.contains(whitelist, key)) {
            return sendShortcutPressed(key);
          }
        });
      });
    })();
  });

}).call(this);
