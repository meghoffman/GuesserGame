const color = ["red", "blue", "orange", "green", "yellow", "purple", "brown", "pink"];

function randomColors(color){
  return color[Math.floor(Math.random()*color.length)];
}

let newColor = randomColors(color);
let typedColor = document.getElementById('text').value;

//console.log(newColor);

function guesser(){
document.body.style.backgroundColor = newColor;
let typedColor = document.getElementById('text').value;
if(newColor===typedColor){
  //alert( "You win!")
  document.getElementById("win").innerHTML = "You win!";
} else {
  //alert("You lose!")
  document.getElementById("lose").innerHTML = "You lose!";
}
}

$(document).ready(function(){
 $("#reload").click(function(){
   location.reload(true);
 })
  

});