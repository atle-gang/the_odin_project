# Links and Images

To create a link in HTML, we use the anchor element. An anchor element is defined by wrapping the text or another HTMl element we want to be a link with an `<a>` tag.

```html
<a>click me</a>
```

An HTML attribute gives additional information to an HTMl element and always goes in the element's opening tag.
An attribute is usually made up of two parts; a name, and a value; however not all attributes require a value.

## Anchor tag attribute

```html
<a href="https://www.google.com">click me</a>
```
By default, any text wrapped with an anchor tag without a href attribute will look like plain text. If the href attribute is present, the browser will give the text a blue color and underline it to signify it is a link.

## Opening links in a new tab

The default behavious of most browswers is that it opens links in the same tab as the webpage containing them.

It can be changed easily. all we need is another attribute: the `target` attribute.

`target` specifies where the linked resource will be opened. If it not present, by default, it will take on the `-self` value which opens the link in the current tab.
To open the link in a new tab or window, you can set it to `_blank` as follows:

```html
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">click me</a>
```

The `rel` atrribute is used to describe the relation between the current page and the linked document. The `noopener` value prevents the opened link from gaining access to the webpage from which it was opened. The `noreferrer`va lues prevents the opened link from knwoing which webpage or resource has  a link to it.

The above prevents phsihing attacks.

Note that you may be fine if you forget to add rel="noopener noreferrer" since more recent versions of browsers provide this security if only target="_blank" is present.

## Absolute and relative links

### Absolute links

A typical absolute link will be made up of the following parts: `protocol://domain/path`.

### Relative links

Links to other pages within our own website are called relative links. They do not include the domain name.

## Images

To display an image in HTML we use the `<img>` element. The `img` element is self-closing.

Instead of wrapping content with an opening and closing tag, it embeds an image into the page using a src attribute which tells the browser where the image file is located.

For example, using an absolute path we can display an image located on The Odin Project site:

```html
<img src="https://www.theodinproject.com/mstile-310x310.png">
```

## Parent directories

To go to the parent directory we need to use two dots in the relative filepath like this: ../