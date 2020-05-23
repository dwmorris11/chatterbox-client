// this will make the ajax request through parse.js
// then pass that data along to the controllers (messages.js, friends.js, etc)
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // use Messages.getMessages to get a list of messages
    var message = Messages.message;

    FormView.initialize();
    RoomsView.initialize();
    // pass the messages object into the messages view
    MessagesView.initialize(message);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
