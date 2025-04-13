# Spacing (Margin and Padding)

The spacing utilities control the whitespace around and within elements through margin and padding.

## Usage Pattern

Spacing utilities follow the pattern **`{type}{direction}-{size}`**

- **Type**: `m` (margin) or `p` (padding)
- **Direction**: `t`, `r`, `b`, `l`, `x`, or `y`
- **Size**: `0` through `24`, `auto`, or `n{size}` for negative values

## Margin vs Padding

| Prefix                     | CSS Property | Description                      |
| -------------------------- | ------------ | -------------------------------- |
| <code class="big">m</code> | `margin`     | Space outside element boundaries |
| <code class="big">p</code> | `padding`    | Space inside element boundaries  |

## Direction Control

Control which sides receive spacing:

| Direction                  | Applies To           | Example           |
| -------------------------- | -------------------- | ----------------- |
| <code class="big">t</code> | Top only             | `mt-4`, `pt-2`    |
| <code class="big">r</code> | Right only           | `mr-3`, `pr-4`    |
| <code class="big">b</code> | Bottom only          | `mb-5`, `pb-3`    |
| <code class="big">l</code> | Left only            | `ml-2`, `pl-1`    |
| <code class="big">x</code> | Left and right sides | `mx-4`, `px-auto` |
| <code class="big">y</code> | Top and bottom sides | `my-3`, `py-2`    |
| _(none)_                   | All sides            | `m-4`, `p-2`      |

## Size Values

Sizes range from `0` to `24`, representing increasing amounts of space:

- `0` - No space
- `1-24` - Increasing amounts of space
- `auto` - Browser-calculated automatic spacing (margin only)

## Negative Margins

For negative margins, add `n` before the size number:

```html
<div class="ml-n3">Pulled 3 units to the left</div>
<div class="mt-n12">Pulled 12 units upward</div>
```

## Examples

```html
<!-- Basic spacing -->
<div class="m-4">Margin on all sides</div>
<div class="p-4">Padding on all sides</div>

<!-- Directional spacing -->
<div class="mt-4">Margin top only</div>
<div class="px-3">Padding left and right</div>
<div class="my-2">Margin top and bottom</div>

<!-- Negative margins -->
<div class="mt-n4">Negative top margin</div>

<!-- Auto margins (great for centering) -->
<div class="mx-auto" style="width: 200px">Horizontally centered</div>

<!-- Combining margin and padding -->
<div class="m-2 p-4">Margin outside, padding inside</div>

<!-- Responsive layout example -->
<div class="d-f">
  <div class="px-2 py-3">Left column</div>
  <div class="px-2 py-3 ml-4">Right column with left margin</div>
</div>
```

## Common Use Cases

- **Card spacing**: `p-4` for internal card padding
- **Content sections**: `my-5` to separate major sections vertically
- **Grid gutters**: `px-2` for horizontal spacing between columns
- **Centering blocks**: `mx-auto` with a set width
- **Negative overlaps**: `mt-n2` to create overlapping elements
