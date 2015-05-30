/*!
 * then-read-json <https://github.com/tunnckoCore/then-read-json>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var gfs = require('graceful-fs')
var parseJson = require('then-parse-json')
var Bluebird = require('native-or-bluebird')

module.exports = function thenReadJson (fp) {
  if (typeof fp !== 'string') {
    throw new TypeError('then-read-json expect `fp` be string')
  }

  var promise = new Bluebird(function (resolve, reject) {
    gfs.readFile(fp, 'utf8', function (err, res) {
      if (err) {
        return reject(err)
      }
      resolve(res)
    })
  })

  return promise.then(parseJson)
}
