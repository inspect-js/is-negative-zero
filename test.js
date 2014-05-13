"use strict";

var test = require('tape');
var isNegativeZero = require('./');

test('not negative zero', function (t) {
	t.notOk(isNegativeZero(), 'undefined is not negative zero');
	t.notOk(isNegativeZero(null), 'null is not negative zero');
	t.notOk(isNegativeZero(false), 'false is not negative zero');
	t.notOk(isNegativeZero(true), 'true is not negative zero');
	t.notOk(isNegativeZero(0), 'positive zero is not negative zero');
	t.notOk(isNegativeZero(Infinity), 'Infinity is not negative zero');
	t.notOk(isNegativeZero(-Infinity), '-Infinity is not negative zero');
	t.notOk(isNegativeZero(NaN), 'NaN is not negative zero');
	t.notOk(isNegativeZero('foo'), 'string is not negative zero');
	t.notOk(isNegativeZero([]), 'array is not negative zero');
	t.notOk(isNegativeZero({}), 'object is not negative zero');
	t.notOk(isNegativeZero(function () {}), 'function is not negative zero');
	t.notOk(isNegativeZero(-1), '-1 is not negative zero');

	t.end();
});

test('things whose valueOf is negative zero', function (t) {
	t.ok(isNegativeZero({ valueOf: function () { return -0; } }), 'object with valueOf of negative zero is negative zero');
	t.ok(isNegativeZero('-0'), 'string negative zero is negative zero');
	t.end();
});

test('negative zero', function (t) {
	t.ok(isNegativeZero(-0), 'negative zero is negative zero');
	t.end();
});

