# Util | **Margin** and **Padding**

Follow this schema **`{type}{direction}-{size}`**

For negative **`{type}{direction}-n{size}`**

Notice how there's a "**`n`**" before **`{size}`**

!!! tip

    You can also use **`auto`**

## Demo

```html
<!-- Normal -->
<div class="mt-12"></div>

<!-- Negative -->
<div class="ml-n12"></div>

<!-- Auto -->
<div class="mx-auto"></div>
```

## **Type** (Options)

| Key                        | Description |
| -------------------------- | ----------- |
| <code class="big">m</code> | Margin      |
| <code class="big">p</code> | Padding     |

## **Direction** (Options)

| Key                        | Description  |
| -------------------------- | ------------ |
| <code class="big">t</code> | Top          |
| <code class="big">b</code> | Bottom       |
| <code class="big">r</code> | Right        |
| <code class="big">l</code> | Left         |
| <code class="big">x</code> | Right & Left |
| <code class="big">y</code> | Top & Bottom |

## **Size** (Options)

| Min                        | Max                         |
| -------------------------- | --------------------------- |
| <code class="big">0</code> | <code class="big">24</code> |
