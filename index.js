var redBtn = document.getElementById("stopButton");
var yellowBtn = document.getElementById("slowButton");
var greenBtn = document.getElementById("goButton");

var redLight = document.getElementById("stopLight");
var yellowLight = document.getElementById("slowLight");
var greenLight = document.getElementById("goLight");

var isRed = true;
var isYellow = true;
var isGreen = true;

// function click(btn) {
//   var isTrue = true;

//   if(isTrue) {
//     btn.style.backgroundColor = 
//   }
// }



redBtn.addEventListener("click", function() {
  redLight.classList.toggle("stop");
  if(isRed) {
    console.log("Red bulb on");
  }else {
    console.log("Red bulb off");
  }
  isRed = !isRed;
})

redBtn.addEventListener('mouseover', function() {
  console.log("Entered red button");
})

redBtn.addEventListener('mouseout', function() {
  console.log("Left red button");
})

yellowBtn.addEventListener("click", function() {
  yellowLight.classList.toggle("slow");
  if(isYellow) {
    console.log("Yellow bulb on");
  }else {
    console.log("Yellow bulb off");
  }
  isYellow = !isYellow;
})

yellowBtn.addEventListener('mouseover', function() {
  console.log("Entered yellow button");
})

yellowBtn.addEventListener('mouseout', function() {
  console.log("Left yellow button");
})

greenBtn.addEventListener("click", function() {
  greenLight.classList.toggle("go");
  if(isGreen) {
    console.log("Green bulb on");
  }else {
    console.log("Green bulb off");
  }
  isGreen = !isGreen;
})

greenBtn.addEventListener('mouseover', function() {
  console.log("Entered green button");
})

greenBtn.addEventListener('mouseout', function() {
  console.log("Left green button");
})


