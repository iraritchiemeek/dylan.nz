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
    $scope.gallery = []
    $scope.index = 0
    // $scope.colorPallete  = ['rgb(219, 219, 209)', 'rgb(28, 33, 40)', 'rgb(154, 166, 191)', 'rgb(134, 117, 114)', 'rgb(136, 141, 166)', 'rgb(77, 75, 78)', 'rgb(95, 105, 115)', 'rgb(81, 88, 103)', 'rgb(172, 132, 118)']
    $scope.colorThief = new ColorThief
    $scope.colors = []
    // $scope.imageUrl = '../imgs/' + $scope.gallery[$scope.index]

    $scope.trusted = function(url) {
        return $sce.trustAsResourceUrl(url);
    }

    $scope.populateArray = function(num) {
        n = 0
        for (var i = num - 1; i >= 0; i--) {
            n++
            $scope.gallery.push(n + '.jpg')
        }
    }

    $scope.populateArray(14)

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
        console.log('-webkit-linear-gradient(left, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)')
        $($('.color-bar')[i]).css({background: '-webkit-linear-gradient(left, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
        for (var i = 0; i < $('.color-bar').length; i++) {
            console.log($scope.colors[0])
            $($('.color-bar')[i]).css({background: '-moz-linear-gradient(left, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
            $($('.color-bar')[i]).css({background: '-webkit-linear-gradient(left, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
            $($('.color-bar')[i]).css({background: 'linear-gradient(to right, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
        }
    }

    $scope.decrementIndex = function(array) {
        if ($scope.index <= 0) {
            $scope.index = array.length -1
        } else {
            $scope.index -= 1
        }
    }

    $scope.incrementIndex = function(array) {
        if ($scope.index >= array.length -1) {
            $scope.index = 0
        } else {
            $scope.index += 1
        }
    }

});

