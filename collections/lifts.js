lifts = new Mongo.Collection("lifts");

lifts.attachSchema(new SimpleSchema({
	date: {
		type: Date
	},
	liftType: {
		type: String,
		allowedValues: [
			'Back Squat',
			'Front Squat',
			'Overhead Squat',
			'Strict Press',
			'Push Press',
			'Push Jerk',
			'Split Jerk',
			'Power Clean',
			'Squat Clean',
			'Power Snatch',
			'Squat Snatch',
			'Deadlift',
			'Bench Press',
			'Thruster',
			'Cluster',
			'Butt Thruster',
		]
	},
	weight: {
		type: Number,
	},
	repScheme: {
		type: String,
	},
	notes: {
		type: String,
		optional: true
	}
}));