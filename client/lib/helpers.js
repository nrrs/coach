Template.registerHelper("timestamp", function() {
	return new Date();
});

Template.registerHelper("today", function() {
	return moment(new Date()).format('LL');
});

Template.registerHelper("prettifyDateAgo", function(timestamp) {
	return moment(new Date(timestamp)).fromNow();
});

Template.registerHelper("prettifyDate", function(timestamp) {
	var day = timestamp.getDate(),
		month = timestamp.getMonth(),
		year = timestamp.getFullYear(),
		formattedDate = month+'/'+day+'/'+year;

	return formattedDate;
});

Template.registerHelper("linebreak", function(text) {
	return text.replace(/\n/g,'<br/>');
});
