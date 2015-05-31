# then-read-json [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Read JSON file using promises

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i then-read-json --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var thenReadJson = require('then-read-json')

thenReadJson('./package.json')
.then(function (res) {
  console.log(res)
  //=> {name: 'then-read-json' ...}
})
.catch(console.error)
```


## Related
- [make-callback](https://github.com/tunnckoCore/make-callback): Make synchronous function to support callback api
- [then-parse-json](https://github.com/tunnckoCore/then-parse-json): Gracefully parse JSON using promises - promisified JSON.parse
- [then-stringify-json](https://github.com/tunnckoCore/then-stringify-json): Gracefully stringify JSON using promises - promisified JSON.stringify
- [then-write-json](https://github.com/tunnckocore/then-write-json): Write contents to JSON file using JSON.stringify and promises… [more](https://github.com/tunnckocore/then-write-json)
- [then-write-file](https://github.com/tunnckocore/then-write-file): Write file to disk, using promises and creating recursively… [more](https://github.com/tunnckocore/then-write-file)
- [try-read-json](https://github.com/tunnckoCore/try-read-json): Fast, meaningful and correct try/catch flow for reading JSON with JSON.parse - support optional callback



## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/then-read-json/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/then-read-json
[npmjs-img]: https://img.shields.io/npm/v/then-read-json.svg?label=then-read-json

[license-url]: https://github.com/tunnckoCore/then-read-json/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/then-read-json
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/then-read-json.svg

[travis-url]: https://travis-ci.org/tunnckoCore/then-read-json
[travis-img]: https://img.shields.io/travis/tunnckoCore/then-read-json.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/then-read-json
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/then-read-json.svg

[david-url]: https://david-dm.org/tunnckoCore/then-read-json
[david-img]: https://img.shields.io/david/tunnckoCore/then-read-json.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
