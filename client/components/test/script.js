Template.test.events({


});

Template.test.helpers({

	// linebreak: function(text) {
	// 	return text.replace(/\n/g,'<br/>');
	// }

	testList: function() {
		// return ['a','b','c'];
		var w = WODs.find().fetch();
		console.log(w);
		var l = lifts.find().fetch();
		console.log(l);
		var wl = w.concat(l);
		console.log(wl);

		// for ( i=0, i < wl.length, i++) {
		// 	console.log(wl[i].name);
		// };
		

		var today = Date();
		console.log(today);

		return _.sortBy(
			wl,
			function(wl) {
				// returns oldest to newest
				// still need to refactor to show only top 5 most recent
				return wl.completionDate;
			}
		);
		// return wl;
	}

});