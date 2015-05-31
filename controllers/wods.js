WodsController = ApplicationController.extend({
	data: {
		workouts: function() {
			return WODs.find({}, {sort: {createdAt: -1}});
		}
	}
});