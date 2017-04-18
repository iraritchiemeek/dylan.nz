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
    // $scope.gallery = {
    //     1: {
    //         file: 'one.jpg',
    //         film_type: ""
    //     }
    // }
    $scope.gallery = []
    $scope.index = 0
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
        // console.log('-webkit-linear-gradient(left, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + 'rgb(0,0,0)' + ' 100%)')
        // $($('.color-bar')[0]).css({background: '-webkit-linear-gradient(top, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
        for (var i = 0; i < $('.color-bar').length; i++) {
            console.log($scope.colors[0])
            $($('.color-bar')[i]).css({background: '-moz-linear-gradient(top, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
            $($('.color-bar')[i]).css({background: '-webkit-linear-gradient(top, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
            $($('.color-bar')[i]).css({background: 'linear-gradient(to bottom, ' + $scope.colors[0] + ' 0%, ' + $scope.colors[1] + ' 25%, ' + $scope.colors[2] + ' 50%, ' + $scope.colors[3] + ' 75%, ' + $scope.colors[4] + ' 100%)'})
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

