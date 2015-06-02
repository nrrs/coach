Template.registerHelper("prettifyDate", function(timestamp) {
	var day = timestamp.getDate(),
		month = timestamp.getMonth(),
		year = timestamp.getFullYear(),
		formattedDate = month+'/'+day+'/'+year;

	return formattedDate;

	// return moment(new Date(timestamp)).fromNow();
});