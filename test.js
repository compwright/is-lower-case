/* global describe, it */
var assert = require('assert')
var isLowerCase = require('./')

describe('isLowerCase()', function () {
  describe('without locale', function () {
    it('should return undefined if not a string', function () {
      assert.strictEqual(isLowerCase(), undefined)
      assert.strictEqual(isLowerCase(1.0), undefined)
      assert.strictEqual(isLowerCase(0), undefined)
      assert.strictEqual(isLowerCase(true), undefined)
      assert.strictEqual(isLowerCase(false), undefined)
      assert.strictEqual(isLowerCase(null), undefined)
      assert.strictEqual(isLowerCase([]), undefined)
      assert.strictEqual(isLowerCase({}), undefined)
    })

    it('should return true when the string is lower case', function () {
      assert.strictEqual(isLowerCase('test'), true)
    })

    it('should return false when the string is mixed or upper case', function () {
      assert.strictEqual(isLowerCase('TEST'), false)
      assert.strictEqual(isLowerCase('Test'), false)
    })

    it('should handle false positives and return false', function () {
      assert.strictEqual(isLowerCase('1'), false)
      assert.strictEqual(isLowerCase(''), false)
    })
  })

  describe('with locale', function () {
    it('should return undefined if not a string', function () {
      assert.strictEqual(isLowerCase(undefined, 'tr'), undefined)
      assert.strictEqual(isLowerCase(1.0, 'tr'), undefined)
      assert.strictEqual(isLowerCase(0, 'tr'), undefined)
      assert.strictEqual(isLowerCase(true, 'tr'), undefined)
      assert.strictEqual(isLowerCase(false, 'tr'), undefined)
      assert.strictEqual(isLowerCase(null, 'tr'), undefined)
      assert.strictEqual(isLowerCase([], 'tr'), undefined)
      assert.strictEqual(isLowerCase({}, 'tr'), undefined)
    })

    it('should return true when the string is upper case', function () {
      assert.strictEqual(isLowerCase('testi̇', 'tr'), true)
    })

    it('should return false when the string is mixed case', function () {
      assert.strictEqual(isLowerCase('STRİNG', 'tr'), false)
      assert.strictEqual(isLowerCase('Testi̇', 'tr'), false)
    })

    it('should handle false positives and return false', function () {
      assert.strictEqual(isLowerCase('1', 'tr'), false)
      assert.strictEqual(isLowerCase('', 'tr'), false)
    })
  })
})
