"use strict";

module.exports = function isNegativeZero(value) {
	return Number(value) === 0 && Infinity / Number(value) < 0;
};

