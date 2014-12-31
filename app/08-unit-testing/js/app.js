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
  $scope.send = function() {
    var mail = {
      "to": $scope.to,
      "from": $scope.from,
      "subject": $scope.subject,
      "message": $scope.message
    };
    console.log(mail);
    MailService.send(mail);

  };
});

app.controller('EditController', function($scope, MailService) {

  $scope.mileage = 12;
  $scope.editMode = false;

  $scope.update = function() {
    $scope.editMode = !$scope.editMode;
  };

  $scope.save = function() {
    var data = {
      mileage:$scope.mileage
    };
    MailService.save(data);
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

  exports.send = function(data) {
    $http.post('api/mail', data);
  };

  exports.save = function(data) {
    return $http.post('api/save-mileage', data);
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
