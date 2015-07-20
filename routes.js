Router.route('/', {
	name: 'index'
});

Router.route('/add-wod', {
	name: 'addWod'
});

Router.route('/add-benchmark', {
	name: 'addBenchmark'
});

Router.route('/add-lift', {
	name: 'addLift'
});

Router.route('/wods', {
	name: 'wods'
});

Router.route('/benchmarks', {
	name: 'benchmarks'
});

Router.route('/lifts', {
	name: 'lifts'
});

Router.route('/test', {
	name: 'test'
});

// Router.go('/');

// publications and subscriptions scope data to context (IE. User, guest, admin, role)