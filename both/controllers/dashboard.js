DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('dates');
  },
  data: {
    dates: Dates.find({}, { sort: { createdAt: -1 }})
  },
  onAfterAction: function () {
    Meta.setTitle('Challange');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
