angular
  .module('bootstrapardy')
  .directive('clueCard', function() {
    return {
      templateUrl: '../templates/clue-card.html',
      restrict: 'E',
      scope: {
        question: '@',
        answer: '@',
        value: '@',
        this: '=',
        current: '=',
      },
      link: function(scope, element, attributes) {
        element.one('click', function(event) {
          scope.$parent.$parent.countdown = 15;
          scope.$parent.$parent.current = attributes;
          scope.$apply();
          element.children().html('');
        });

      }
    };
  });
