Template.SinglePageLift.onRendered(function() {

	Session.set('pageTitle', 'Specific LIFT Page');
})

Template.SinglePageLift.events({


});

Template.SinglePageLift.helpers({
	liftID: function() {
		return this._id;
	}
});