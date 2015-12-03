"use strict";

if(typeof MochaWeb !== 'undefined') {
	MochaWeb.testOnly( () => {

		//	Set variables
		//	Set Chai shorthands
		var expect = chai.expect,
			should = chai.should,
			//	#id of form being tested
			formID = 'addWod';

		beforeEach(done => {
			Router.go('/add-wod');
			waitForRouter(done);
		});

		describe('Add Wod Form Validatity', () => {
			it('Form invalid when empty.', () => {
				return 
					isValid(formID)
					.then(isValid => {
						expect( isValid(formID) ).to.eql(false);
				})
				// return expect(AutoForm.validateForm('addWod')).to.eql(true);
			});
		});
		

		describe('Is Even Tests', function() {
			it('Should always return a boolean', function() {
				expect(isEven(2)).to.be.a('boolean');
			});
			it('Calling isEven(76) should return true', function() {
				expect(isEven(76)).to.eql(true);
			});
			// it('test', function() {
			// 	var test = fillIn('fuck', 'you');
			// 	// var test = $("input[name*='name']").val();
			// 	console.log(test);
			// });
		});

		
		function fillIn(input, value) {
			let buildSelector = "input[name*='"+input+"']";
			return $(buildSelector).val('something');
		}

		function isEven(x) {
			if( x % 2 !== 0) {
				return false;
			} else {
				return true;
			}
		}

		function isValid(formID) {
			return new Promise((resolve, reject) => {
				try {
					var validationResult = AutoForm.validateForm(formID);
					// console.log(validationResult);
					resolve(validationResult);
				} catch(e) {
					reject(e);
				}
			});
		}



	});
}