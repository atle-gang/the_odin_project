
# HTML Boilerplate

All HTML documents have the same basic structure or boilerplate that needs to be in place before anything useful can be done.

We should  always name the HTML file that will contain the homepage of our websites `index.html`. This is because web servers will by default look for an `index.html` page when users land on our websites - and not having one will cause problems.

## The DOCTYPE
Every HTML page starts with a doctype declararion. The purpose is to tell the browser what version of HTML it should use to render the document. The latest version of HTML is HTML5, and the doctype for that version is simply `<!DOCTYPE html>`

Below is the doctype declaration of HTML$ which was a bit more complicated:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

## HTML element
This is what's known as the root element of the document, meaning that every other element in the document will be the descendant of it.

```html
<!DOCTYPE html>
<html lang="en">
</html>
```


### Head element
The `<head>` element is where we put important meta-information about our webpages, and stuff required for our webpages to render correctly in the browser. Inside the `<head>`, we SHOULD NOT use any element that displays content on the webpage.

### Meta element
We should always have a `<meta>` tag with the charset encoding of the webpage in the `<head>` element: `<meta charset="utf-8">`.

Doing this ensures that the webpage will display special symbols and characters from different languages correctly in the browser.

### Title element
Another element we should always include in the head of an HTML document is the `<title>` element.

```html
<title>My First Webpage</title>
```

The `<title>` element gives the webpages a human-readable title which is displaayed in our webpage's browser tab.

```html
<!DOCTYPE>

<html lang="en">
  <head>
    <meta charset="UTF-8">
	<title>My First Webpage<title>
  </head>
</html>
```

## Body element
The final element needed to complete the HTML boilerplate is the `<body>` element. This is where all the content that will be displayed to users will go - the text, images, lists, links and so on.

To complete the boilerplate, add a `<body>` element to the `index.html` file. The `<body>` element also goes withib the `<html>` element is always below the `<head>` element, like so:

```html
<!DOCTYPE>

<html lang="en">
  <head>
	<meta charset="UTF-8">
    <title>My First Webpage<title>
  </head>
	
  <body>
	<h1>Hello World!</h1>
  </body>
</html>
```























