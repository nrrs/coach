Template.body.onRendered(function() {

	$(".button-collapse").sideNav({
		closeOnClick: true	
	});

	$('select').material_select();

	$(".collapsible").collapsible();
	
})