// Model 01

(function ($) {

    Project = Backbone.Model.extend({});

    firstProject = new Project({
        title: 'Project 1'
    });

})(jQuery);

// Try -> 
// firstProject
// firstProject.toJSON()
// firstProject.get('title')
// firstProject.set('title', 'Project 2')
// firstProject.toJSON()