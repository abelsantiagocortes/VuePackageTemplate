# vue-package-template

This repository serves as a basic structure for a Yarn package that includes a main Vue component so
that it can be included in external projects as an iframe or plugin.

It provides a starting point for developing, testing, and publishing Vue components.

## Features

    - Pre-configured with Vue 2
    - Yarn for package management
    - Basic Vue component structure
    - Example component included
    - Setup for unit testing with Jest

## Getting Started
### Prerequisites

    Node.js (>= 14.x)
    Yarn (>= 1.x)

### Install dependencies:**

```bash
  yarn install
```

### Development

To start the development server and watch for changes:

```bash
yarn serve
```

### Usage


The `index.js` file serves as the entry point for your Vue component library.
It uses jQuery and Vue to render a main Vue component into a specified HTML element.

To use the VueComponent class and render the main Vue component into an HTML element with a specific ID:

```javascript
  import { VueComponent } from './index'

  const component = new VueComponent()
  component.render('your-element-id')
```

### Testing

To run the unit tests:

```bash
yarn test
```

