Template.registerHelper('truncate', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});


Template.registerHelper('substractDate', function(date1, timezone1, date2, timezone2, calculationType) {

    var dateStart = moment.tz(date1, timezone1);
    var dateEnd = moment.tz(date2, timezone2);

    /*debugging
    console.log("---");
    console.log("date:" +cleanDate(date1));
    console.log("date:" +cleanDate(date2));
    console.log("DateStart:" + dateEnd.format() + " tz:"+timezone1);
    console.log("DateEnd:" + dateStart.format() + " tz:"+timezone2);

    var sameZoneDate = dateEnd.clone().tz(timezone1);

	console.log("sameEnd:" + sameZoneDate.format());
	console.log("---");
	**/

	var difference = moment(dateEnd).diff(moment(dateStart), calculationType);
  	return difference;
});


Template.registerHelper('when', function(created) {

   return moment(created).fromNow();
});


Template.registerHelper('formatDate', function(created) {

   return moment(created).format('LL');
});