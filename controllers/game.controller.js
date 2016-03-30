var jQuery = require('jquery');

angular
  .module('bootstrapardy')
  .controller('GameController', function($scope, JService) {
    $scope.current = '';
    $scope.playerInput = '';
    $scope.score = 0;

    $scope.checkAnswer = function() {
      var parsedInput = $scope.playerInput.toLowerCase().trim();
      var parsedAnswer = $scope.current.answer.toLowerCase().replace(/<(?:.|\n)*?>/gm, '');

      if(parsedAnswer.indexOf(parsedInput) > -1) {
        $scope.score += parseInt($scope.current.value);
      } else {
        $scope.score -= parseInt($scope.current.value);
      }
      $scope.playerInput = '';
    };

    $scope.getCurrentClue = function(clue) {
      window.currentClue = $scope.current;
      console.log("current clue:" + $scope.current.question);
      return $scope.current;
    };

    JService.getCategories().then(function(categories) {
      $scope.categories = categories;
      console.log($scope.categories);
      window.duh = $scope.categories;
    });
  });
