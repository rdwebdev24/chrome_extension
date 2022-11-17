console.log("Background.js running");
chrome.runtime.onMessage.addListener(receiver)
function receiver(request,sender,sendResponse){
  console.log(request)
}