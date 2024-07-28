# Util | **Borders**

Follow this schema **`b{type}-{value}`**.

## **Borders** (Options)

| Key                         | Description                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| <code class="big">bw</code> | Border-**Width** ~ Options: (**`0`** to **`5`**)                                                                                         |
| <code class="big">bs</code> | Border-**Style** ~ Options: (**`dotted`** - **`dashed`** - **`solid`**)                                                                  |
| <code class="big">br</code> | Border-**Radius** ~ Options: (**`0`** to **`4`**) and (**`100p`** - **`pill`** - **`b`** - **`t`** - **`r`** - **`l`**)                  |
| <code class="big">bd</code> | Border-**Display** ~ Options: (**`a`** - **`b`** - **`t`** - **`r`** - **`l`**) or (**`n`** - **`nb`** - **`nt`** - **`nr`** - **`nl`**) |

!!! tip

    You will notice the "**`b`, `t`, `r`, `l`**" a lot and sometimes the "**`n`**"

- <code class="big">B</code> stands for **Bottom**
- <code class="big">T</code> stands for **Top**
- <code class="big">R</code> stands for **Right**
- <code class="big">L</code> stands for **Left**

and . . .

- <code class="big">N</code> stands for **Negative** aka: the opposite. In this case **`display : none`** borders.
- <code class="big">A</code> stands for **All** In this case **`display : all`** borders.

## Demo

```html
<div class="bw-2 bs-solid">Hello World</div>
<div class="bs-dotted">Hello World</div>
<div class="br-pill bs-solid">Hello World</div>
<div class="bd-a">Hello World</div>
```
