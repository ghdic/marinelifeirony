/*
각 프레임과의 메시지 수신을 담당한다.
*/


(function() {
  this.define('background', function($$message, $$wordSearcher) {
    var sendAudioEnded, sendOutsideClicked, sendShortcutPressed, sendViewerRendered, sendWordSearched, sendWordSearchedToPopup, whenAudioPlayed, whenDicTypeToggled, whenDicTypeToggledOnPopup, whenOutsideClicked, whenQuerySubmitted, whenShortcutPressed, whenViewerInitialized, whenViewerRendered, whenWordSelected;
    whenWordSelected = $$message.createListenerToTab('T:wordSelected');
    whenOutsideClicked = $$message.createListenerToTab('T:outsideClicked');
    whenViewerInitialized = $$message.createListenerToTab('T:viewerInitialized');
    whenViewerRendered = $$message.createListenerToTab('T:viewerRendered');
    whenDicTypeToggled = $$message.createListenerToTab('T:dicTypeToggled');
    whenShortcutPressed = $$message.createListenerToTab('T:shortcutPressed');
    whenAudioPlayed = $$message.createListenerToTab('T:audioPlayed');
    whenDicTypeToggledOnPopup = $$message.createListenerToPopup('P:dicTypeToggled');
    whenQuerySubmitted = $$message.createListenerToPopup('P:querySubmitted');
    sendWordSearched = $$message.createSenderToTab('B:wordSearched');
    sendOutsideClicked = $$message.createSenderToTab('B:outsideClicked');
    sendViewerRendered = $$message.createSenderToTab('B:viewerRendered');
    sendShortcutPressed = $$message.createSenderToTab('B:shortcutPressed');
    sendAudioEnded = $$message.createSenderToTab('B:audioEnded');
    sendWordSearchedToPopup = $$message.createSenderToPopup('P:wordSearched');
    whenViewerRendered(sendViewerRendered);
    whenOutsideClicked(sendOutsideClicked);
    whenShortcutPressed(sendShortcutPressed);
    whenWordSelected(function(word) {
      return $$wordSearcher.searchWord(word, sendWordSearched);
    });
    whenDicTypeToggled(function(isEE) {
      return $$wordSearcher.toggleDicType(isEE, sendWordSearched);
    });
    whenViewerInitialized(function() {
      return $$wordSearcher.searchWordWithRecentQuery(sendWordSearched);
    });
    whenQuerySubmitted(function(word) {
      return $$wordSearcher.searchWord(word, sendWordSearchedToPopup);
    });
    whenDicTypeToggledOnPopup(function(isEE) {
      return $$wordSearcher.toggleDicType(isEE, sendWordSearchedToPopup);
    });
    whenAudioPlayed(function(playUrl) {
      var $audio;
      $audio = $('<audio>').attr('src', playUrl);
      $audio.one({
        ended: function() {
          $audio[0].pause();
          $audio.remove();
          return sendAudioEnded();
        },
        error: function() {
          $audio.remove();
          return sendAudioEnded();
        }
      });
      return $audio[0].play();
    });
    return chrome.contextMenus.create({
      title: "네이버 영어사전에서 '%s' 검색",
      contexts: ["selection"],
      onclick: function(info) {
        return $$wordSearcher.searchWord(info.selectionText, sendWordSearched);
      }
    });
  });

}).call(this);
