Template.wods.onRendered(function() {

	Session.set('pageTitle', 'WODs');

})

Template.wods.events({

  "click .delete": function () {
  	console.log('this-wods: ', this);
    // // WODs.remove(this._id);
    // if (confirm('Confirm Deletion')) {
    // 	console.log('true');
    // 	WODs.remove(this._id);
    // } else {
    // 	console.log('false');
    // }
  }

});