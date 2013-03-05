// View 05 - the 'el' property - for auto rendering

(function ($) {

    HomeView = Backbone.View.extend({
        el: 'body',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.empty();
            this.$el.append("<h1>My App</h1>");

            return this;
        }
    });

})(jQuery);

$(document).ready(function () {
    projectApp = new HomeView();
});