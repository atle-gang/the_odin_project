# The box model

- `padding` increases the space between the border of a box and the content of the box

- `margin` increases the space between the borders of a box and the borders of adjacent boxes.

- `border` adds space (even if it's only a pixel or twp) between the margin and the padding.

## (MDN Web Docs)

### Outer display type

If a box has an outer display type of `block`, then:

- The box will break onto a new line.

- The width and height properties are respected.

- Padding, margin and border will cause other elements to be pushed away from the box.

- If width is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.

Some HTML elements such as <h1> and <p>, use `block` as their outer display type by default.

If a box has an outer display type of `inline`, then:

- The box will not break onto a new line.

- The width and height properties will not apply.

- Top and bottom padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.

- Left and right padding, margins, and borders will apply and will cause other inline boxes to move away from the box.

Some HTML elements, such as `<a>`, `<span>`, `<em>` and `<strong>` use inline as their outer display type by default.


### Using display: inline-block

`display: inline-block` is a special value of display, which provides a middle ground between `inline` and `block`. Use it if you do not want an item to break onto a new line, but do want it to respect `width` and `height` and avoid overlapping. 

An element with `display: inline-block` does a subset of the block things we already know about:

- The `width` and `height` properties are respected.

- `padding`, `margin`, and `border` will cause other elements to be pushed away from the box.

It does not, however, break onto a new line, and will only become larger than its content if you explicitly add `width` and `height` properties.