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

function initializeWeather($scope) {
  $scope.weather = {
    "location": "STL",
    "temperature": "45"
  };
}

app.controller('InboxController', function($scope, MailService) {

  initializeWeather($scope);

  loadMessages(MailService, $scope, 'inbox');
});

app.controller('SentController', function($scope, MailService) {
  initializeWeather($scope);

  loadMessages(MailService, $scope, 'sent');
});

app.controller('TrashController', function($scope, MailService) {
  initializeWeather($scope);

  loadMessages(MailService, $scope, 'trash');
});

app.controller('NewMailController', function($scope, MailService) {
  $scope.mail = {};

  /*$scope.isInvalid = true;

   $scope.$watch('to', function(newValue, oldValue) {
   $scope.isInvalid = newValue && (newValue.length === 0);
   });*/

  $scope.send = function() {
    console.log($scope.mail);
    MailService.send($scope.mail).then(function() {
      console.log("mail sent successfully");
    });

  };
});

app.controller('EditController', function($scope) {

  $scope.mileage = 12;
  $scope.editMode = false;

  $scope.update = function() {
    $scope.editMode = !$scope.editMode;
  }
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
    .when('/edit', {
      templateUrl: 'views/edit.html'
    })
    .otherwise({
      redirectTo: '/inbox'
    });

});

app.run(function($route) {
  $route.reload();
});