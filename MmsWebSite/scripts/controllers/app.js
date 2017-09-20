(function () {
    var MmsWebSite = angular.module('MmsWebSite', ['ngRoute']);

    MmsWebSite.config(function ($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "views/data.html",
                controller: "dataController"
            })
            .otherwise({ redirectTo: "/home" });
    })

}());