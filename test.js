/*!
 * then-read-json <https://github.com/tunnckoCore/then-read-json>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var thenReadJson = require('./index')

test('then-read-json:', function () {
  test('should throw TypeError if filepath is not a string', function (done) {
    function fixture () {
      thenReadJson()
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /then-read-json expect `fp` be string/)
    done()
  })
  test('should read json from given filepath', function (done) {
    var promise = thenReadJson('./package.json')

    promise.then(function (json) {
      test.equal(json.name, 'then-read-json')
      done()
    })
    .catch(done)
  })
  test('should catch errors', function (done) {
    var promise = thenReadJson('./packagdfgfdgge.json')

    promise.catch(function (err) {
      test.ifError(!err)
      test.equal(err.code, 'ENOENT')
      test.equal(err.path, './packagdfgfdgge.json')
      done()
    })
  })
})
