# Xtyle CSS

<div align="center">
   <p><strong>A Lightweight CSS Micro Framework</strong></p>
   <p><code>28kb</code> minified | <code>5kb</code> gzipped</p>

[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![npm version](https://img.shields.io/npm/v/xtyle-css.svg)](https://www.npmjs.com/package/xtyle-css)

[Documentation](https://hlop3z.github.io/xtyle-css/) |
[GitHub](https://github.com/hlop3z/xtyle-css)

</div>

## Overview

Xtyle CSS is a utility-first CSS framework that provides a collection of atomic CSS classes for rapid UI development. With a focus on lightweight design and intuitive naming conventions, Xtyle CSS helps you build interfaces without writing custom CSS.

## Features

- **Lightweight**: Only 28kb (5kb gzipped)
- **Intuitive**: Simple abbreviated class names
- **No Dependencies**: Pure CSS solution
- **Responsive**: Built-in responsive utilities
- **Customizable**: Easy to extend and adapt

## Installation

### CDN

```html
<link href="https://unpkg.com/xtyle-css@latest" rel="stylesheet" />
```

### NPM

```bash
npm install xtyle-css
```

## Usage

Xtyle CSS uses abbreviated class names for quick styling:

```html
<!-- Flex container with spacing and border -->
<div class="d-f dx-ce dy-ce p-3 bd-a br-2">
  <!-- Bold centered text with margin -->
  <p class="td-b ta-c mb-2">Hello World</p>
</div>
```

## Core Modules

Xtyle CSS is organized into focused modules:

- **Core**: Display, positioning, and flex layouts (`d-f`, `dp-r`, `dx-ce`)
- **Borders**: Border styling and radius (`bd-a`, `br-2`)
- **Spacing**: Margin and padding utilities (`m-2`, `p-3`)
- **Text**: Typography utilities (`ts-1`, `td-b`, `ta-c`)
- **Shadows**: Shadow effects for depth
- **Rows**: Row-based layout utilities
- **Hide**: Visibility control (`d-n`, `d-hide`)

## License

BSD 3-Clause
