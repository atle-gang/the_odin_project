# Working with text

## Paragraphs
If we want to create paragraphs in HTML, we need to use the paragraph element, which will add a new line after each of our paragraphs. A paragraph element is defined by wrapping a text in a `<p>` tag.

```html
<html>
    <head>
    </head>
    <body>
        <p>Lorem ipsum dolor sit amet...</p>

        <p>Ut enim ad minim veniam...</p>
    </body>
</html>
```

## Headings
Headings are displayed larger and bolder than any other text to signify that the they are headings.

There are 6 different levels of headings starting from `<h1>` to `<h6>`. The largest and most important heading is h1, while h6 is the tiniest heading at the lowest level.

```html
<html>
    <head>
    </head>
    <body>
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>
        <h4>This is heading 4</h4>
        <h5>This is heading 5</h5>
        <h6>This is heading 6</h6>
    </body>
</html>
```

An h1 heading should always be used for the heading of the overall page, and the lower level headings should be used for headings for content in smaller sections of the page.


## Strong element
The `<strong>` element makes text bold. It also semantically marks text as important; this affects tools, like screen readers, that users with visual impairments will rely on to use your website.

You can use `<strong>` on its own:

```html
<html>
    <head>
    </head>
    <body>
        <strong>Lorem ipsum dolor</strong>
    </body>
</html>
```

## Em element
The `<em>` element makes text italic. It semantically places emphasis on the text, which again may affect things like screen readers.

You can use `<em>` on its own:

```html
<html>
    <head>
    </head>
    <body>
        <em>Lorem ipsum dolor</em>
    </body>
</html>
```

