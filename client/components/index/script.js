Template.Index.onRendered(function() {

	$(".collapsible").collapsible();

	$(".button-collapse").sideNav({
		closeOnClick: true	
	});


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