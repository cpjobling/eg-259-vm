// View 02 - the render method

(function ($) {

    HomeView = Backbone.View.extend({

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