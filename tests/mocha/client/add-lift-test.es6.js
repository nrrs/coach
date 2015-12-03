// "use strict";

// if(typeof MochaWeb !== 'undefined') {
// 	MochaWeb.testOnly( () => {

// 		// override Assertions
// 		var expect = chai.expect,
// 			should = chai.should;

// 		// #id of form being tested
// 		var formID = 'addLift';

// 		beforeEach(done => {
// 			Router.go('/add-lift');
// 			waitForRouter(done);
// 		});

// 		describe('Add Lift Form Validatity', () => {
// 			it('Form invalid when empty.', () => {
// 				return isValid(formID).then(isValid => {
// 					expect( isValid(formID) ).to.eql(false);
// 				})
// 			});
// 		});

// 		function isValid(formID) {
// 			return new Promise((resolve, reject) => {
// 				try {
// 					var validationResult = AutoForm.validateForm(formID);
// 					resolve(validationResult);
// 				} catch(e) {
// 					reject(e);
// 				}
// 			});
// 		}
// 	});
// }