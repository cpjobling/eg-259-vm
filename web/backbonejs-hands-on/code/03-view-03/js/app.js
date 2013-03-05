// View 03 - the initialize method

(function ($) {

    HomeView = Backbone.View.extend({

        initialize: function () {
            this.$el.empty();
            this.render();
        },

        render: function () {
            this.$el.append("<h1>My Projects App</h1>");

            return this;
        }
    });

})(jQuery);

projectApp = new HomeView();

// try ->
// projectApp.el
// projectApp.render()
// projectApp.el
// .. repeat render