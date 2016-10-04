Router.route('/', {
	name: 'index'
});

Router.route('/add-workouts', {
	name: 'addWod'
});

Router.route('/add-lift', {
	name: 'addLift'
});

Router.route('/workouts', {
	name: 'workouts'
});

Router.route('/lifts', {
	name: 'lifts'
});

Router.route('/test', {
	name: 'test'
});

Router.route('/workout/:_id', {
	name: 'single-page-workout',
	data: function() {
		return wods.findOne({ _id: this.params._id });
	}
});

Router.route('/lift/:_id', {
	name: 'single-page-lift',
	data: function() {
		return lifts.findOne({ _id: this.params._id });
	}
});
// Router.go('/');

// publications and subscriptions scope data to context (IE. User, guest, admin, role)