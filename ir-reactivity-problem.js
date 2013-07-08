if (Meteor.isClient) {
  Router.map(function() {
    this.route('hello', {path: '/'});
  });
  
  Template.hello.greeting = function() {
    return Session.get('foo');
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
