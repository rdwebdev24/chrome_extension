console.log("chrome extension load")

// let para = document.getElementsByTagName('p')
//      for(elt of para){
//           elt.style['background-color'] = 'red'
//      }


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request)
    alert(request.Title)
    // if (request.greeting === "hello"){
    //   let para = document.getElementsByTagName('p')
    //   for(elt of para){
    //       elt.style.color = 'red'
    //  }
    // }
  }
);