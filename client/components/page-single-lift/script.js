Template.PageSingleLift.onRendered(function() {

	// Session.set('pageTitle', 'Lift');
})

Template.PageSingleLift.events({


});

Template.PageSingleLift.helpers({

	liftName : function() {
		if (!this.customLift) {
			return this.liftType;
		} else {
			return this.customLift;
		}
	}

});