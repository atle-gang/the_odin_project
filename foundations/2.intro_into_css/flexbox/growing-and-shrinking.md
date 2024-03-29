## The flex shorthand

The `flex` declaration is actually a shorthand for 3 properties that you can set on a short item.
These properties affect how flex items size themselves within their container.

In this case, ` flex` is actually a shorthand for `flex-grow`, `flex-shrink` and `flex-basis`

```css
div {
    flex: 1;
}
```

`flex: 1;` equates to: `flex-grow: 1;`, `flex-shrink: 1`, `flex-basis: 0;`

Very often yoy see the flex shorthand defined with only one value. In that case, that value is applied to `flex-grow`. So when we put `flex: 1` on our divs, we were actually specifying a shorthand of `flex: 1 1 0`.




