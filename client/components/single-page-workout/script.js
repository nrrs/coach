Template.SinglePageWorkout.onRendered(function() {

	Session.set('pageTitle', 'Specific WOD Page');
})

Template.SinglePageWorkout.events({


});

Template.SinglePageWorkout.helpers({
	wodId: function() {
		return this._id;
	}
});