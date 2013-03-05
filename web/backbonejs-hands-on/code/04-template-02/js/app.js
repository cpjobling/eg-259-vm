(function ($) {

    Project = Backbone.Model.extend();

    Projects = Backbone.Collection.extend({
        Model: Project,
        url: "#"
    });

    projects = new Projects();

    var firstProject = new Project({
        title: 'Project 1'
    });

    projects.create(firstProject);


    HomeView = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            this.render();
        },

        render: function () {

            this.$el.empty();
            this.$el.append("<h1>My Projects App</h1>");

            this.listView = new ListView();
            this.$el.append(this.listView.render().el);

            return this;
        }

    });

    ListView = Backbone.View.extend({

        tagName: 'ul',

        initialize: function () {
            this.template = _.template($('#item-container').html());
        },

        render: function () {
            var el = this.$el,
                template = this.template;

            el.empty();

            projects.each(function (project) {
                el.append(template(project.toJSON()));
            });

            return this;
        }

    });

})(jQuery);

$(document).ready(function () {
    projectApp = new HomeView();
});