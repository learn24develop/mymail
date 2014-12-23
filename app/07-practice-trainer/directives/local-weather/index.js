angular.module('mymail')
  .directive('localWeather', function localWeather() {
    return {
      restrict: 'EA',
      templateUrl: "directives/local-weather/weather.html"
    }
  });