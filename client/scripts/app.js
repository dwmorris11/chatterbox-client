// this will make the ajax request through parse.js
// then pass that data along to the controllers (messages.js, friends.js, etc)
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  roomname: '',

  sanitizeString: function(data) {
    if (data === undefined) {
      return;
    }
    const lessThan = /</g
    const greaterThan = />/g
    let newString = data.replace(lessThan, '&lt');
    newString = newString.replace(greaterThan, '&gt');
    return newString;
  },

  sanitizeMessage: function(message) {
    message.text = App.sanitizeString(message.text);
    message.username = App.sanitizeString(message.username);
    message.roomname = App.sanitizeString(message.roomname);
    return message;
  },

  initialize: function() {
    App.username = window.location.search.substr(10);

    // use Messages.getMessages to get a list of messages
    FormView.initialize();
    RoomsView.initialize();
    // pass the messages object into the messages view


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetchMessages();
    setInterval(() => {
      App.fetchMessages}, 5000);

  },

  fetchMessages: function() {
      App.fetch(() => {
        App.stopSpinner();
        MessagesView.initialize();
        RoomsView.initialize();
        $('.friendLink').click((event) => {
          event.preventDefault();
          Friends.toggleStatus(event.target.text);
        });
    })
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // map a function that sanitizes the text field of each message over data
      const sanitizedData = _.map(data.results, App.sanitizeMessage);
      $("#chats").empty();
      Messages.message = sanitizedData;
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
