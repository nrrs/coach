lifts = new Mongo.Collection("lifts");

lifts.attachSchema(new SimpleSchema({
	collectionName: {
		type: String,
		defaultValue: 'lifts'
	},
	date: {
		type: Date
	},
	liftType: {
		type: String,
		allowedValues: [
			'Back Squat',
			'Bench Press',
			'Deadlift',
			'Clean',
			'Jerk',
			'Snatch'
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