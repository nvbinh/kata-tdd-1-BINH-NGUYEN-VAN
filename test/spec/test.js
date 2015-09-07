(function () {
	'use strict';

	before(function() {

	});

	describe('String Calculator', function () {
		it('Test case 1: Pass an empty string as parameter', function () {
			assert.equal(cal.Add(''), 0, 'Expect return 0');
		});
	});

	describe('String Calculator', function () {
		it('Test case 2: Pass a string "1"', function () {
			assert.equal(cal.Add('1'), 1, 'Expect return 1');
		});
	});


})();
