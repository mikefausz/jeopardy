var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('bootstrapardy', ['ngRoute', 'jeopardy'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
      });
  });

  require('./jeopardy');
