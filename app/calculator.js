'use strict';

var cal = {};

/*
* Module Pattern Calculator
*/
(function(my) {

	cal.Add = function(numbers) {
		var result;
		/*Case 1: string is empty*/
		if (numbers.length <= 0) {
			result = 0;
		}

		return result;
	};

	return my;

}(cal || {}));