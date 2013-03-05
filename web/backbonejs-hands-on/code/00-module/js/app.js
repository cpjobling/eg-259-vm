// Module Pattern

var app = (function($){

    var foo = "bar";

    return {
        name : 'module pattern',
        setFoo: function(name) {
            foo = name;
        },
        getFoo: function() {
            return foo;
        }
    };
})(jQuery);

console.log(app.foo);
console.log(app.name);
console.log(app.getFoo());
console.log(app.setFoo('EG-259'));
console.log(app.getFoo());
