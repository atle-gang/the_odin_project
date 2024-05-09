## Objects as a design pattern

You can organise your code by grouping things into objects. Take these examples from tic tac toe game:

```javascript
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X"
};

const playerTwo = {
  name: "jenn",
  marker: "O"
};

```

At first glance, the first doesn’t seem so bad… and it actually takes fewer lines to write than the example using objects, but the benefits of the second approach are huge! Let me demonstrate:

```javascript
function printName(player) {
  console.log(player.name);
}
```

This is something that you just could NOT do with the example one setup. Instead, every time you wanted to print a specific player’s name, you would have to remember the correct variable name and then manually console.log it:

```javascript
console.log(playerOneName); // tim
console.log(playerTwoName); // jenn
```

## Object Constructors

When you have a specific type of object that you nneed to duplicate like our player or inventory items, a better way to create them is using an object constructor, which is a function that looks like this:

```javascript
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
```

and which you use by calling the function with the keyword new.

```javascript
const player = new Player('steve', 'X');
console.log(player.name); // 'steve'
```

