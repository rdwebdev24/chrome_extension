console.log("Options.js called")
btn = document.getElementById('clearAll')
console.log(btn)

btn.addEventListener('click',()=>{
     chrome.storage.sync.clear()
     color = []
     chrome.storage.sync.set({"color":color})
     alert("Cleared")
     close();
})

const cross = document.getElementById('cross')
const About = document.getElementById('About')
const about_page = document.querySelector('.about_page')

About.addEventListener('click',()=>{
     about_page.style.left = '0'
})

cross.addEventListener("click",()=>{
     about_page.style.left = '-400px'
})