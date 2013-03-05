// Model 02 - defaults property and
// model methods

(function ($) {

    Project = Backbone.Model.extend({
        defaults: {
            title: "Project 1"
        },
        
        updateTitle: function(newTitle) {
            this.set("title", newTitle);
        }
    });

    firstProject = new Project();
    
    console.log(firstProject.toJSON());

})(jQuery);

// Try->
// firstProject.updateTitle("Project Selectr");
// firstProject.toJSON();