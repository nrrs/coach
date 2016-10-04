Template.Index.onRendered(function() {

	Session.set('pageTitle', 'Coach!');

});

Template.Index.helpers({
	

	exercises: function() {
		var w = Template.instance().data.workouts().fetch(),
			l = Template.instance().data.lifts().fetch(),
			wl = w.concat(l);
		return (_.sortBy(
			wl,
			function(wl) {
				return wl.date;
			}).reverse()
		);
	}

});