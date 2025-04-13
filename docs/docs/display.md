# Display and Alignment

The display utilities control how elements are rendered on the page and how they're aligned within flex containers.

## Display Types

Use the pattern **`d-{type}`** to control element display types:

| Class                           | CSS Applied                  |
| ------------------------------- | ---------------------------- |
| <code class="big">d-b</code>    | `display: block`             |
| <code class="big">d-ib</code>   | `display: inline-block`      |
| <code class="big">d-f</code>    | `display: flex`              |
| <code class="big">d-if</code>   | `display: inline-flex`       |
| <code class="big">d-n</code>    | `display: none !important`   |
| <code class="big">d-hide</code> | `visibility: hidden !important` |

### Example

```html
<div class="d-b">Display: Block</div>
<div class="d-ib">Display: Inline-Block</div>
<div class="d-f">Display: Flex</div>
<div class="d-if">Display: Inline-Flex</div>
<div class="d-n">Display: None (Hidden)</div>
<div class="d-hide">Visibility: Hidden (Space reserved)</div>
```

## Positioning

Use the pattern **`dp-{position}`** to control element positioning:

| Class                         | CSS Applied             |
| ----------------------------- | ----------------------- |
| <code class="big">dp-r</code> | `position: relative`    |
| <code class="big">dp-a</code> | `position: absolute`    |
| <code class="big">dp-s</code> | `position: sticky`      |
| <code class="big">dp-f</code> | `position: fixed`       |

---

## Flex Utilities

Comprehensive utilities for working with flexbox layouts.

### Alignment

Use these patterns to control flex item alignment:
- **`dy-{value}`** for vertical alignment (`align-items`)
- **`dx-{value}`** for horizontal alignment (`justify-content`)

| Class                       | Description              | CSS Applied                |
| --------------------------- | ------------------------ | -------------------------- |
| <code class="big">dy-fs</code> | Align items flex-start  | `align-items: flex-start` |
| <code class="big">dy-fe</code> | Align items flex-end    | `align-items: flex-end`   |
| <code class="big">dy-ce</code> | Align items center      | `align-items: center`     |
| <code class="big">dy-st</code> | Align items stretch     | `align-items: stretch`    |
| <code class="big">dx-fs</code> | Justify content flex-start | `justify-content: flex-start` |
| <code class="big">dx-fe</code> | Justify content flex-end   | `justify-content: flex-end`   |
| <code class="big">dx-ce</code> | Justify content center     | `justify-content: center`     |
| <code class="big">dx-sb</code> | Justify content space-between | `justify-content: space-between` |
| <code class="big">dx-sa</code> | Justify content space-around  | `justify-content: space-around`  |
| <code class="big">dx-se</code> | Justify content space-evenly  | `justify-content: space-evenly`  |

### Example - Alignment

```html
<!-- Centered content horizontally and vertically -->
<div class="d-f dx-ce dy-ce">
  <div>Perfectly centered content</div>
</div>

<!-- Space between items horizontally, align to top -->
<div class="d-f dx-sb dy-fs">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</div>
```

### Flex Direction and Growth

Control flex direction and item growth:

| Class                           | CSS Applied                   |
| ------------------------------- | ----------------------------- |
| <code class="big">df-row</code> | `flex-direction: row`         |
| <code class="big">df-col</code> | `flex-direction: column`      |
| <code class="big">df-fw</code>  | `flex-wrap: wrap`             |
| <code class="big">df-g0</code>  | `flex-grow: 0 !important`     |
| <code class="big">df-g1</code>  | `flex-grow: 1 !important`     |

!!! warning "`df-col`"
    When using `df-col` (flex-direction: column), a fixed height is required for `flex-grow` to work properly.

### Example - Flex Growth and Direction

```html
<!-- Items with varying growth -->
<div class="d-f dx-sb">
  <div class="df-g1">Wide</div>
  <div class="df-g0">Narrow</div>
  <div class="df-g1">Wide</div>
</div>

<!-- Column layout with wrapping -->
<div class="d-f df-col df-fw" style="height: 300px">
  <div>First</div>
  <div class="df-g1">Grows to fill space</div>
  <div>Last</div>
</div>
```
