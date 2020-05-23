var Rooms = {

  //function that returns a list of rooms for current message set
  //function that gets the current room
  getRooms: function() {
    const messages = Messages.message;
    let rooms =  _.chain(messages)
      .pluck('roomname')
      .union([App.roomname])
      .uniq()
      .filter((room) => room !== undefined && room !== '')
      .value();
    return rooms;
  },

  currentRoom: function() {
    return $('#rooms select option:selected').val()
  },

  add: function() {
    //debugger
    const newRoom = prompt('What is the name of your room?');
    App.roomname = newRoom;
    let rooms = Rooms.getRooms();
    $('#rooms select').val(newRoom);
    RoomsView.initialize();
    RoomsView.renderRoom(newRoom);
  }
};