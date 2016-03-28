var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('bootstrapardy', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'MainController'
      });
  });

  require('./controllers/main.controller');
  require('./directives/clueCardDirective');
  require('./directives/timerDirective');
  require('./services/jeopardy.service');
