// Collection 04 - events on collections

(function ($) {

    Project = Backbone.Model.extend();

    Projects = Backbone.Collection.extend({
        Model: Project,
        url: "#"
    });

    projects = new Projects();

    projects.on('add remove', function (event) {
        console.log("you've changed the collection");
    });

    var firstProject = new Project({
        name: 'Project 1'
    });

    projects.add(firstProject);

}(jQuery));

// try ->
// projects.remove(firstProject);