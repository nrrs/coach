Template.Index.onRendered(function() {

	Session.set('pageTitle', 'Coach!');

});

Template.Index.helpers({

	both: function() {
		var w = Template.instance().data.wods().fetch(),
			l = Template.instance().data.lifts().fetch();
			wl = w.concat(l);

		return (_.sortBy(
			wl,
			function(wl) {
				return wl.completionDate;
			}).reverse()
		);
	},

});