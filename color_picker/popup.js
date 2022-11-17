const btn = document.querySelector(".changeColorBtn");
const selectedColor = document.querySelector(".selectedColor");
const para = document.querySelector(".no_color");
showData();
// GETTING DATA CODE ----:
function showData(){
  let html = "";
  chrome.storage.sync.get("color", (data) => {
  color_arr = data.color;
  if(!color_arr.length){
    para.innerHTML = "No color picked :-(";
  }else{
  for (i = 0; i < color_arr.length; i++) {
    html += ` <div class="color_div"><div class="color_info">
    <span class="colorGrid" style="background-color: ${color_arr[i]}"></span>
    <span class="colorValue">${color_arr[i]}</span>
    </div>
    <div class="icons">
    <i class="fa fa-clone copy_color" aria-hidden="true"></i>
    </div> </div>`;
  selectedColor.innerHTML = html;
}
}


// COPY COLOR CODE ----:
const copy_color = document.querySelectorAll(".copy_color");
copy_color.forEach((element,index) => {
  element.addEventListener('click',(e)=>{
    text = e.target.parentNode.previousElementSibling.children[1].innerText
    navigator.clipboard.writeText(text)
     
    element.classList.remove("fa-clone");
    element.classList.add("fa-check-circle");
    setTimeout(() => {
      element.classList.add("fa-clone");
      element.classList.remove("fa-check-circle");
    }, 500);
    })
  })
});
}

// PICK COLOR CODE ----:
btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: pickColor,
    },
    async (injection_result) => {
      const [data] = injection_result;
      if (data.result) {
        color_arr.push(data.result.sRGBHex);
        chrome.storage.sync.set({ color: color_arr });
        showData();
      }
    }
  );
});



async function pickColor() {
  try {
    // Picker
    const eyeDropper = new EyeDropper();
    return await eyeDropper.open();
  } catch (error) {
    console.log(error);
  }
}
