Template.registerHelper("listExcercises", function() {
	var w = Template.instance().data.workouts().fetch(),
		l = Template.instance().data.lifts().fetch(),
		wl = w.concat(l);
	return (_.sortBy(
		wl,
		function(wl) {
			return wl.date;
		}).reverse()
	);
});
Template.registerHelper("uniqueExerciseArray", function() {
	
	let l = lifts.find().fetch(),
		w = workouts.find().fetch(),
		wl = w.concat(l).sort();

	wl.sort().reverse();

	let wla = _.map(wl, function(obj) {
		return [obj.liftType, obj.customLift, obj.name];
	});

	let wlaf = _.flatten(wla);
	let wlafw =_.without(wlaf, undefined);

	return _.uniq(wlafw);

});
Template.registerHelper("timestamp", function() {
	return moment().format('YYYY-MM-DD');
});

Template.registerHelper("today", function() {
	return moment().format('LL');
});

Template.registerHelper("prettifyDateAgo", function(date) {
	return moment(new Date(date)).fromNow();
});

Template.registerHelper("prettifyDate", function(date) {
	return moment.utc(date).format("L");
});

Template.registerHelper("linebreak", function(text) {
	return text.replace(/\n/g,'<br/>');
});

Template.registerHelper('exerciseSelect', function() {
	var exerciseList = lifts.find(liftType);
});