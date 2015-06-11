Template.modalDelete.onRendered(function() {


});

Template.modalDelete.events({

  "click .confirm-delete": function () {
  	console.log('this: ', this);
    WODs.remove(this._id);
    // if (confirm('Confirm Deletion')) {
    // 	console.log('true');
    // 	WODs.remove(this._id);
    // } else {
    // 	console.log('false');
    // }
  }

});