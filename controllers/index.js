IndexController = ApplicationController.extend({
	//	Scope combined workouts to most recent 3, combined.helper will grab all and sort

	//	Do i use subscriptions and posts here??
	data: function(){
		return {
			wods: function() {
				// return WODs.find({}, {sort: {completionDate: -1}, limit: 2 });
				return WODs.find({}, {sort: {completionDate: -1}, limit: 2 });
			},
			lifts: function() {
				return lifts.find({}, {sort: {completionDate: -1}, limit: 2 });	
			}
		}
	}
});