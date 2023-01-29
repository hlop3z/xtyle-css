# Util | **Display** and **Alignment**

Follow this schema **`d-{type}`**

| Key                           | Description                    |
| ----------------------------- | ------------------------------ |
| <code class="big">d-b</code>  | css -> `display: block`        |
| <code class="big">d-ib</code> | css -> `display: inline-block` |
| <code class="big">d-f</code>  | css -> `display: flex`         |
| <code class="big">d-if</code> | css -> `display: inline-flex`  |
| <code class="big">d-n</code>  | css -> `display: none`         |

## Demo | **Display**

```html
<div class="d-b">Display: Block</div>
<div class="d-ib">Display: Inline-Block</div>
<div class="d-f">Display: Flex</div>
<div class="d-if">Display: Inline-Flex</div>
<div class="d-n">Display: None</div>
```

## **Alignment** (Options)

Follow this schema **`d{ y | x }-{spacing}`**

| Key                         | Description              |
| --------------------------- | ------------------------ |
| <code class="big">dy</code> | css -> `align-items`     |
| <code class="big">dx</code> | css -> `justify-content` |

## Demo | **Alignment**

```html
<div class="d-f dx-fs">Flex-Start</div>
<div class="d-f dy-st">Stretch</div>
```

## **DY** and **DX** (Options)

| Key                         | Description         |
| --------------------------- | ------------------- |
| <code class="big">fs</code> | css -> `flex-start` |
| <code class="big">fe</code> | css -> `flex-end`   |
| <code class="big">ce</code> | css -> `center`     |

## **DY** | Align-Items (Options)

| Key                         | Description      |
| --------------------------- | ---------------- |
| <code class="big">st</code> | css -> `stretch` |

## **DX** | Justify-Content (Options)

| Key                         | Description            |
| --------------------------- | ---------------------- |
| <code class="big">sb</code> | css -> `space-between` |
| <code class="big">sa</code> | css -> `space-around`  |
| <code class="big">se</code> | css -> `space-evenly`  |

## Demo | **Flex-Grow**

```html
<div class="d-f dx-sb">
  <div class="df-g1">Big</div>
  <div class="df-g0">Small</div>
  <div class="df-g1">Big</div>
</div>
```

## **DF** | Flex-Grow (Options)

| Key                            | Description           |
| ------------------------------ | --------------------- |
| <code class="big">df-g0</code> | css -> `flex-grow: 0` |
| <code class="big">df-g1</code> | css -> `flex-grow: 1` |

## **DF** | Flex-Direction (Options)

| Key                             | Description                     |
| ------------------------------- | ------------------------------- |
| <code class="big">df-row</code> | css -> `flex-direction: row`    |
| <code class="big">df-col</code> | css -> `flex-direction: column` |

!!! warning "`df-col`"

        The `flex-direction: column` requires a fixed `height`. For the `flex-grow` to work.
