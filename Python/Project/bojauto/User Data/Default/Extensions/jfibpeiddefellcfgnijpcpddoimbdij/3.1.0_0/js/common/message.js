/*
익스텐션과 컨텐트 스크립트의 메시지 전달을 위함 함수 모음이다.

- 모든 데이터는 아래 포맷으로 전달하지만, 함수 밖에선 name, data 파라미터로 추상화한다.
  {
    name: '이름',
    data: '데이터' 
  }
- 모든 이벤트명은 과거형으로 작성한다.
- 백그라운드에서 보내는 메시지는 'B:XXX'로 이름을 정한다.
- 각 탭에서 보내는 메시지는 'T:XXX'로 이름을 정한다.
- 메시지 리스너를 리턴하는 함수명은 `whenXXX` 형태로 정한다.
- 메시지를 전송하는 함수명은 `sendXXXTo` 형태로 정한다.
*/


(function() {
  this.define('message', function() {
    return this.exports = {
      createSenderToExtension: function(name) {
        return function(data) {
          return chrome.runtime.sendMessage({
            name: name,
            data: data
          });
        };
      },
      createListenerToExtension: function(name) {
        return function(handler) {
          return chrome.runtime.onMessage.addListener(function(req, sender) {
            if (req.name === name) {
              return handler(req.data);
            }
          });
        };
      },
      createSenderToTab: function(name) {
        return function(data) {
          return chrome.tabs.query({
            active: true,
            currentWindow: true
          }, function(tabs) {
            return chrome.tabs.sendMessage(tabs[0].id, {
              name: name,
              data: data
            });
          });
        };
      },
      createListenerToTab: function(name) {
        return function(handler) {
          return chrome.runtime.onMessage.addListener(function(req, sender) {
            if (sender.tab) {
              if (req.name === name) {
                return handler(req.data);
              }
            }
          });
        };
      },
      createSenderToPopup: function(name) {
        return function(data) {
          return chrome.runtime.sendMessage({
            name: name,
            data: data
          });
        };
      },
      createListenerToPopup: function(name) {
        return function(handler) {
          return chrome.runtime.onMessage.addListener(function(req, sender) {
            if (req.name === name) {
              return handler(req.data);
            }
          });
        };
      },
      createSenderToWindow: function(win, name) {
        return function(data) {
          var error, isValidTargetWindow;
          isValidTargetWindow = true;
          try {
            win.location.href;
          } catch (_error) {
            error = _error;
            isValidTargetWindow = false;
          }
          if (isValidTargetWindow) {
            return win.postMessage({
              name: name,
              data: data
            }, chrome.extension.getURL(''));
          }
        };
      },
      createListenerToWindow: function(name) {
        return function(handler) {
          return window.addEventListener('message', function(e) {
            if (e.origin !== chrome.extension.getURL('').replace(/\/$/, '')) {
              return;
            }
            if (e.data && e.data.name === name) {
              return handler(e.data.data);
            }
          });
        };
      }
    };
  });

}).call(this);
