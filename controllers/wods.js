WodsController = ApplicationController.extend({
	data: {
		wods: function() {
			return WODs.find({}, {sort: {createdAt: -1}});
		}
	}
});