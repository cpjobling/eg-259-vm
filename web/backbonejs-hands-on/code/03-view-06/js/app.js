// View 06 - multiple views

(function ($) {

    HomeView = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            this.render();
        },

        render: function () {

            this.$el.empty();
            this.$el.append("<h1>My Project App</h1>");

            return this;
        }

    });

    ListView = Backbone.View.extend({

        tagName: 'ul',

        initialize: function () {

        },

        render: function () {

            this.$el.empty();
            this.$el.append("<li>Hello</li>");
            this.$el.append("<li>Goodbye</li>");

            return this;
        }

    });

})(jQuery);

$(document).ready(function () {
    projectApp = new HomeView();
});

// try->
// listView = new ListView()
// listView.render()
// $('body').append(listView.el)