Template.listExerciseItem.onRendered(function() {

	$(".collapsible").collapsible();

	$('.modal-trigger').leanModal();

});

Template.listExerciseItem.events({

	"click .delete": function() {
		Session.set('exerciseID', this._id);
	},

});

Template.listExerciseItem.helpers({

	AMRAP: function(category) {
		if(category == "AMRAP") {
			return true;
		}
	}

});