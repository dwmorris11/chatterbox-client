var MessageView = {

  // this will return a function that takes an object containing the variables used by the template
  // eg: render({username: 'paul', message: 'wassup'})
  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"><%=username%></div>
        <div><%=message%></div>
      </div>
      -->
    `)

};