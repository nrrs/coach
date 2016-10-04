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
		Session.set('exerciseID', this._id);
	},

});

Template.listExerciseItem.helpers({

	title: function() {
		if (this.collectionName === "workouts") {
			return this.name;
		} else {
			if (!this.customLift) {
				return this.liftType;
			}
			return this.customLift;
		}
	},
	completion: function() {
		return this.date;
	}


});