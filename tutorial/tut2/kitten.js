console.log("kitten.js");

let filenames = [
     "kitten_2.jpg",
     "kitten_3.jpg",
     "kitten_4.jpg",
     "kitten_5.jpg",
     "kitten_6.jpg"
 ];

//  let imgs = document.getElementsByTagName('img');
//  for(imgelt of imgs){
//      let r = Math.floor(Math.random()*filenames.length);
//      let file = "images/"+filenames[r];
//      let url = chrome.runtime.getURL(file);
//      imgelt.src = url;
//      console.log(url);
//  }


 chrome.runtime.onMessage.addListener(
     function(request, sender, sendResponse) {
       if (request.txt == "change"){
          let imgs = document.getElementsByTagName('img');
          for(imgelt of imgs){
              let r = Math.floor(Math.random()*filenames.length);
              let file = "images/"+filenames[r];
              let url = chrome.runtime.getURL(file);
              imgelt.src = url;
              console.log(url);
          }
       }
     }
   );