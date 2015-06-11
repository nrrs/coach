LiftsController = ApplicationController.extend({
	data: {
		lifts: function() {
			return lifts.find({}, {sort: {completionDate: -1}});
		}
	}
});