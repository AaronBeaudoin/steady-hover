# 🎈 `steady-hover`

`steady-hover` is a tiny, dead simple JavaScript utility script with no dependencies which set a `data-input` attribute on your `<html>` element in the browser that can be used to apply the CSS `:hover` selector **only** if the user is using a mouse for input (as opposed to a touchscreen).

## Why use `steady-hover`?

For reasons known only to the web gods, the CSS `:hover` attribute is applied on touch devices when tapping. This doesn't make any sense, and perhaps, like me, you wish to disable this behavior. If so, `steady-hover` is for you.

## How to Use It

The `data-input` attribute is set to `mouse` when the user is using a mouse, and `touch` when the user is using a touchscreen. Therefore, when using the CSS `:hover` selector, begin your selector string with `html[data-input=mouse]`, like so:

```css
  html[data-input=mouse] .some-class:hover {
    background-color: red;
  }
```

That's all there is to it. 🎉
