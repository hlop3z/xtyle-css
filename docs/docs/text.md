# Typography

Typography utilities control text appearance including size, style, decoration, alignment, and text transformation.

## Usage Pattern

Text utilities follow the pattern **`t{type}-{value}`**

| Prefix                      | Controls        | Examples                                   |
| --------------------------- | --------------- | ------------------------------------------ |
| <code class="big">ts</code> | Text Size       | `ts-1` (largest) through `ts-6` (smallest) |
| <code class="big">td</code> | Text Decoration | `td-b` (bold), `td-i` (italic)             |
| <code class="big">tt</code> | Text Transform  | `tt-u` (uppercase), `tt-c` (truncate)      |
| <code class="big">ta</code> | Text Alignment  | `ta-c` (center), `ta-l` (left)             |

## Text Size

Font sizes are predefined with CSS variables:

```css
:root {
  --text-size-1: 3rem; /* ts-1 */
  --text-size-2: 2.25rem; /* ts-2 */
  --text-size-3: 1.5rem; /* ts-3 */
  --text-size-4: 1.25rem; /* ts-4 */
  --text-size-5: 1rem; /* ts-5 */
  --text-size-6: 0.875rem; /* ts-6 */
}
```

### Example - Text Size

```html
<h1 class="ts-1">Large Heading (3rem)</h1>
<h2 class="ts-2">Medium Heading (2.25rem)</h2>
<h3 class="ts-3">Small Heading (1.5rem)</h3>
<p class="ts-5">Normal paragraph text (1rem)</p>
<p class="ts-6">Small text (0.875rem)</p>
```

## Text Decoration

Control font weight, style, and text decorations:

| Class                         | Effect             | CSS Applied                     |
| ----------------------------- | ------------------ | ------------------------------- |
| <code class="big">td-b</code> | Bold text          | `font-weight: bold`             |
| <code class="big">td-i</code> | Italic text        | `font-style: italic`            |
| <code class="big">td-u</code> | Underlined text    | `text-decoration: underline`    |
| <code class="big">td-s</code> | Strikethrough text | `text-decoration: line-through` |

### Example - Text Decoration

```html
<p class="td-b">Bold text</p>
<p class="td-i">Italic text</p>
<p class="td-u">Underlined text</p>
<p class="td-s">Strikethrough text</p>
<p class="td-b td-i">Bold and italic text</p>
```

## Text Transform

Control text capitalization and truncation:

| Class                         | Effect            | CSS Applied                                                      |
| ----------------------------- | ----------------- | ---------------------------------------------------------------- |
| <code class="big">tt-t</code> | Title Case        | `text-transform: capitalize`                                     |
| <code class="big">tt-u</code> | UPPERCASE         | `text-transform: uppercase`                                      |
| <code class="big">tt-l</code> | lowercase         | `text-transform: lowercase`                                      |
| <code class="big">tt-c</code> | Truncate with ... | `text-overflow: ellipsis; white-space: nowrap; overflow: hidden` |

### Example - Text Transform

```html
<p class="tt-t">title case text (first letter of each word capitalized)</p>
<p class="tt-u">uppercase text (all capitals)</p>
<p class="tt-l">LOWERCASE TEXT (all lowercase)</p>
<div style="width: 200px">
  <p class="tt-c">
    This text will be truncated with an ellipsis when it's too long
  </p>
</div>
```

## Text Alignment

Control horizontal text alignment:

| Class                         | Effect             | CSS Applied          |
| ----------------------------- | ------------------ | -------------------- |
| <code class="big">ta-l</code> | Left-aligned text  | `text-align: left`   |
| <code class="big">ta-c</code> | Centered text      | `text-align: center` |
| <code class="big">ta-r</code> | Right-aligned text | `text-align: right`  |

### Example - Text Alignment

```html
<p class="ta-l">Left-aligned text (default)</p>
<p class="ta-c">Centered text</p>
<p class="ta-r">Right-aligned text</p>
```

## Combined Examples

```html
<!-- Heading with multiple text styles -->
<h1 class="ts-2 tt-u ta-c">CENTERED UPPERCASE HEADING</h1>

<!-- Important notice -->
<p class="td-b td-u">Important: Please read carefully!</p>

<!-- Truncated label -->
<div style="width: 150px" class="tt-c td-b">
  This is a very long text that will be truncated
</div>
```
