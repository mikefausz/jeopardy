angular
  .module('jeopardy')
  .controller('GameController', GameController);

  GameController.$inject = ['$scope', 'JService', '$timeout'];

  function GameController($scope, JService, $timeout) {
    // var $scope = this;

    $scope.current = '';
    $scope.playerInput = '';
    $scope.score = 0;
    $scope.correct = false;
    $scope.incorrect = false;

    $scope.submitAnswer = function(playerInput) {
      var parsedInput = $scope.playerInput.toLowerCase().trim();
      var parsedAnswer = $scope.current.answer.toLowerCase().replace(/<(?:.|\n)*?>/gm, '').replace(/\\/g, '');

      if(parsedAnswer.indexOf(parsedInput) > -1) {
        $scope.score += parseInt($scope.current.value);
        $scope.correct = true;
      } else {
        $scope.score -= parseInt($scope.current.value);
        $scope.incorrect = true;
      }
      $timeout(function () {
        $scope.correct = false;
        $scope.incorrect = false;
        $('#myModal').modal('hide');
        $scope.playerInput = '';
      }, 5000);

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
  }
