(function ($) {

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

            return this;
        }

    });


    AddView = Backbone.View.extend({

        className: "span8",
        tagName: "div",

        initialize: function () {
            this.template = _.template($('#item-edit').html());
            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
            $('.row').append(this.el);
            return this;
        },
    });


    AppRouter = Backbone.Router.extend({

        routes: {
            "": "home",
                "add": "add",
                "close": "home",
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