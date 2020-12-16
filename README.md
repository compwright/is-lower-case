# @compwright/is-lower-case

[![Build status][travis-image]][travis-url]
[![Dependency Status](https://img.shields.io/david/compwright/is-lower-case.svg?style=flat-square)](https://david-dm.org/compwright/is-lower-case)
[![Download Status](https://img.shields.io/npm/dm/@compwright/is-lower-case.svg?style=flat-square)](https://www.npmjs.com/package/@compwright/is-lower-case)
[![Sponsor on GitHub](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&link=https://github.com/sponsors/compwright)](https://github.com/sponsors/compwright)

Check if a string is lower case.

Forked from [blakeembrey/is-lower-case](https://github.com/blakeembrey/is-lower-case), with the following improvements:

* Removed unnecessary dependencies
* Added locale support

## Installation

```
npm install @compwright/is-lower-case --save
```

## Usage

```javascript
const isLowerCase = require('@compwright/is-lower-case')

isLowerCase('STRING') // false
isLowerCase('String') // false
isLowerCase('string') // true

// Returns undefined for non-strings
isLowerCase(null) // undefined
```

Locale support:

```javascript
isLowerCase('STRİNG', 'tr') // false
```

## Typings

Includes a [TypeScript definition](is-lower-case.d.ts).

## License

MIT

[travis-image]: https://img.shields.io/travis/compwright/is-lower-case.svg?style=flat
[travis-url]: https://travis-ci.org/compwright/is-lower-case
