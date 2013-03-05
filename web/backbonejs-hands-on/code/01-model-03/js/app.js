// Model 03 - registering change events on models

(function ($) {

    Project = Backbone.Model.extend({
        defaults: {
            title: "Project 1"
        },

        updateTitle: function (newTitle) {
            this.set("title", newTitle);
        }
    });

    firstProject = new Project();

    console.log(firstProject.toJSON());

    firstProject.on('change:title', function () {
        console.log("you've updated the title");
        console.log(this.get('title'));
    });

    // firstProject.updateTitle("Project 2");

})(jQuery);