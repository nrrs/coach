TestController = ApplicationController.extend({
	data: {
		fuck: function() {
			return WODs.find({}, {sort: {createdAt: -1}});
		}
	}
});