benchmarks = new Mongo.Collection("benchmarks");

benchmarks.attachSchema(new SimpleSchema({
	date: {
		type: Date
	},
	girl: {
		type: String,
		allowedValues: [
			'Angie',
			'Fran'
			// {
			// 	type: [Object],
			// 	name: 'Angie',
			// 	// workout: '
			// 	// 	100 Pull-ups,
			// 	// 	100 Push-ups,
			// 	// 	100 Sit-ups,
			// 	// 	100 Squats
			// 	// ',
			// 	// measure: '
			// 	// 	For Time
			// 	// 	Complete all reps before moving to next station.
			// 	// '
			// },
			// {
			// 	type: [Object],
			// 	name: 'Helen',
			// 	// workout: '',
			// 	// measure: ''
			// }
		]
	},
	notes: {
		type: String,
		optional: true
	}
}));