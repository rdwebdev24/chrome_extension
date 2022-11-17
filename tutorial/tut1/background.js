console.log("Background.js running");

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener((tab) => {
    // console.log(tab)
    let msg = {
        url:tab.url,
        Title:tab.title
    }
    chrome.tabs.sendMessage(tab.id, msg);
  });
});
