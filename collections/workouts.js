workouts = new Mongo.Collection("workouts");

workouts.attachSchema(new SimpleSchema({
	collectionName: {
		type: String,
		defaultValue: 'workouts'
	},
	date: {
		type: Date
	},
	name: {
		type: String
	},
	warmup: {
		type: String,
		optional: true
	},
	strength: {
		type: String,
		optional: true
	},
	conditioning: {
		type: String,
		optional: true
	},
	notes: {
		type: String,
		optional: true
	}
	// schedule: [
	// 	{
	// 		collection: 'Lifts',
	// 		docId: 'gjeriogjre',
	// 		step: 1
	// 	}, {
	// 		collection: 'benchmarks',
	// 		docId: 'djgiaegjera',
	// 		step: 3
	// 	}
	// ]
}));