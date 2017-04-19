var dylanApp = angular.module('dylanApp', ['ngRoute']);

dylanApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "index.html",
    })
    .otherwise({
        redirectTo: '/'
    });
});

dylanApp.directive('imageonload', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('load', function() {
                    //call the function that was passed
                    scope.$apply(attrs.imageonload);
                });
            }
        };
    })

dylanApp.controller('mainController', function($scope, $sce) {
    $scope.gallery = {
        1: {
            file: 'one.jpg',
            film_type: "Portra 160"
        },
        2: {
            file: 'two.jpg',
            film_type: "Portra 160"
        },
        3: {
            file: 'three.jpg',
            film_type: "Portra 160"
        },
        4: {
            file: 'four.jpg',
            film_type: "Superia 800"
        },
        5: {
            file: 'five.jpg',
            film_type: "Superia 800"
        },
        6: {
            file: 'six.jpg',
            film_type: "Superia 800"
        },
        7: {
            file: 'seven.jpg',
            film_type: "Superia 800"
        },
        8: {
            file: 'eight.jpg',
            film_type: "Superia 800"
        },
        9: {
            file: 'nine.jpg',
            film_type: "Superia 800"
        },
        10: {
            file: 'ten.jpg',
            film_type: "Superia 400"
        },
        11: {
            file: 'eleven.jpg',
            film_type: "Superia 400"
        },
        12: {
            file: 'twelve.jpg',
            film_type: "Portra 400"
        },
        13: {
            file: 'thirteen.jpg',
            film_type: "Superia 800"
        }      
    }

    $scope.index = 0
    $scope.colorThief = new ColorThief
    $scope.colors = []

    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.setColorPalette = function () {
        $scope.colors = []
        $scope.colorPallete = $scope.colorThief.getPalette($('.photo')[0], 5)    
        for (var i = 0; i < $scope.colorPallete.length; i++) {
            $scope.colors.push('rgb(' + $scope.colorPallete[i][0] + ',' + $scope.colorPallete[i][1] + ',' +  $scope.colorPallete[i][2] + ')')
        }
    }

    $scope.colorBar = function () {
        for (var i = 0; i < $('.color-bar').length; i++) {
            $($('.color-bar')[i]).css({background: '-moz-linear-gradient(left, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
            $($('.color-bar')[i]).css({background: '-webkit-linear-gradient(left, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
            $($('.color-bar')[i]).css({background: 'linear-gradient(to right, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
        }
    }

    $scope.decrementIndex = function(n) {
        if ($scope.index <= 0) {
            $scope.index = n -1
        } else {
            $scope.index -= 1
        }
    }

    $scope.incrementIndex = function(n) {
        if ($scope.index >= n -1) {
            $scope.index = 0
        } else {
            $scope.index += 1
        }
    }

});

