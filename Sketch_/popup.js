console.log("okok")

draw = document.getElementById('draw')
stop = document.getElementById('stop')
Color = document.getElementById('Color')

draw.addEventListener('click',()=>{
     console.log("event Called")
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var activeTab = tabs[0];
          let msg = {
               txt:"draw"
          }
          chrome.tabs.sendMessage(activeTab.id, msg);
        });
})
stop.addEventListener('click',()=>{
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var activeTab = tabs[0];
          let msg = {
               txt:"stop"
          }
          chrome.tabs.sendMessage(activeTab.id, msg);
        });
})

