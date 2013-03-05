// View 04 - creating a view at load-time

(function ($) {

    HomeView = Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.append("<h1>My Projects App</h1>");

            return this;
        }
    });

})(jQuery);

$(document).ready(function () {
    projectApp = new HomeView();
});

// try ->
// projectApp.el
// $('body').append(projectApp.el);