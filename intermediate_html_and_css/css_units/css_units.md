## Absolute units

Absolute units are those that are always the same in any context. `px` is an absolute unit because the size of a pixel does not change relative to anything else on the page. In fact,`px` is the only absolute unit you should be using for web projects. The rest of them make more sense in a print setting because they are related to physical units such as `in` (inch) and `cm` (centimeter)

## Relative units

Relative units are units that can change based on their context. 

### em and rem

`em` and `rem` both refer to a font size, though they are often used to define other sizes in CSS. 

`1em` is the `font-size` of an element (or the element's parent if you're using it to set `font-size`). So, for example, if an element's `font-size` is `16px`, then setting its width to `4em` would make its width (`16 * 4 == 64`).

`1rem` is the `font-size` of the root element (either `:root` or `html`). The math works the same with `rem` as it did with `em`,, but without adding complexity of keeping track of the parent's font size. 

Using a relative size like `rem` to define font sized across your website is recommended. 

### Viewport units

The units `vh` and `vw` relate to the size of the viewport. Specifically, `1vh` is equal to `1%` of the viewport height and `1vw` is equal to `1%` of the viewport width.


## [Codeyloyd](https://codyloyd.com/2021/css-units/)

- rem for font-sizes and px for pretty much everthing else.
