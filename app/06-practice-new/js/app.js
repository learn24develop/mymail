var app = angular.module('mymail', [
  'ngRoute'
]);

// Controllers
function loadMessages(MailService, $scope, filter) {
  MailService.getMessages(filter).then(function(messages) {
    $scope.messages = messages;
    $scope.title = filter;
  });
}

app.controller('InboxController', function($scope, MailService) {
  loadMessages(MailService, $scope, 'inbox');
});

app.controller('SentController', function($scope, MailService) {
  loadMessages(MailService, $scope, 'sent');
});

app.controller('TrashController', function($scope, MailService) {
  loadMessages(MailService, $scope, 'trash');
});

app.controller('NewMailController', function($scope, MailService) {
  $scope.mail = {};

  $scope.isValid = function() {

    var inValid = false;
    var toAddress = $scope.to;

    if(toAddress){
      inValid = toAddress.length > 0;
    }

    return false;
  };

  $scope.send = function() {
    console.log($scope.mail);
    MailService.send($scope.mail).then(function() {
      console.log("mail sent successfully");
    });

  };
});

// Services
app.factory('MailService', function MailService($http) {
  var exports = {};
  var url = 'api/$NAME$-messages.json';

  exports.getMessages = function(filter) {
    return $http({
      url: url.replace('$NAME$', filter),
      method: "GET"
    }).then(function(result) {
      return result.data;
    });
  };

  exports.send = function(mail) {
    return $http.post('api/mail', mail);
  };

  return exports;
});

// Router

app.config(function($routeProvider) {

  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html'
    })
    .when('/sent', {
      templateUrl: 'views/sent.html'
    })
    .when('/trash', {
      templateUrl: 'views/trash.html'
    })
    .when('/new', {
      templateUrl: 'views/new.html'
    })
    .otherwise({
      redirectTo: '/inbox'
    });

});

app.run(function($route) {
  $route.reload();
});