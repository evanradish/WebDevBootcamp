/**
 * Created by Evan on 5/13/2016.
 */
var colors = generateRandomColors(6);

var h1 = document.getElementsByTagName("h1")[0];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    h1.style.background = "#232323";
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        messageDisplay.textContent = "";
    }
});

colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");


for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            resetButton.textContent = "Play Again?";


        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again"

        }
    });
}

function changeColors(color) {
    //loop through squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
    h1.style.background = color;

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a red
    var r = Math.floor(Math.random() * 256);
    //pick a green
    var g = Math.floor(Math.random() * 256);
    //pick a blue
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}