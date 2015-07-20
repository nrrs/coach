Template.listExerciseItem.onRendered(function() {

	$(".collapsible").collapsible();

	$('.modal-trigger').leanModal();

});

Template.listExerciseItem.events({

	"click .delete": function() {
		Session.set('exerciseID', this._id);
	},

	"click .edit": function() {
		Session.set('exerciseName', this.name);
	},

});

Template.listExerciseItem.helpers({

	test: function(category) {
		if(category == "Fran") {
			return true;
		}
	}

});