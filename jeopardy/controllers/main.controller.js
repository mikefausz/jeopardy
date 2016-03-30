angular
  .module('jeopardy')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope) {
    console.log('the main controller, it does nothing');
  }
