WodsController = ApplicationController.extend({
	data: {
		wods: function() {
			return wods.find({}, {sort: {completionDate: -1}});
		}
	}
});