Template.listWods.events({

  "click .delete": function () {
    WODs.remove(this._id);
  }

});


Template.listWods.helpers({

	// linebreak: function(text) {
	// 	return text.replace(/\n/g,'<br/>');
	// },

});