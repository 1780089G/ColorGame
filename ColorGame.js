var numSquares = 6;  
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor(); 
  colorDisplay.textContent = pickedColor;  
  for(var i = 0; i < squares.length; i++){
      if(colors[i]){
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares); 
  pickedColor = pickColor(); 
  colorDisplay.textContent = pickedColor;  
  for(var i = 0; i < squares.length; i++){
       squares[i].style.background = colors[i];
       squares[i].style.display = "block";
   
  }
});

resetButton.addEventListener("click", function(){
  //generate all new colros
  colors = generateRandomColors(numSquares);
  //pick new random clor from array 
  pickedColor = pickColor();
  //change color dispaly tyo match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors tof squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.styel.background = "#steelblue";
})

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
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
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