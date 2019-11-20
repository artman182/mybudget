var app = angular.module('myApp', ['angular-select-text']); 

app.controller('myCtrl', function($scope) {

app.directive('bill', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('bills', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('subtotal', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('total', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('leftbill', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('rightbill', function() {
    return {
      restrict: 'E'
    };
  });
  
});
  
app.directive('billinput', function() {
    return {
      restrict: 'E'
    };
  });
  
app.directive('instructions', function() {
    return {
      restrict: 'E'
    };
  
});

angular.module('angular-select-text', []).
  directive('selectText', ['$window', function ($window) {
    var selectElement;

    if ($window.document.selection) {
      selectElement = function(element) {
        var range = $window.document.body.createTextRange();
        range.moveToElementText(element[0]);
        range.select();
      };
    } else if ($window.getSelection) {
      selectElement = function(element) {
        var range = $window.document.createRange();
        range.selectNode(element[0]);
        $window.getSelection().addRange(range);
      };
    }

    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        element.bind('click', function(){
          selectElement(element);
        });
      }
    };
  }]);