var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  //take the rooms array, turn them into options and put them in the select
  initialize: function() {
    RoomsView.$select.change(() => {
      this.renderRoom($('#rooms select option:selected').val());
      App.roomname = $('#rooms select option:selected').val();
    });
    RoomsView.$button.unbind('click');
    RoomsView.$button.click(Rooms.add);
    this.$select.empty();
    //create an empty default;
    const emptyRoom = new Option();
    this.$select.append(emptyRoom);
    _.each(Rooms.getRooms(), (room) => {
        const newRoom = new Option(room);
        this.$select.append(newRoom);
      });
  },

  renderRoom: function(room) {
    $("#chats").empty();
    _.each(Messages.message, (newMessage) => {
      if(newMessage.roomname === room) {
        MessagesView.renderMessage(MessagesView.render(newMessage));
      }
    });
  }
};
