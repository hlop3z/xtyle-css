# Borders

Border utilities provide easy control over border appearance, width, style, and radius.

## Usage Pattern

Border utilities follow the pattern **`b{type}-{value}`**

| Prefix                      | Description      | Options                                                                           |
| --------------------------- | ---------------- | --------------------------------------------------------------------------------- |
| <code class="big">bw</code> | Border Width     | `0` to `5` (increasing thickness)                                                 |
| <code class="big">bs</code> | Border Style     | `dotted`, `dashed`, `solid`                                                       |
| <code class="big">br</code> | Border Radius    | `0` to `4` (increasing radius), `100p` (circular), `pill` (rounded), directional  |
| <code class="big">bd</code> | Border Display   | `a` (all), `b` (bottom), `t` (top), `r` (right), `l` (left), or with `n` prefix   |

## Direction Abbreviations

Xtyle CSS uses consistent abbreviations for directions:

- <code class="big">a</code> - **All** sides
- <code class="big">t</code> - **Top** side
- <code class="big">r</code> - **Right** side
- <code class="big">b</code> - **Bottom** side
- <code class="big">l</code> - **Left** side

## No-Border Utilities

Adding `n` prefix to border display removes borders:

- <code class="big">bd-n</code> - No border on any side
- <code class="big">bd-nt</code> - No border on top
- <code class="big">bd-nr</code> - No border on right
- <code class="big">bd-nb</code> - No border on bottom
- <code class="big">bd-nl</code> - No border on left

## Examples

```html
<!-- Border width and style -->
<div class="bd-a bw-2 bs-solid">Box with medium-thick solid border</div>

<!-- Border style only -->
<div class="bd-a bs-dotted">Box with dotted border</div>

<!-- Pill-shaped element -->
<div class="bd-a br-pill bs-solid">Pill-shaped border</div>

<!-- Mixed border styles -->
<div class="bd-t bd-b bw-1 bs-dashed">Dashed top and bottom borders</div>

<!-- Removing specific borders -->
<div class="bd-a bd-nt bs-solid">Borders on all sides except top</div>

<!-- Border radius on specific corners -->
<div class="br-t bs-solid bd-a">Rounded top corners only</div>
```

## All Available Classes

### Border Width
- `bw-0`, `bw-1`, `bw-2`, `bw-3`, `bw-4`, `bw-5`

### Border Style
- `bs-dotted`, `bs-dashed`, `bs-solid`

### Border Radius
- Size: `br-0`, `br-1`, `br-2`, `br-3`, `br-4`
- Special: `br-100p` (circle), `br-pill` (rounded pill)
- Directional: `br-t`, `br-r`, `br-b`, `br-l`

### Border Display
- Show: `bd-a`, `bd-t`, `bd-r`, `bd-b`, `bd-l`
- Hide: `bd-n`, `bd-nt`, `bd-nr`, `bd-nb`, `bd-nl`
