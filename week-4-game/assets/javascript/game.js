//global variables
var wins = 0;
var losses = 0;
//players current score
var total = 0;

// assign a random number between 19-120 for the number-to-guess span
var RandomNumber =  0;

// assign a random number between 1-12 to each crystal
var blue = 0;
var yellow = 0;
var green = 0;
var red = 0;

resetGame();
// check to see if total-score span is equal to random numberToGuess span
function checkWin() {
    // if it is === add a win to the wins span
    if (total === RandomNumber) {
      wins++;
      $("#wins").html(wins);
      resetGame();
    }
    // if it is > add a loss to the losses span
    else if (total > RandomNumber) {
      losses++;
      $("#losses").html(losses);
      resetGame();
    }
}

function resetGame() {
  total = 0;
  $("#total").html(total);

  // assign a random number between 19-120 for the number-to-guess span
  RandomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#numberToGuess").html(RandomNumber);

  // assign a random number between 1-12 to each crystal
  blue = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#blue").html(blue);

  yellow = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#yellow").html(yellow);

  green = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#green").html(green);

  red = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#red").html(red);
}


// add up total of clicked crystals to totalScore span
// set up on click event to each crystal
$("#blue").click(function() {
  total = total + blue;
  $("#total").html(total);
  checkWin(); 
});

$("#yellow").click(function() {
  total = total + yellow;
  $("#total").html(total);
  checkWin();
});

$("#green").click(function() {
  total = total + green;
  $("#total").html(total);
  checkWin();
});

$("#red").click(function() {
  total = total + red;
  $("#total").html(total);
  checkWin();
});