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
		// autoform: {
		// 	options: {
		// 		"Back Squat": 'back-squat',
		// 		"Bench Press": 'bench-press',
		// 		"Deadlift": 'deadlift',
		// 		"Clean": 'clean',
		// 		"Jerk": 'jerk',
		// 		"Snatch": 'snatch'
		// 	}
		// }
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