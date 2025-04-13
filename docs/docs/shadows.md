# Shadows

Shadow utilities allow you to add depth and dimension to your elements through directional box shadows.

## Usage Pattern

Shadow utilities follow the pattern **`s{side}-{depth}`**

- **Side**: `b` (bottom), `t` (top), `r` (right), or `l` (left)
- **Depth**: Numeric values representing shadow intensity

## Shadow Options

| Class Prefix                 | Direction          | Available Depths       | Effect                 |
| ---------------------------- | ------------------ | ---------------------- | ---------------------- |
| <code class="big">sb</code>  | Bottom shadow      | `0` to `24`            | Elevates element above surface |
| <code class="big">st</code>  | Top shadow         | `0` to `24`            | Creates inset or pressed appearance |
| <code class="big">sr</code>  | Right shadow       | `0` to `12`            | Adds depth to the left side |
| <code class="big">sl</code>  | Left shadow        | `0` to `12`            | Adds depth to the right side |

## Examples

```html
<!-- Basic shadows with different sides and depths -->
<div class="sb-3 p-3 m-3">Light bottom shadow (elevation 3)</div>
<div class="sb-8 p-3 m-3">Medium bottom shadow (elevation 8)</div>
<div class="sb-16 p-3 m-3">Heavy bottom shadow (elevation 16)</div>

<!-- Combining shadows for more complex effects -->
<div class="sb-6 sr-3 p-3 m-3">Bottom and right shadow</div>

<!-- Card with shadow -->
<div class="sb-4 p-4 m-3" style="width: 300px; border-radius: 4px;">
  <h3 class="ts-3">Card Title</h3>
  <p>This card uses a subtle bottom shadow to create depth.</p>
</div>

<!-- Inset effect with top shadow -->
<div class="st-8 p-4 m-3" style="width: 300px; border-radius: 4px; background: #f5f5f5;">
  <p>This element appears to be pressed into the surface.</p>
</div>

<!-- Button with shadow -->
<button class="sb-3 p-2 px-4 m-3" style="border: none; border-radius: 4px; background: #4285f4; color: white;">
  Elevated Button
</button>
```

## Interactive Shadow Example

For interactive elements like buttons, you can use different shadow depths for different states:

```html
<style>
  .btn {
    padding: 10px 20px;
    background: #4285f4;
    color: white;
    border: none;
    border-radius: 4px;
    transition: all 0.2s ease;
  }
  .btn:hover { box-shadow: var(--shadow-bottom-6); }
  .btn:active { box-shadow: var(--shadow-bottom-2); }
</style>

<button class="btn sb-4">Interactive Button</button>
```

## Material Design Inspired Elevation

The shadow system is inspired by Material Design's elevation concept, where higher values create more pronounced shadows, simulating greater distance from the surface:

- **Subtle elevation (1-4)**: For cards, buttons in resting state
- **Medium elevation (5-12)**: For dropdowns, dialogs, hovered elements
- **High elevation (13-24)**: For temporary UI like popups, tooltips

## Implementation Details

Each shadow class applies a CSS `box-shadow` property with appropriate values for offset, blur, spread, and color to create the shadow effect at a specific depth level.
