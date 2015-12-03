Template.Index.onRendered(function() {

	Session.set('pageTitle', 'Coach!');

});

Template.Index.helpers({

	bothBMandLifts: function() {
		var b = Template.instance().data.bm().fetch(),
			l = Template.instance().data.lifts().fetch();
			bl = b.concat(l);

		return (_.sortBy(
			bl,
			function(bl) {
				return bl.date;
			}).reverse()
		);
	},

});