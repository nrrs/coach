Template.lifts.onRendered(function() {

	Session.set('pageTitle', 'Lifts');

});

Template.lifts.helpers({

	lifts: function() {
		var l = Template.instance().data.lifts().fetch();
		return (_.sortBy(
			l,
			function(l) {
				return l.date;
			}).reverse()
		);
	}

});