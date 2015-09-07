'use strict';

/*
* Module Pattern Calculator
*/
var cal = (function(my) {
	var _private = 	{
		commasArray: function(numbers) {
			var result = 0,
				arrayTemp = numbers.split(',').map(Number);

			for (var i in arrayTemp) {
				result += arrayTemp[i];
			}
			return result;
		},

		Add: function(numbers) {
			var result = 0;
			/*Test Case 1: string is empty*/
			if (numbers.length <= 0) {
				return 0;
			}

			/*Test Case 2: string is has value 1*/
			result = _private.commasArray(numbers);

			return result;
		}
	};

	/*Public Methods*/
	my.Add = _private.Add;

	return my;

}(cal || {}));