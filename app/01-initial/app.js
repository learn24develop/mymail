var app = angular.module('mymail', [
  'ngRoute'
]);

app.controller('InboxController', function($scope) {

  var messages = [1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10].map(function(i) {
      return {
        "to": 'client' + i + '@gmail.com',
        "from": 'support' + i + '@gmail.com',
        "subject": 'You have a pending order #' + i +77,
        "received_date": new Date()
      };
    });

  $scope.messages = messages;

});

// Router

app.config(function($routeProvider) {

  $routeProvider
    .when('/inbox', {
      templateUrl: 'inbox.html',
      controller: 'InboxController'
    })
    .otherwise({
      redirectTo: '/inbox'
    });

});