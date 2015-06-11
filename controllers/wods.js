WodsController = ApplicationController.extend({
	data: {
		wods: function() {
			return WODs.find({}, {sort: {completionDate: -1}});
		}
	}
});