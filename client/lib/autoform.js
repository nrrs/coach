// AutoForm.addHooks(['addLift', 'addWod'], hooksObject);

// // AutoForm.hooks({
// // 	hookObject: {
// // 		createdAt: function(doc) {
// // 			doc.createdAt = new Date();
			
// // 		}
// // 	}
// // });

// var hooksObject = {
//   onSubmit: function(insertDoc, updateDoc, currentDoc) {
//       // You must call this.done()!
//       console.log('afddafdsaf');
//       this.done(); // submitted successfully, call onSuccess
//       //this.done(new Error('foo')); // failed to submit, call onError with the provided error
//       //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
//     },
//  };