/**
 * Created by dean on 8/6/15.
 */
(function() {
    var app = angular.module("eapsConfigurator", []);

    app.controller("myCtrl", function($scope) {
        $scope.count = 0;
    });

    app.directive("addbuttonsbutton", function(){
        return {
            restrict: "E",
            template: "<button addbuttons>Click to add buttons</button>"
        }
    });

//Directive for adding buttons on click that show an alert on click
    app.directive("myAds", function(){
        return function(scope, element){
            element.bind("click", function(){
                scope.count++;
                var el = angular.element(document.getElementById('testu')).html();
                angular.element(document.getElementById('space-for-buttons')).append(el);
            });
        };
    });


    app.directive("addbuttons", function($compile){
        return function(scope, element, attrs){
            element.bind("click", function(){
                scope.count++;
                angular.element(document.getElementById('space-for-buttons')).append($compile("<button addbuttons>Click to add buttons</button><p>")(scope));
            });
        };
    });

//Directive for showing an alert on click
    app.directive("alert", function(){
        return function( element, attrs){
            element.bind("click", function(){
                console.log(attrs);
                alert("This is alert #"+attrs.alert);
            });
        };
    });

  app.directive("vlanField", function() {
     return {
         restrict: 'E',
         templateUrl: "vlan.html"
     }
  });

    app.directive('addVlanField',function(){
        return function(scope, element, attrs){
            element.click(function(){
                element.parent().find('.main').append('<div>Some text</div>')
            })
        }
    })

})();

