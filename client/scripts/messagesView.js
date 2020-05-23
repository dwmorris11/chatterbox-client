  var MessagesView = {

  $chats: $('#chats'),
  messageStorage: [],

  initialize: function (messages) {
    debugger;
    _.each(messages, (message) => {
      this.renderMessage(this.render(message));
    });
  },

  // this will render all the messages
  // it will also fetch and store them
  render: _.template(`
  <div class="chat">
    <div class="username"><%=username%></div>
    <div><%=text%></div>
  </div>
`),

  //this will render an individual message
  //it shouldn't fetch anything
  renderMessage: function (html) {
    $("#chats").append(html);
  }
};