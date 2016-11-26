Router.configure({
  layoutTemplate: 'ApplicationLayout',
});

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

Router.route('/insight', {
	name: 'page-insight'
});

Router.route('/workout/:_id', {
	name: 'page-single-workout',
	data: function() {
		return workouts.findOne({ _id: this.params._id });
	}
});

Router.route('/lift/:_id', {
	name: 'page-single-lift',
	data: function() {
		return lifts.findOne({ _id: this.params._id });
	}
});
// Router.go('/');

// publications and subscriptions scope data to context (IE. User, guest, admin, role)