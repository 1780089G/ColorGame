var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // add initial colors to square
    squares[i].style.background = colors[i];
  //add click listeners fo square
  squares[i].addEventListener("click", function(){
   // grab color of clicked square
  var clickedColor = this.style.background;
   // compare color to pickedColor
   if(clickedColor === pickedColor){
      messageDisplay.textContent = ("Correct!");
      changeColors(clickedColor);
   } else {
     this.style.background = "#232323";
     messageDisplay.textContent = ("try display")
   }
  });
  } 

  function changeColors(color){
    // loo  thourgh alll square
    for(var i = 0; i < squares.length; i++){
      squares[i].style.background = color;
    }
    // change each color to match given color
  }
  function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  function generateRandomColors(num){
    //make an array 
    var arr = []
    // repreat num time
    for(var i = 0; i < num; i++){
      arr.push(randomColor())
      // get random color and push into arr
    }
    //return that array
    return arr; 
  }

  function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +", " + b + ")";
  }