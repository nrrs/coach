Template.NavBar.helpers({
	navTitle : function() {
		return Session.get('pageTitle');
	}
});

Template.NavBar.onRendered(function() {
	
	$(".button-collapse").sideNav({
		closeOnClick: true	
	});

})


// method is a function that is a property