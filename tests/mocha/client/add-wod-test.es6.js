"use strict";

if(typeof MochaWeb !== 'undefined') {
	MochaWeb.testOnly( () => {

		// override Assertions
		var expect = chai.expect,
			should = chai.should;

		// #id of form being tested
		var formID = 'addWod';

		beforeEach(done => {
			Router.go('/add-wod');
			waitForRouter(done);
		});

		describe('Form Validatity', () => {
			it('Form invalid when empty.', () => {
				return isValid(formID).then(isValid => {
					expect( isValid(formID) ).to.eql(false);
				})
			});
		});
		

		describe('Is Even Tests', function() {
			it('Should always return a boolean', function() {
				expect(isEven(2)).to.be.a('boolean');
			});
			it('Calling isEven(76) should return true', function() {
				expect(isEven(76)).to.eql(true);
			});
		});

		


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
					resolve(validationResult);
				} catch(e) {
					reject(e);
				}
			});
		}



	});
}