wods = new Mongo.Collection("wods");

wods.attachSchema(new SimpleSchema({
	collectionName: {
		type: String,
		defaultValue: 'wods'
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
	goat: {
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