Template.listExercise.onRendered(function() {

	$(".collapsible").collapsible();

	$('.modal-trigger').leanModal();

});

// Template.listExercise.events({

//   "click .delete": function () {
//     lifts.remove(this._id);
//     // if (confirm('Confirm Deletion')) {
//     // 	console.log('true');
//     // 	lifts.remove(this._id);
//     // } else {
//     // 	console.log('flase');
//     // }
//   }

// });

Template.listExercise.events({

	"click .delete": function () {
		console.log('this:', this);
	    lifts.remove(this._id);
	    WODs.remove(this._id);
	    // if (confirm('Confirm Deletion')) {
	    // 	console.log('true');
	    // 	lifts.remove(this._id);
	    // } else {
	    // 	console.log('flase');
	    // }
	  }


	

});

Template.listExercise.helpers({

	AMRAP: function(category) {
		if(category == "AMRAP") {
			return true;
		}
	}

});