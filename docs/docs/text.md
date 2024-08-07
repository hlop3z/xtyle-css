# Util | **Text**

Follow this schema **`t{type}-{value}`**.

| Key                         | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| <code class="big">ts</code> | Text-**Size** ~ Options: (**`1`** to **`6`**)                           |
| <code class="big">td</code> | Text-**Decoration** ~ Options: (**`i`** - **`b`** - **`u`** - **`s`** ) |
| <code class="big">tt</code> | Text-**Transform** ~ Options: (**`t`** - **`u`** - **`l`** - **`c`** )  |
| <code class="big">ta</code> | Text-**Align** ~ Options: (**`c`** - **`r`** - **`l`** )                |

## Demo

```html
<div class="ts-6">Hello World</div>
<div class="td-i">Hello World</div>
<div class="tt-u">Hello World</div>
<div class="ta-c">Hello World</div>
```

---

## **Options**

---

### Text **Transform**

- <code class="big">t</code> meaning **Title** (**`capitalize`**)
- <code class="big">u</code> meaning **Upper** (**`uppercase`**)
- <code class="big">l</code> meaning **Lower** (**`lowercase`**)
- <code class="big">c</code> meaning **Cut** (**`ellipsis`**)

### Text **Decoration**

- <code class="big">i</code> meaning **Italic** (**`italic`**)
- <code class="big">b</code> meaning **Bold** (**`bold`**)
- <code class="big">u</code> meaning **Underline** (**`underline`**)
- <code class="big">s</code> meaning **Strike** (**`line-through`**)

### Text **Align**

- <code class="big">c</code> meaning **Center** (**`center`**)
- <code class="big">l</code> meaning **Left** (**`left`**)
- <code class="big">r</code> meaning **Right** (**`right`**)
