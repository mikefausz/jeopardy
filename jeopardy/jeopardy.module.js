var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardy', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/game', {
        templateUrl: "jeopardy/templates/game.html",
        controller: 'GameController as GameCtrl'
      })
      .when('/question', {
        templateUrl: "jeopardy/templates/question.html",
        controller: 'QuestionController'
      });
  });
