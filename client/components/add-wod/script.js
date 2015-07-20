Template.addWod.onRendered(function() {

	// $(".button-collapse").sideNav({
	// 	closeOnClick: true	
	// });

	$('select').material_select();

	Session.set('pageTitle', 'Add Wod');
})

Template.addWod.events({


});



Template.addWod.helpers({

	// var 

 //  today: function() {
 //    return new Date();
 //  },
 //  todayFancy: function() {
 //  	return moment(new Date()).format('LL');
 //  }
});