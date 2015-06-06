Template.addLift.onRendered(function() {

	$(".button-collapse").sideNav({
		closeOnClick: true	
	});

	$('select').material_select();

})

Template.addLift.events({


});


Template.addLift.helpers({
  today: function() {
    return Date();
  }
});