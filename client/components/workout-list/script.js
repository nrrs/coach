Template.workoutList.events({

  "click .delete": function () {
    WODs.remove(this._id);
  }

});


Template.workoutList.helpers({

	linebreak: function(text) {
		return text.replace(/\n/g,'<br/>');
	},

});