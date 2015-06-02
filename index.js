/*!
 * then-read-json <https://github.com/tunnckoCore/then-read-json>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fs = require('mz/fs')

module.exports = function thenReadJson (fp) {
  if (typeof fp !== 'string') {
    throw new TypeError('then-read-json expect `fp` be string')
  }

  return fs.readFile(fp, 'utf8').then(JSON.parse)
}
