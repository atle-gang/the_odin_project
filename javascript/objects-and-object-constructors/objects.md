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

## Prototypical Inheritance

![Local Image](objects-and-object-constructors/proto.png)

We define an empty object named `dude`. Taking a look at 'dude', you see that it has nothing inside is, but when you looking closely, it has the `proto` property.

After we add a few value pairs, we get this:

![Local Image](objects-and-object-constructors/add-few-properties.png)


When creating a variable, in this case we used an object literal, the object gets a `__proto__` property. The `proto` is pointing the another `Object` where your value inherits from

![Local Image](objects-and-object-constructors/look.png.png)

Depending on what type of variable you're creating, the `proto` is going to have respective stuff to it (respective to the type of variable)

The `valueOf` and `toString` methods in `dude` are inherited by our `dude` object because it is an instance of the Object constructor.

### How do you create variables that inherit from something else, something other than the base object class?

In this instance, I create an array, and as you can see, we have all these other methods associated with strings. Why is that? It is because the `myDogs` object is an instance of the `Array` constructor

![Local Image](objects-and-object-constructors/myDogs.png)


