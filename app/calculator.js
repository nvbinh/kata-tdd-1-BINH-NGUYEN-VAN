'use strict';

/*
* Module Pattern Calculator
*/
var cal = (function(my) {
	var _private = 	{
		Add: function(numbers) {
			var result;
			/*Case 1: string is empty*/
			if (numbers.length <= 0) {
				result = 0;
			}

			return result;
		}
	};

	/*Public Methods*/
	my.Add = _private.Add;

	return my;

}(cal || {}));