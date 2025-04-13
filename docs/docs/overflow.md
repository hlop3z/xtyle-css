# Overflow

Overflow utilities control how content behaves when it exceeds its container's dimensions.

## Usage Pattern

Overflow utilities follow the pattern **`o{axis}-{behavior}`**

- **Axis**: `y` (vertical) or `x` (horizontal)
- **Behavior**: `a` (auto) or `h` (hidden)

## Overflow Options

| Class                         | CSS Applied                | Description                                     |
| ----------------------------- | -------------------------- | ----------------------------------------------- |
| <code class="big">oy-a</code> | `overflow-y: auto`         | Adds scrollbar on Y-axis only when needed       |
| <code class="big">oy-h</code> | `overflow-y: hidden`       | Hides content that overflows vertically         |
| <code class="big">ox-a</code> | `overflow-x: auto`         | Adds scrollbar on X-axis only when needed       |
| <code class="big">ox-h</code> | `overflow-x: hidden`       | Hides content that overflows horizontally       |

## Examples

```html
<!-- Fixed height container with vertical scrolling -->
<div class="oy-a" style="height: 200px; width: 300px; border: 1px solid #ccc; padding: 10px;">
  <h3>Scrollable Content</h3>
  <p>This content will scroll vertically when it exceeds the container height.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, 
     nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisl
     nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisl
     nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisl.</p>
  <p>Additional content to demonstrate scrolling behavior...</p>
</div>

<!-- Fixed width container with horizontal scrolling -->
<div class="ox-a" style="width: 300px; border: 1px solid #ccc; margin-top: 20px;">
  <div style="width: 600px; padding: 10px;">
    <h3>Horizontally Scrollable Content</h3>
    <p>This content will scroll horizontally because it's wider than its container.</p>
  </div>
</div>

<!-- Container that hides overflow -->
<div class="oy-h" style="height: 100px; width: 300px; border: 1px solid #ccc; margin-top: 20px; padding: 10px;">
  <h3>Hidden Overflow</h3>
  <p>This content is cut off when it exceeds the container's height.</p>
  <p>Additional content that will be hidden...</p>
</div>
```

## Common Use Cases

### Scrollable Areas

Create scrollable areas for content without expanding the page layout:

```html
<!-- Scrollable table container -->
<div class="oy-a" style="max-height: 300px;">
  <table>
    <!-- Table content -->
  </table>
</div>

<!-- Scrollable sidebar -->
<aside class="oy-a" style="height: 100vh;">
  <!-- Sidebar content -->
</aside>
```

### Preventing Layout Shifts

Prevent unwanted layout shifts due to content size changes:

```html
<!-- Fixed size card with scrollable content area -->
<div class="card" style="height: 400px;">
  <div class="card-header">Card Title</div>
  <div class="card-body oy-a" style="height: calc(400px - 60px);">
    <!-- Variable height content -->
  </div>
</div>
```

### Mobile-Friendly Tables

Make data tables responsive by allowing horizontal scrolling:

```html
<!-- Responsive table container -->
<div class="ox-a">
  <table style="min-width: 600px;">
    <!-- Wide table content -->
  </table>
</div>
```
