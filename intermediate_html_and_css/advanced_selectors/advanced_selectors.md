# Advanced Selectors

## Child and sibling combinators

There are more ways we can access different elements without referring to their classes. Here are three new selectors to do just that.

- `>` - the child combinator
- `+` - the adjacent sibling combinator
- `~` - the general sibling combinator

Practical examples:

```html
<main class="parent">
  <div class="child group1">
    <div class="grand-child group1"></div>
  </div>
  <div class="child group2">
    <div class="grand-child group2"></div>
  </div>
  <div class="child group3">
    <div class="grand-child group3"></div>
  </div>
</main>
```

By now, you should be pretty comfortable writing rules using the descendant combinator you learned about in intro to CSS. For instance, if we wanted to select all the child and grand-child divs inside of main, we could write:

```css
main div {
  /* Our cool CSS */
}
```

But what if we wanted to be more specific and select only the `child` or `grand-child` divs? That is where the child combinator `>` comes in handy.


```css
/* This rule will only select divs with a class of child */
main > div {
  /* Our cool CSS */
}

/* This rule will only select divs with a class of grand-child */
main > div > div {
  /* More cool CSS */
}
```

[MDN web docs for the rest of the combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

## Pseudo-selectors

Pseudo-class selectors are prefixed with a single colon and are a different way to target elements that already exist in HTML.
Pseudo-elements are prefixed with two colons and are used to target elements that don't normally exist in a markdown.

## Pseudo-classes

Pseudo-classes offer us different ways to target elements in our HTML. There are quite a lot of them, and they come in a couple of different flavours.  Others are based on the state of a particular element, or how the user is currently interacting with it.

### Dynamic and user action pseudo-classes

These types of useful pseudo-classes can make  your page feel much more dynamic and interactive.

`:focus` applies to an element that is currently selected by the user either through selecting it with their cursor or using their keyboard.

`:hover` will affect anything under the user's mouse pointer. It can be used to give extra ooomph to buttons and links to highlight that they're interactable, or trigger a drop-down menu.

`:active` applies to elements that are currently being clicked, and is especially useful for giving your user feedback that their action had an effect. 

Have you ever wondered why links are blue but turn purple when clicked in unstyled HTML? It’s because browsers implement that styling by default. To implement your own custom styling for links, take advantage of the `:link` and `:visited` pseudo-classes. A simplified version of default browser styling might look something like this:`


### Structural pseudo-classes

Structural pseudo-classes are a very powerful way to select elements based on their position within the DOM.

`:root` is a special class that represents the very top of your document - the one element that has no parents. This is equivalent to the `html` element, but there are a few subtle differences

`:root` is generally the place where you will place your ‘global’ CSS rules that you want available everywhere - such as your custom properties and CSS variables, or rules such as `box-sizing: border-box;`.

## Pseudo-elements

While pseudo-classes give us an alternative way to interact with our HTML elements based on their state or structure, pseudo-elements are more abstract. They allow us to affect parts of our HTML that aren’t elements at all.

`::marker` allows you to customize the styling of your <li> elements’ bullets or numbers.

`::first-letter` and `::first-line` allow you to (you guessed it!) give special styling to the first letter or line of some text.

`::selection` allows you to change the highlighting when a user selects text on the page.

`::before` and `::after` allow us to add extra elements onto the page with CSS, instead of HTML. Using it to decorate text in various ways is one common use case.

## Attribute selectors

Recall that an attribute is anything in the opening tag of an HTML element - such as `src='picture.jpg'` or `href="www.theodinproject.com"`

Since we write our own values for attributes, we need a slightly more flexible system to be able to target specific values.

Let's look at some examples for basic usage.

- `[attribute]`- This general selector will select anything where the given attribute exists. Its value doesn’t matter.

- `selector[attribute]` - Optionally we can combine our attribute selectors with other types of selectors, such as class or element selectors.

- `[attribute="value"]` - To get really specific, we can use = to match a specific attribute with a specific value

```css
  [src] {
    /* This will target any element that has a src attribute. */
  }

  img[src] {
    /* This will only target img elements that have a src attribute. */
  }

  img[src="puppy.jpg"] {
    /* This will target img elements with a src attribute that is exactly "puppy.jpg" */
  }
```

Sometimes we need to be more general in how we access these attributes. For example, perhaps we’re only interested in `img` elements where the `src` attribute’s value ends in `.jpg.` For cases like this we have some attribute selectors that allow us to match a part of the attribute’s value. If you’ve ever come across regular expressions before, these attributes use a similar syntax.

- `[attribute^="value"]` - ^= Will match strings from the start.
- `[attribute$="value"]` - $= Will match strings from the end.
- `[attribute*="value"]` - *= The wildcard selector will match anywhere inside the string.

```css
[class^='aus'] {
  /* Classes are attributes too!
    This will target any class that begins with 'aus':
    class='austria'
    class='australia'
  */
}

[src$='.jpg'] {
  /* This will target any src attribute that ends in '.jpg':
  src='puppy.jpg'
  src='kitten.jpg'
  */
}

[for*='ill'] {
  /* This will target any for attribute that has 'ill' anywhere inside it:
  for="bill"
  for="jill"
  for="silly"
  for="ill"
  */
}
```