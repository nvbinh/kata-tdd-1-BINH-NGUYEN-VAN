'use strict';

/*
* Pattern: Module Pattern Calculator
* Description: This pattern is used to imitate classes and focused on public and private access to methods &
* variables. This module pattern helps improving the reduction of globally scoped variables, 
* thus decreasing the chances of collision with other code in the application
*/

String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};

var cal = (function(my) {
	/*Instance store a reference to the Singleton*/
	var instance;
	var _private = 	{
		separators: [' ', '\n', ';', ','],

		hasMultiDelimiter: function(numbers) {
			return (numbers.substring(0, 2) === '//') ? numbers.substring(2, numbers.length).replaceAll('***', ',') : numbers;
		},
		
		getArrayByDelimiters: function(numbers) {
			var result = 0,
				number,
				arrayTemp = numbers.split(new RegExp(_private.separators.join('|'), 'g')).map(Number);

			for (var i in arrayTemp) {
				number = arrayTemp[i];
				if (number < 0) {
					return -1;
				}
				if (number <= 1000) {
					result += arrayTemp[i];
				}
			}
			return result;
		},

		Add: function(numbers) {
			var result = 0;
			/*Test Case 1: string is empty*/
			if (numbers.length <= 0) {
				return 0;
			}

			numbers = _private.hasMultiDelimiter(numbers);
			
			/*Test Case 2: string is has value 1*/
			/*Test Case 3: string is has value 1,2*/
			result = _private.getArrayByDelimiters(numbers);

			/*Test Case 6: Throw exception*/
			if (result < 0) {
				return function() { throw new Error('negatives not allowed'); };
			}

			return result;
		}
	};

	/*
	* Pattern: Revealing Module Pattern
	* Description: Reveal public pointers to private functions and properties
	*/
	my.Add = _private.Add;

	return {
		/*
		* Pattern: Singleton Pattern
		* Description: This pattern restricts instantiation of a class to a single object.
		* But in Javascript, Singletons provide a single point of access for functions
		*/
		getInstance: function() {
			if (!instance) {
				instance = my;
			}

			return instance;
		}
	};

}(cal || {}));