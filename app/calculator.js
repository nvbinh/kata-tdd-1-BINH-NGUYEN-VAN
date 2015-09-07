'use strict';

/*
* Module Pattern Calculator
*/
var cal = (function(my) {
	var _private = 	{
		Add: function(numbers) {
			var result = 0, arrayTemp;
			/*Case 1: string is empty*/
			if (numbers.length <= 0) {
				result = 0;
				return result;
			}

			arrayTemp = numbers.split(',').map(Number);

			for (var i in arrayTemp) {
				result += arrayTemp[i];
			}

			return result;
		}
	};

	/*Public Methods*/
	my.Add = _private.Add;

	return my;

}(cal || {}));