Template.modalEdit.onRendered(function() {

	$('select').material_select();

});

Template.modalEdit.helpers({

  exerciseName: function() {
  	var exerciseName = Session.get('exerciseName');
  	return exerciseName;
  },
  fuck: function() {
  	var exerciseType = "test";
  	return exerciseType;
  }


});