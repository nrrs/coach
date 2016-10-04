Template.modalDelete.onRendered(function() {

});

Template.modalDelete.events({

  "click .confirm-delete": function () {
    var exerciseID = Session.get('exerciseID');
    workouts.remove(exerciseID);
    lifts.remove(exerciseID);
    benchmarks.remove(exerciseID);
  }

});