Template.modalDelete.onRendered(function() {

});

Template.modalDelete.events({

  "click .confirm-delete": function () {
    var exerciseID = Session.get('exerciseID');
    WODs.remove(exerciseID);
    lifts.remove(exerciseID);
  }

});