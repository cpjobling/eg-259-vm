// Collections 01 - defining

(function ($) {

    Project = Backbone.Model.extend();

    Projects = Backbone.Collection.extend({
        Model: Project,
        url: "#"
    });

}(jQuery));

// try->
// projects = new Projects();
// projects.toJSON();
// projects.add({title: "Project 1"});
// projects.toJSON();