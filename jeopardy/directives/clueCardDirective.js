angular
  .module('jeopardy')
  .directive('clueCard', clueCard);

  function clueCard() {
    return {
      templateUrl: 'jeopardy/templates/clue-card.html',
      restrict: 'E',
      scope: {
        category: '@',
        question: '@',
        answer: '@',
        value: '@',
        current: '=',
      },
      link: function(scope, element, attributes) {
        element.one('click', function(event) {
          scope.$parent.$parent.current = attributes;
          scope.$apply();
          element.children().html('');
        });
      }
    };
  }
