Template.liftList.events({

  "click .delete": function () {
    lifts.remove(this._id);
  }

});

Template.liftList.helpers({

	linebreak: function(text) {
		return text.replace(/\n/g,'<br/>');
	}

});