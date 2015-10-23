

Meteor.publishComposite("dates", function() {
  return {
    find: function() {
      return Dates.find({});
    }
  }
});