/*
* @Author: Vincent Wang
* @Date:   2017-12-13 15:22:17
* @Last Modified by:   Vincent Wang
* @Last Modified time: 2017-12-13 18:12:24
*/

chrome.contextMenus.create({
    title: 'Search Etymonline for "%s"',
    contexts: ['selection'],
    onclick(params) {
        chrome.tabs.create({
            url: `https://www.etymonline.com/search?q=${encodeURI(params.selectionText)}&utm_source=extension_contextmenu`
        });
    }
});


chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  axios
    .get(`https://www.etymonline.com/api/etymology/fuzzy?key=${text}`)
    .then((res) => {
      const suggestList = res.data.map(i => {
        return {
          content: i,
          description: `Search Etymonline for "${i}"`
        }
      })
      suggest(suggestList);
    })
})

chrome.omnibox.onInputEntered.addListener((text) => {
  chrome.tabs.create({
    url: `https://www.etymonline.com/search?q=${text}&utm_source=extension_omnibox_submit`
  })
})
