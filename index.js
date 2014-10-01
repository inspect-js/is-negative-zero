'use strict';

module.exports = function isNegativeZero(value) {
	var number = Number(value);
	return number === 0 && (1 / number) === -Infinity;
};

