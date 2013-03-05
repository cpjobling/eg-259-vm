(function ($) {

    Project = Backbone.Model.extend();

    Projects = Backbone.Collection.extend({
        Model: Project,
        url: "#"
    });

    projects = new Projects();

    HomeView = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            this.template = _.template($('#item-home').html());
            this.render();
        },

        render: function () {

            var el = this.$el

            el.empty();
            el.append(this.template());

            var listView = new ListView({collection: projects});
            $('.span4').append(listView.render().el);

            return this;
        }

    });

    ListView = Backbone.View.extend({

        tagName: 'ul',
        className: 'nav nav-list',

        initialize: function () {
            this.collection.bind('all', this.render, this);
            this.template = _.template($('#item-list').html());
        },

        render: function (eventName) {
            var template = this.template,
                      el = this.$el,
              collection = this.collection;

            $(".span4 ul").empty();

            collection.each(function (project) {
                el.append(template(project.toJSON()));
            });

            el.append('<li><a href="#add">add new project</a></li>');

            return this;
        }
    });


    AddView = Backbone.View.extend({

        className: "span8",
        tagName: "div",

        events: {
            "click #addBtn": "add",
            "keypress .addTitle": "onEnter"
        },

        initialize: function () {
            this.template = _.template($('#item-edit').html());
            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
            $('.row').append(this.el);
            return this;
        },

        onEnter: function (e) {
            if (e.keyCode == 13) {
                this.add(e);
            }
        },

        add: function (e) {
            e.preventDefault();

            var newProject = new Project({
                title: $('#title').val()
            });

            projects.add(newProject);

            $('#title').val('');

            return this;
        }

    });


    AppRouter = Backbone.Router.extend({

        routes: {
            "": "home",
            "add": "add"
        },

        home: function () {
            console.log('home');
            new HomeView();
        },

        add: function () {
            console.log('add');
            new AddView();
        }

    });

}(jQuery));

$(document).ready(function () {
    projectApp = new AppRouter();
    Backbone.history.start();
});