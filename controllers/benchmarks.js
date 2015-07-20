BenchmarksController = ApplicationController.extend({
	data: {
		benchmarks: function() {
			return benchmarks.find({}, {sort: {completionDate: -1}});
		}
	}
});