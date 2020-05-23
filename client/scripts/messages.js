// this will get the message data pushed into it from app.js and send it do the messagesView
var Messages = {
  // this will eventually hold a list of messages from the server
  message: [],

  makeMessage: function(text, username, roomname) {
    let newMessage = {
      username: username,
      text: text,
      roomname: roomname
    }
    return newMessage;
  }
};

// var Messages = {
//   // var message = {
// //   username: 'shawndrost',
// //   text: 'trololo',
// //   roomname: '4chan'
// // };

// };