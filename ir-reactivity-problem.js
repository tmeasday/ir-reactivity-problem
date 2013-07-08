if (Meteor.isClient) {
  Router.map(function() {
    this.route('hello', {path: '/', layout: 'layout'});
  });
  
  Template.layout.nav = function() {
    return Session.get('nav');
  }
  
  Template.hello.content = function() {
    return Session.get('content');
  }
  Template.hello.aside = function() {
    return Session.get('aside');
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
