// use isADmin() to filter content via role/permissions

Meteor.publish('lifts', function() {
	// return lifts.find( { weight: { $gte: 500 } });
	return lifts.find();
});
Meteor.publish('workouts', function() {
	return workouts.find();
});