WODs = new Mongo.Collection("workouts");

WODs.attachSchema(new SimpleSchema({
	name: {
		type: String,
	},
	workout: {
		type: String,
	},
	category: {
		type: String,
		allowedValues: [
			'AMRAP',
			'EMOM',
			'RFT',
			'GOAT'
		]
	},
	result: {
		type: String,
		optional: true
	},
	completionDate: {
		type: Date,
		optional: true
	},
	createdAt: {
		type: Date,
		optional: true
	}
}));