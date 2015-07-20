IndexController = ApplicationController.extend({
	data: function(){
		return {
			wods: function() {
				return wods.find({}, {sort: {completionDate: -1}, limit: 5 });
			},
			bm: function() {
				return benchmarks.find({}, {sort: {completionDate: -1}, limit: 5 });
			}
			,
			lifts: function() {
				return lifts.find({}, {sort: {completionDate: -1}, limit: 5 });	
			}
		}
	}
});