// Template 01 - using the underscore
// template function

(function ($) {

    HomeView = Backbone.View.extend({

        el: 'body',

        initialize: function () {
            this.render();
        },

        render: function () {

            this.$el.empty();
            this.$el.append("<h1>My Project App</h1>");

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

            this.$el.empty();
            this.$el.append("<li>Hello</li>");
            this.$el.append("<li>Goodbye</li>");
            this.$el.append(this.template({
                value: "Hello Backbone"
            }));

            return this;
        }

    });

})(jQuery);

$(document).ready(function () {
    projectApp = new HomeView();
});
