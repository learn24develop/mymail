angular.module('mymail')
  .directive('localWeather', function localWeather() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: "directives/weather/weather.html",
      controllerAs: 'weather',
      controller: function($scope) {
        this.location = 'STL';
        this.temperature = '38 F';
      },
      link: function(scope, element, attrs) {
      }
    }
  });