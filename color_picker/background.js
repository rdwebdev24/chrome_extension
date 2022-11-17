console.log("background.js called")
let color = []
chrome.runtime.onInstalled.addListener(()=>{
     chrome.storage.sync.set({"color":color})
})