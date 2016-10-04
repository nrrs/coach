Template.registerHelper("timestamp", function() {
	return moment().format('YYYY-MM-DD');
});

Template.registerHelper("today", function() {
	return moment().format('LL');
});

Template.registerHelper("prettifyDateAgo", function(date) {
	return moment(new Date(date)).fromNow();
});

Template.registerHelper("prettifyDate", function(date) {
	return moment.utc(date).format("L");
});

Template.registerHelper("linebreak", function(text) {
	return text.replace(/\n/g,'<br/>');
});
