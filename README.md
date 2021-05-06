# is-negative-zero <sup>[![Version Badge][2]][1]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Is this value negative zero? === will lie to you.

## Example

```js
var isNegativeZero = require('is-negative-zero');
var assert = require('assert');

assert.notOk(isNegativeZero(undefined));
assert.notOk(isNegativeZero(null));
assert.notOk(isNegativeZero(false));
assert.notOk(isNegativeZero(true));
assert.notOk(isNegativeZero(0));
assert.notOk(isNegativeZero(42));
assert.notOk(isNegativeZero(Infinity));
assert.notOk(isNegativeZero(-Infinity));
assert.notOk(isNegativeZero(NaN));
assert.notOk(isNegativeZero('foo'));
assert.notOk(isNegativeZero(function () {}));
assert.notOk(isNegativeZero([]));
assert.notOk(isNegativeZero({}));

assert.ok(isNegativeZero(-0));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-negative-zero
[2]: https://versionbadg.es/inspect-js/is-negative-zero.svg
[5]: https://david-dm.org/inspect-js/is-negative-zero.svg
[6]: https://david-dm.org/inspect-js/is-negative-zero
[7]: https://david-dm.org/inspect-js/is-negative-zero/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-negative-zero#info=devDependencies
[11]: https://nodei.co/npm/is-negative-zero.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-negative-zero.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-negative-zero.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-negative-zero
[codecov-image]: https://codecov.io/gh/inspect-js/is-negative-zero/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-negative-zero/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/is-negative-zero
[actions-url]: https://github.com/inspect-js/is-negative-zero/actions
