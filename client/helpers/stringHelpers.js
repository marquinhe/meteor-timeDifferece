Template.registerHelper('truncate', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});


Template.registerHelper('substractDate', function(date1, timezone1, date2, timezone2, calculationType) {

    dateStart = moment.tz(date1, timezone1);
    dateEnd = moment.tz(date2, timezone2);

	if (calculationType === 'weekdays'){
		difference = calculateWeekdays(dateStart, dateEnd);
		//Lib not working: difference = moment(dateEnd).businessDiff(moment(dateStart), calculationType);

	}else{
		difference = moment(dateEnd).diff(moment(dateStart), calculationType);
	}
  	return difference;
});


Template.registerHelper('when', function(created) {

   return moment(created).fromNow();
});


Template.registerHelper('formatDate', function(created) {

   return moment(created).format('LL');
});


Template.registerHelper('duration', function(date1, timezone1, date2, timezone2, durationType) {

	durationValue = UI._globalHelpers('substractDate')(date1, timezone1, date2, timezone2, durationType);

  	return moment.duration(durationValue,durationType).asYears();
});


function calculateWeekdays(start, end){

	 var first = start.clone().endOf('week'); // end of first week
	  var last = end.clone().startOf('week'); // start of last week
	  var days = last.diff(first,'days') * 5 / 7; // this will always multiply of 7
	  var wfirst = first.day() - start.day(); // check first week
	  if(start.day() == 0) --wfirst; // -1 if start with sunday
	  var wlast = end.day() - last.day(); // check last week
	  if(end.day() == 6) --wlast; // -1 if end with saturday
  return wfirst + days + wlast; // get the total
	}