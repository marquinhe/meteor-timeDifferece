
// Template functions: Calculations + formating


Template.dashboard.helpers({
	substractDate: function(date1, timezone1, date2, timezone2, calculationType) {	
  		return calculateTimeDifference(date1, timezone1, date2, timezone2, calculationType);
	}, 
		duration: function(date1, timezone1, date2, timezone2, durationType) {
			return calculateDuration(date1, timezone1, date2, timezone2, durationType);
		}, 
		when: function(created) {
   		 	return moment(created).fromNow();
		}, 
		formatDate: function(date) {
		  return moment(date).format('ddd DD, MMMM YYYY');
		}, 
		formatCode: function(name) {
		  var code = ""; 
		  nameArray = name.split(" ");
		  for (i = 0; i < nameArray.length; i++) {
		      code += nameArray[i].charAt(0);
		  }
		  return code;
		}, 
		isSelected: function (unit) {        
		console.log(Session.get("unit") + ":" + unit)      
        if (Session.get('unit') == unit){
        	return "selected";
        }
    }
});

Template.dashboard.events = {
    'change #unit': function (evt) { 
		Tracker.autorun(function() {
        Session.set("unit", evt.currentTarget.value);
		})
    }
};


function calculateTimeDifference(date1, timezone1, date2, timezone2, calculationType){
	
    dateStart = moment.tz(date1, timezone1);
    dateEnd = moment.tz(date2, timezone2);

	if (calculationType === 'weekdays'){
		difference = calculateWeekdays(dateStart, dateEnd);
		//Lib not working: difference = moment(dateEnd).businessDiff(moment(dateStart), calculationType);

	}else{
		difference = moment(dateEnd).diff(moment(dateStart), calculationType);
	}
	
	return difference;
}


function calculateWeekdays(start, end){

	 var first = start.clone().endOf('week'); // end of first week
	 var last = end.clone().startOf('week'); // start of last week
	 var days = last.diff(first,'days') * 5 / 7; // this will always multiply of 7
	 var wfirst = first.day() - start.day(); // check first week
	  if(start.day() == 0) --wfirst; // -1 if start with sunday
	 var wlast = end.day() - last.day(); // check last week
	  if(end.day() == 6) --wlast; // -1 if end with saturday
  
  return Math.floor(wfirst + days + wlast -1); // get the total
	}
	

function calculateDuration(date1, timezone1, date2, timezone2, durationType){

	var durationValue = calculateTimeDifference(date1, timezone1, date2, timezone2, durationType);
	if (typeof Session.get('unit') === 'undefined'){

		return 'select unit to convert into';

	}else{
			if ( Session.get('unit') == 'years')
		  		return moment.duration(durationValue,durationType).asYears().toFixed(3) + " years";
			if (Session.get('unit') == 'months')
		  		return moment.duration(durationValue,durationType).asMonths().toFixed(3) + " months";
			if (Session.get('unit') == 'days')
		  		return moment.duration(durationValue,durationType).asDays().toFixed(3) + " days";
			if (Session.get('unit') == 'hours')
		  		return moment.duration(durationValue,durationType).asHours().toFixed(3) + " hours";
			if (Session.get('unit') == 'minutes')
		  		return moment.duration(durationValue,durationType).asMinutes().toFixed(3) + " minutes";
			if (Session.get('unit') == 'seconds')
		  		return moment.duration(durationValue,durationType).asSeconds().toFixed(3) + " seconds";
			if (Session.get('unit') == 'miliseconds')
	  			return moment.duration(durationValue,durationType).asMilis().toFixed(3) + " miliseconds";
		}

	}
	