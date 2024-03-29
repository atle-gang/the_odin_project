# Intro into CSS

## Selectors

Selectors refer to the HTML elements to which CSS rules apply; they're what is actually being "selected" for each rule.

### Universal selectors

The universal selector will select elements of any type and the syntax for it is a simple asterisk.

```css
* {
    color: purple;
}
```

### Type selectors

A type selector (or element selector) will select all elements of the given element type, and the syntax is just the name of the element:

```html
<!-- index.html -->
<div>Hello, world!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye</div>

```

```css
/* styles.css*/

div {
    color: white;
}
```

### Class selectors

Class selectors will select all elements with the given class, which is just an attribute you place on an HTML element.

```html
<!-- index.html -->

<div class="alert-text">Please agree to our terms of service.</div>
```

```css
/* styles.css */

.alert-text {
    .alert-text {
        color: red;
    }
}
```

Note the syntax for class selectors: a period immediately followed by the case-sensitive value of the class attribute. Classes aren't required to be specific to a particular element, so you can use the same class on as many elements as you want.

Another thing you can do with the class attribute is to add multiple classes to a single element as a space-separated list, such as `class="alert-text severe-alert"`.Since whitespace is used to separate class names like this, you should never use spaces for multi-worded names and should use a hyphen instead.


### ID selectors

ID selectors are similar to class selectors. They select an element with the given ID, which is another attribute you place on an HTML element.
The major difference between classes and IDs is that an element can only have one ID. It cannot be repeated on a single page and should not contain any whitespace.

```html
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */

#title {
    background-color: red;
}
```

### The grouping selector

What if we have two groups of elements that share some of their style declarations?

```css
.read {
    color: white;
    background-color: black;
    /* several unique declarations*/
}

.unread {
    color: white;
    background-color: black;
    /* several unique declarations*/
}
```

Both our `.read` and `.unread`` selectors share the `color: white;` and `background-color: black;` declarations, but otherwise have several of their own unique declarations. To cut down on the repetition, we can group these two selectors together as a comma-separated list:

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

### Chaining selectors

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

We have two elements with the `subsection `class that have some sort of unique styles, but what if we only want to apply a separate rule to the element that also has `header` as a second class? Well, we could chain both the class selectors together in our CSS like so:

```css
.subsection.header {
  color: red;
}
```

What `.subsection.header` does is it selects any element that has both the `subsection` and `header `classes. Notice how there isn’t any space between the `.subsection` and `.header` class selectors. This syntax basically works for chaining any combination of selectors, except for chaining more than one type selector

This can also be used to chain a class and an ID, as shown below:

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>
```

You can take the two elements above and combine them with the following:

```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

### Descendant combinator

Combinators allow us to combine multiple selectors differently than either grouping or chaining them, as they show a relationship between the selectors. There are four types of combinators in total, but for right now we’re going to only show you the descendant combinator, which is represented in CSS by a single space between selectors. A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc.) that matches the previous selector.

So something like .ancestor .child would select an element with the class child if it has an ancestor with the class ancestor. Another way to think of it is that child will only be selected if it is nested inside ancestor, regardless of how deep that nesting is. Take a quick look at the example below and see if you can tell which elements would be selected based on the CSS rule provided:


### Specificity

A CSS declaration that is more specific will take precedence over less specific ones.
Inline styles, have the highest specificity compared to selectors. while each type of selector has its own specificity level that contributes to how a declaration is. 

An ID selector will always beat any number of class selectors, class selector will always beat any number of type selectors, and type selectors will always beat any number of less specific selectors. 


### Inheritance

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element's descendants, even if we don't explicitly write a rule for those declarations. Typography-based properties (`color`, `font-size`, `font-family`, etc.) are usually inherited, while most other properties aren’t.