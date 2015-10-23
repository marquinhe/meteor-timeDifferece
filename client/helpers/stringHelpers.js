Template.registerHelper('truncate', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});


Template.registerHelper('substractDate', function(date1, date2) {
	
	var ms = moment(date2).diff(moment(date1),'days');
  	return ms;
});