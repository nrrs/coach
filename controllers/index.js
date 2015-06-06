IndexController = ApplicationController.extend({
	data: function(){
		return {
			wods: function() {
				// return WODs.find({}, {sort: {completionDate: -1}, limit: 2 });
				return WODs.find({}, {sort: {completionDate: -1}, limit: 5 });
			},
			lifts: function() {
				return lifts.find({}, {sort: {completionDate: -1}, limit: 5 });	
			}
		}
	}
});