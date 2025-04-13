# Extras

The Extras module provides additional utility classes for common CSS needs that don't fit into other categories.

## Usage Pattern

Extra utilities follow two patterns:

- **`e-{value}`** for simple properties
- **`e{type}-{value}`** for grouped properties

## Available Utilities

| Class                            | CSS Property        | Description                   |
| -------------------------------- | ------------------- | ----------------------------- |
| <code class="big">e-ns</code>    | `user-select: none` | Prevents text selection       |
| <code class="big">e-p</code>     | `cursor: pointer`   | Shows pointer cursor on hover |
| <code class="big">eh-100v</code> | `height: 100vh`     | Full viewport height          |
| <code class="big">eh-100p</code> | `height: 100%`      | 100% of parent height         |
| <code class="big">eh-i</code>    | `height: inherit`   | Inherits height from parent   |
| <code class="big">ew-100v</code> | `width: 100vw`      | Full viewport width           |
| <code class="big">ew-100p</code> | `width: 100%`       | 100% of parent width          |
| <code class="big">ew-i</code>    | `width: inherit`    | Inherits width from parent    |
| <code class="big">ef-r</code>    | `float: right`      | Floats element to the right   |
| <code class="big">ef-l</code>    | `float: left`       | Floats element to the left    |

## Examples

### User Interaction

```html
<!-- Prevent text selection (useful for icons, buttons) -->
<div class="e-ns">This text cannot be selected by the user</div>

<!-- Add pointer cursor to indicate interactivity -->
<div class="e-p">This element shows a pointer cursor on hover</div>
```

### Height Control

```html
<!-- Full viewport height container -->
<div class="eh-100v">This div is the full height of the viewport</div>

<!-- Container taking 100% of parent height -->
<div style="height: 300px;">
  <div class="eh-100p" style="background-color: #f0f0f0;">
    This div is exactly as tall as its parent
  </div>
</div>

<!-- Inherit height -->
<div style="height: 200px;">
  <div class="eh-i" style="background-color: #e0e0e0;">
    This inherits the height from parent
  </div>
</div>
```

### Width Control

```html
<!-- Full viewport width -->
<div class="ew-100v">This spans the entire viewport width</div>

<!-- 100% parent width -->
<div style="width: 500px;">
  <div class="ew-100p" style="background-color: #f0f0f0;">
    This is 100% of the parent's width (500px)
  </div>
</div>

<!-- Inherit width -->
<div style="width: 400px;">
  <div class="ew-i" style="background-color: #e0e0e0;">
    This inherits width from parent
  </div>
</div>
```

### Float Layout

```html
<!-- Basic float example -->
<div style="background-color: #f5f5f5; padding: 10px; overflow: auto;">
  <div class="ef-l" style="background-color: #ddd; padding: 10px;">
    Floated left
  </div>
  <div class="ef-r" style="background-color: #ddd; padding: 10px;">
    Floated right
  </div>
</div>

<!-- Using float for layout -->
<div style="overflow: auto; margin-top: 20px;">
  <img
    src="https://via.placeholder.com/100"
    class="ef-l"
    style="margin-right: 10px;"
  />
  <p>
    This text wraps around the left-floated image. In modern layouts, consider
    using flexbox or grid instead of floats, but floats remain useful for
    text-wrapping around images.
  </p>
</div>
```

## Common Use Cases

- Use `e-ns` for buttons, icons, and interactive elements to prevent accidental text selection
- Use `e-p` for clickable elements that don't look like traditional links or buttons
- Use height/width utilities (`eh-*`, `ew-*`) for quick layout adjustments
- Use float utilities (`ef-*`) when you need text to wrap around images or for simple layouts
