# Grid System

Xtyle CSS provides a flexible grid system based on CSS Grid and Flexbox that simplifies responsive layouts.

## Basic Grid Structure

A grid consists of:
1. A container with the `row` class
2. Child elements with the `col` class
3. Optional gap utilities (`gx-*` and `gy-*`) for spacing

## Row Container

The `row` class creates a flex container that wraps its children and provides the foundation for the grid system.

```html
<div class="row">
  <!-- Columns go here -->
</div>
```

## Gap Utilities

Control the spacing between grid items using gap utilities:

| Class Pattern           | CSS Property       | Available Sizes    |
| ----------------------- | ------------------ | ------------------ |
| <code class="big">gx-*</code> | `column-gap`      | `0` through `16`   |
| <code class="big">gy-*</code> | `row-gap`         | `0` through `16`   |

```html
<!-- Grid with horizontal gap of 2 units and vertical gap of 3 units -->
<div class="row gx-2 gy-3">
  <!-- Columns -->
</div>
```

## Columns and Responsive Breakpoints

Columns automatically adjust based on the available space. Use responsive classes to control column width at different screen sizes:

| Prefix                      | Screen Width               | Example Use Case             |
| --------------------------- | -------------------------- | ---------------------------- |
| <code class="big">col-sm</code> | Small (max-width: 767px)   | Mobile phones               |
| <code class="big">col-md</code> | Medium (min-width: 768px)  | Tablets                     |
| <code class="big">col-lg</code> | Large (min-width: 992px)   | Laptops/Desktops           |
| <code class="big">col-xl</code> | Extra large (min-width: 1200px) | Large displays            |

Column sizes range from `1` to `12`, representing the number of columns out of 12 that the element should span.

```html
<!-- This column will be full width on small screens, half width on medium screens, 
     and one-third width on large screens -->
<div class="col col-sm-12 col-md-6 col-lg-4">Content</div>
```

## Complete Example

Here's a responsive grid with three columns that stack on mobile:

```html
<div class="row gx-4 gy-3">
  <!-- On mobile: 100% width, On tablet: 50% width, On desktop: 33.33% width -->
  <div class="col col-sm-12 col-md-6 col-lg-4">
    <div class="p-3" style="background-color: #f0f0f0; border-radius: 4px;">
      <h3>First Column</h3>
      <p>This column adjusts its width based on screen size.</p>
    </div>
  </div>
  
  <div class="col col-sm-12 col-md-6 col-lg-4">
    <div class="p-3" style="background-color: #f0f0f0; border-radius: 4px;">
      <h3>Second Column</h3>
      <p>On mobile, these stack vertically. On tablet, they form two columns.</p>
    </div>
  </div>
  
  <div class="col col-sm-12 col-md-12 col-lg-4">
    <div class="p-3" style="background-color: #f0f0f0; border-radius: 4px;">
      <h3>Third Column</h3>
      <p>On desktop, they form three equal columns.</p>
    </div>
  </div>
</div>
```

## Asymmetric Layouts

Create uneven column distributions for more diverse layouts:

```html
<div class="row gx-3">
  <!-- Sidebar: 1/4 width on large screens -->
  <div class="col col-sm-12 col-lg-3">
    <div class="p-3" style="background-color: #e0e0e0; height: 300px;">
      Sidebar
    </div>
  </div>
  
  <!-- Main content: 3/4 width on large screens -->
  <div class="col col-sm-12 col-lg-9">
    <div class="p-3" style="background-color: #f5f5f5; height: 300px;">
      Main Content Area
    </div>
  </div>
</div>
```

## Nested Grids

Grids can be nested within columns for more complex layouts:

```html
<div class="row gx-3">
  <div class="col col-md-6">
    <div class="p-3" style="background-color: #e0e0e0;">
      <h3>Main Column</h3>
      
      <!-- Nested grid -->
      <div class="row gx-2 gy-2">
        <div class="col col-6">Nested Column 1</div>
        <div class="col col-6">Nested Column 2</div>
      </div>
    </div>
  </div>
  
  <div class="col col-md-6">
    <div class="p-3" style="background-color: #e0e0e0;">
      Second Main Column
    </div>
  </div>
</div>
```

## Auto-Width Columns

Omit the column width specifications to let columns automatically share the available space:

```html
<div class="row">
  <div class="col">Equal width</div>
  <div class="col">Equal width</div>
  <div class="col">Equal width</div>
</div>
```
