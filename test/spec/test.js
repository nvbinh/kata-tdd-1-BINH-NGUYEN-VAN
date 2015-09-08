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

	describe('String Calculator', function () {
		it('Test case 3: Pass a string "1,2"', function () {
			assert.equal(cal.Add('1,2'), 3, 'Expect return 3');
		});
	});

	describe('String Calculator', function () {
		it('Test case 4: Support new lines: "1\n2,3"', function () {
			assert.equal(cal.Add('1\n2,3'), 6, 'Expect return 6');
		});
	});

	describe('String Calculator', function () {
		it('Test case 5: Support different delimiters: "//;\n1;2"', function () {
			assert.equal(cal.Add('//;\n1;2'), 3, 'Expect return 3');
		});
	});


})();
