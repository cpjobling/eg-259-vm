// Collections 03 - the underscore 
// 'each' iterator 

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

    projects.each(function (project) {
        console.log(project.get('title'));
    });

}(jQuery));