# Util | **Row, Column** and **Gap**

Follow this schema **`row g{direction}-{size}`**.

## Demo | **Row**

```html
<div class="row gx-1 gy-2"></div>
```

## GAP **Direction** (Options)

| Key                        | Description                 |
| -------------------------- | --------------------------- |
| <code class="big">x</code> | Right & Left (`column-gap`) |
| <code class="big">y</code> | Top & Bottom (`row-gap`)    |

## **Size** (Options)

| Min                        | Max                         |
| -------------------------- | --------------------------- |
| <code class="big">0</code> | <code class="big">16</code> |

---

## Demo | **Column**

```html
<div class="col col-lg-4 col-md-6 col-sm-12"></div>
```

## **Columns** (Options)

| Key                         | **`@media`** Device(s)                |
| --------------------------- | ------------------------------------- |
| <code class="big">sm</code> | **Small** (`max-width: 767px`)        |
| <code class="big">md</code> | **Medium** (`min-width: 768px`)       |
| <code class="big">lg</code> | **Large** (`min-width: 992px`)        |
| <code class="big">xl</code> | **Extra Large** (`min-width: 1200px`) |

## **Size** (Options)

| Min                        | Max                         |
| -------------------------- | --------------------------- |
| <code class="big">1</code> | <code class="big">12</code> |

## Full-Demo

```html
<div class="row gx-6 gy-3">
  <div
    class="col col-lg-4 col-md-6 col-sm-12"
    style="border: solid black 2px; height: 80px"
  ></div>
  <div
    class="col col-lg-4 col-md-6 col-sm-12"
    style="border: solid black 2px; height: 80px"
  ></div>
  <div
    class="col col-lg-4 col-md-6 col-sm-12"
    style="border: solid black 2px; height: 80px"
  ></div>
  <div
    class="col col-lg-4 col-md-6 col-sm-12"
    style="border: solid black 2px; height: 80px"
  ></div>
  <div
    class="col col-lg-4 col-md-6 col-sm-12"
    style="border: solid black 2px; height: 80px"
  ></div>
  <div
    class="col col-lg-4 col-md-6 col-sm-12"
    style="border: solid black 2px; height: 80px"
  ></div>
</div>
```
