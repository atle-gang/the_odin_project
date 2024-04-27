// Example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// Example two

const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

function printName(player) {
  console.log(player.name);
}

printName(playerOne); // tim
printName(playerTwo); // jenn
