IndexController = ApplicationController.extend({
	data: function(){
		return {
			workouts: function() {
				return workouts.find({}, {sort: {completionDate: -1}, limit: 50 });
			},
			lifts: function() {
				return lifts.find({}, {sort: {completionDate: -1}, limit: 50 });	
			}
		}
	}
});