(function () {
	'use strict';

	var myCal;
	before(function() {
		myCal = cal.getInstance();
	});

	describe('String Calculator', function () {
		it('Test case 1: Pass an empty string as parameter', function () {
			assert.equal(myCal.Add(''), 0, 'Expect return 0');
		});
	});

	describe('String Calculator', function () {
		it('Test case 2: Pass a string "1"', function () {
			assert.equal(myCal.Add('1'), 1, 'Expect return 1');
		});
	});

	describe('String Calculator', function () {
		it('Test case 3: Pass a string "1,2"', function () {
			assert.equal(myCal.Add('1,2'), 3, 'Expect return 3');
		});
	});

	describe('String Calculator', function () {
		it('Test case 4: Support new lines: "1\n2,3"', function () {
			assert.equal(myCal.Add('1\n2,3'), 6, 'Expect return 6');
		});
	});

	describe('String Calculator', function () {
		it('Test case 5: Support different delimiters: "//;\n1;2"', function () {
			assert.equal(myCal.Add('//;\n1;2'), 3, 'Expect return 3');
		});
	});

	describe('String Calculator', function () {
		it('Test case 6: Calling Add with a negative, throw an exception "negatives not allowed"', function () {
			expect(myCal.Add('1,-2')).to.throw('negatives not allowed');
		});
	});

	describe('String Calculator', function () {
		it('Test case 7: Ignore the numbers bigger than 1000', function () {
			assert.equal(myCal.Add('2, 1001'), 2, 'Expect return 2');
		});
	});


})();
