var app = angular.module("myApp", []);
app.directive("post", function() {
    return {
        templateUrl : "post.ejs",
        scope: {
            myauth: '='
        }
    };
});
app.directive("comment", function() {
    return {
        templateUrl : "comment.ejs"
    };
});