lifts = new Mongo.Collection("lifts");

lifts.attachSchema(new SimpleSchema({
	collectionName: {
		type: String,
		defaultValue: 'lifts'
	},
	date: {
		type: Date,
		label: "Completion Date"
	},
	liftType: {
		type: String,
		optional: true,
		allowedValues: [
			'Back Squat',
			'Bench Press',
			'Deadlift',
			'Clean',
			'Jerk',
			'Snatch'
		]
	},
	customLift: {
		type: String,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "text"
			}
		}
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