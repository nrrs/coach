Template.lifts.onRendered(function() {

	Session.set('pageTitle', 'Lifts');

});

Template.lifts.helpers({

	// AMRAP: function(category) {
	// 	if(category == "AMRAP") {
	// 		return true;
	// 	}
	// },

	liftsOnly: function() {
		// var l = Template.instance().data.lifts().fetch();

		// return (_.sortBy( l, function(l) {
		// 		return l.completionDate;
		// 	}).reverse()
		// );
	},

});