# CSS Functions

## What is a function and how are they used in CSS?

Functions are passed "arguments" between parentheses, each of which are used by the function in a specific way. Some common examples are:

```css
color: rgb(0, 42, 255);
background: linear-gradient(90deg, blue, red);
```

Here, the value of `color` is the function `rgb()`, which accepts arguments in the form of numbers. It processes those numbers to calculate the rgb color corresponding to the three values given. Similarly, the `background` property has a value of `linear-gradient(90deg, blue, red)`. linear-gradient generates a gradient image using the parameters it’s been given. 

Unlike programming languages, CSS does not allow us to create our own functions.