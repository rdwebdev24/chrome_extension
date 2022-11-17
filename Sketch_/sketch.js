console.log("Sketch ho gya")


function setup() {
  console.log("sketch started")
  document.body.style.userSelect = 'none'
  let c = createCanvas(windowWidth,windowHeight)
  c.position(0,0)
  c.style('pointer-events','none')
  noLoop()
}

chrome.runtime.onMessage.addListener(function(request,sender,senderResponse){
  if(request.txt=="draw"){
    loop()
  }
  if(request.txt=="stop"){
    noLoop()
  }
})

function draw() {
  console.log("draw start ho gya")
  stroke('red')
  strokeWeight(4)
  if(mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}

