# VueGodfather

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/crsten/vue-godfather.svg?branch=master&style=flat-square)](https://travis-ci.org/crsten/vue-godfather)
[![npm](https://img.shields.io/npm/dt/vue-godfather.svg?style=flat-square)](https://www.npmjs.com/package/vue-godfather)
[![npm](https://img.shields.io/npm/v/vue-godfather.svg?style=flat-square)](https://www.npmjs.com/package/vue-godfather)

Vue directive wrapper for [godfather](https://github.com/crsten/godfather)

## Demo

[Check out a simple demo](https://crsten.github.io/godfather/)

## Installation

`npm install vue-godfather`

### import syntax

```js
import Godfather from 'vue-godfather'

new Vue({
  //...
  directives: {
    Godfather: Godfather,
  },
  //...
})
```

### In browser

```js
new Vue({
  //...
  directives: {
    Godfather: VueGodfather,
  },
  //...
})
```

## Usage

```html
<div v-godfather="{ id: 'YourID', options: { ...options as in godfather } }">
  <!--Your content-->
</div>
```

Options are based on options from [godfather](https://github.com/crsten/godfather)

## Development & Testing

`npm run dev` starts webpack with watch mode.

## License

[The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) Carsten Jacobsen
