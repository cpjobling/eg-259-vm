// Collections 02 - collections of models

(function ($) {

    Project = Backbone.Model.extend();

    Projects = Backbone.Collection.extend({
        Model: Project,
        url: "#"
    });

    projects = new Projects([{
        title: "Project 1"
    }, {
        title: "Project 2"
    }]);

    console.log(projects.toJSON());

}(jQuery));

// try ->
// project3 = new Project({title: 'Project 3'});
// projects.add(project3);
// projects.toJSON();