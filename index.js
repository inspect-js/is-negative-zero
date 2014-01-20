"use strict";

module.exports = function isNegativeZero(value) {
	return Infinity / Number(value) < 0;
};

