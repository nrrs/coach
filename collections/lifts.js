lifts = new Mongo.Collection("lifts");

lifts.attachSchema(new SimpleSchema({
	name: {
		type: String,
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