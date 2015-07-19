Notebooks = new Mongo.Collection("notebooks");
Notes = new Mongo.Collection("notes");
Tags = new Mongo.Collection("tags");

Meteor.startup(function () {
  Session.setDefault("selectedTag", null);
}); // end of startup

//

// Handlebars if eq helper definition
Template.registerHelper('equals', function (ownerId) {
  if (ownerId === Meteor.userId()) {
    return true
  } else {
    return false
  }
});