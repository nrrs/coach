WorkoutsController = ApplicationController.extend({
	data: {
		workouts: function() {
			return workouts.find({}, {sort: {completionDate: -1}});
		}
	}
});