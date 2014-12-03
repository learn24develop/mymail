var app = angular.module('mymail', [
  'ngRoute'
]);

// Controllers
app.controller('InboxController', function($scope, MailService) {
  MailService.getMessages().then(function(messages) {
    $scope.messages = messages;
  });
});

// Services
app.factory('MailService', function MailService($http) {
  var exports = {};

  exports.getMessages = function() {
    return $http({
      url: "api/messages.json",
      method: "GET"
    }).then(function(result) {
      return  result.data;
    });
  };

  return exports;
});

// Router

app.config(function($routeProvider) {

  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxController'
    })
    .when('/sent', {
      templateUrl: 'views/sent.html'
    })
    .when('/trash', {
      templateUrl: 'views/trash.html'
    })
    .otherwise({
      redirectTo: '/inbox'
    });

});