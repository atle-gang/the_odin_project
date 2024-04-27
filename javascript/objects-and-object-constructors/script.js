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

// printName(playerOne); // tim
// printName(playerTwo); // jenn

// Constructors

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const atle = new Player("Atle", "x");
// atle.sayName(); // Atle
