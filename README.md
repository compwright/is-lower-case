# @compwright/is-lower-case

[![Greenkeeper badge](https://badges.greenkeeper.io/compwright/is-lower-case.svg)](https://greenkeeper.io/)

[![Build status][travis-image]][travis-url]

Check if a string is lower case.

## Installation

```
npm install @compwright/is-lower-case --save
```

## Usage

```javascript
const isLowerCase = require('is-lower-case')

isLowerCase('STRING') // true
isLowerCase('String') // false
isLowerCase('string') // false

// Returns undefined for non-strings
isLowerCase(null) // undefined
```

Locale support:

```javascript
isLowerCase('STRİNG', 'tr') // true
```

## Typings

Includes a [TypeScript definition](is-lower-case.d.ts).

## License

MIT

[travis-image]: https://img.shields.io/travis/compwright/is-lower-case.svg?style=flat
[travis-url]: https://travis-ci.org/compwright/is-lower-case
