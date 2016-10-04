Template.modalEdit.onRendered(function() {

	$('select').material_select();

});

Template.modalEdit.helpers({

  exercise: function() {
  	var exerciseID = Session.get('exerciseID');
    
  	var res = lifts.findOne({_id: exerciseID});
    if (res) { return res; }
    return workouts.findOne({_id: exerciseID});
  },


});