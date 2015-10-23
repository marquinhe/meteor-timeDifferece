AutoForm.hooks({
  'insertDates': {
      onSuccess: function (operation, result, template) {
      	toast('Okay! Check Result', 4000);
      	Router.go('dashboard');
     }
  }
});


Template.new.rendered = function() {

$('select').material_select();

};
