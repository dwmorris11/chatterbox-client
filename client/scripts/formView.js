  var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.on('keydown', (function(event) {
      if (event.which === 13) {
          FormView.handleSubmit(event);
       }
  }));
  },

  handleSubmit: function(event) {
    //Pull data from form field
    let text = $('#message').val();
    let data = App.sanitizeString(text);
    Parse.create(Messages.makeMessage(data, App.username, App.roomname));
    event.preventDefault();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};