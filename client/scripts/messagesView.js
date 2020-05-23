  var MessagesView = {

  $chats: $('#chats'),
  messageStorage: [],

  initialize: function () {
    // add a onclick handler for adding a friend

    const messages = Messages.message;
    _.each(messages, (newMessage) => {
      if(newMessage.roomname === Rooms.currentRoom() || App.roomname === '') {
        this.renderMessage(this.render(newMessage));
      }
    });
  },

  render: _.template(`
  <div class="chat">
    <div class="username <%=username%>">
      <a class='friendLink <%=username%>' href=#<%=username%>><%=username%></a>
    </div>
    <div><%=text%></div>
  </div>
`),

  renderMessage: function (html) {
    $("#chats").append(html);
  }
};