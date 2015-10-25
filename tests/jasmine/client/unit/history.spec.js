
// Just checking Jasmine works

describe('Checking Unit testing framework', function () {
  it('1 equals 1 ', function() {
    expect(1).toBe(1);
  });

});

// Database Service

describe("History Service", function () {
	
    function helper(name) {
      return Template.dashboard.helpers.firstCall.args[0][name];
    }
	
	
  it("Should return list of prev results", function () {
	  expect(Dates.find()).toBeTruthy();
  });
  

});

// Calculations: Day
  
describe("Calculations: Day", function () {
	
    function helper(name) {
      return Template.dashboard.helpers.firstCall.args[0][name];
    }
	
   it("Difference in days should be zero", function () {
  	  expect(helper('substractDate')('1995-12-25', 'Australia/Adelaide', '1995-12-25', 'Australia/Adelaide', 'days')).toEqual(0);
   });	
	
   it("Difference in days", function () {
   	  expect(helper('substractDate')('1995-12-24', 'Australia/Adelaide', '1995-12-25', 'Australia/Adelaide', 'days')).toEqual(1);
   });	
	 
   it("Difference in days (diff timezone)", function () {
    	  expect(helper('substractDate')('1995-12-24', 'Australia/Adelaide', '1995-12-25', 'America/Puerto_Rico', 'days')).toEqual(1);
   });	
});

// Calculations: Hours

describe("Calculations: Hours", function () {
	
    function helper(name) {
      return Template.dashboard.helpers.firstCall.args[0][name];
    }
	
   it("Difference in hours should be zero", function () {
  	  expect(helper('substractDate')('1995-12-25 14:00', 'Australia/Adelaide', '1995-12-25 14:00', 'Australia/Adelaide', 'hours')).toEqual(0);
   });	
	
   it("Difference in hours", function () {
   	  expect(helper('substractDate')('1995-12-25 14:00', 'Australia/Adelaide', '1995-12-25 15:00', 'Australia/Adelaide', 'hours')).toEqual(1);
   });	
	 
   it("Difference in hours (diff timezone)", function () {
    	  expect(helper('substractDate')('1995-12-24', 'Australia/Adelaide', '1995-12-24', 'America/Puerto_Rico', 'hours')).toEqual(14);
   });	
});

// Calculations: Complete Weeks

describe("Calculations: Complete Weeks", function () {
	
    function helper(name) {
      return Template.dashboard.helpers.firstCall.args[0][name];
    }
	
   it("Difference in hours should be zero", function () {
  	  expect(helper('substractDate')('1995-12-25', 'Australia/Adelaide', '1995-12-26', 'Australia/Adelaide', 'weeks')).toEqual(0);
   });	
	
   it("Difference in complete weeks", function () {
   	  expect(helper('substractDate')('1995-12-17 14:00', 'Australia/Adelaide', '1995-12-25 15:00', 'Australia/Adelaide', 'weeks')).toEqual(1);
   });	
	 
   it("Difference in weeks (diff timezone)", function () {
    	  expect(helper('substractDate')('1995-12-01', 'Australia/Adelaide', '1995-12-31', 'America/Puerto_Rico', 'weeks')).toEqual(4);
   });	
});

// Calculations: Business days


describe("Calculations: Business Weeks", function () {
	
    function helper(name) {
      return Template.dashboard.helpers.firstCall.args[0][name];
    }
	
   it("Difference in weekdays should be zero", function () {
  	  expect(helper('substractDate')('1995-12-25', 'Australia/Adelaide', '1995-12-25', 'Australia/Adelaide', 'weekdays')).toEqual(0);
   });	
	
   it("Difference in weekdays", function () {
   	  expect(helper('substractDate')('1995-12-17 14:00', 'Australia/Adelaide', '1995-12-24 15:00', 'Australia/Adelaide', 'weekdays')).toEqual(4);
   });	
	 
   it("Difference in weekdays (diff timezone)", function () {
    	  expect(helper('substractDate')('1995-12-01', 'Australia/Adelaide', '1995-12-31', 'America/Puerto_Rico', 'weekdays')).toEqual(20);
   });	
});


// Formating
  
describe("Text formating", function () {
	
    function helper(name) {
      return Template.dashboard.helpers.firstCall.args[0][name];
    }
	
  it("Format for small circle", function () {

	  expect(helper('formatCode')('Marco')).toEqual('M');
  });
	
});