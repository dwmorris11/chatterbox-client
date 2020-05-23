var Friends = {
  // highlight all the messages for that friend
  toggleStatus: function (friend) {
    $(`.${friend}`).toggleClass('friend')
  }
};