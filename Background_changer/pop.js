let changeColor = document.getElementById("changeColor");
changeColor.style.backgroundColor = '#b91818'
let Color = document.getElementById("color");

Color.addEventListener("input", async (e) => {
  let color = Color.value;
  chrome.storage.sync.set({ color });

  chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
  });
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
  
});

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
