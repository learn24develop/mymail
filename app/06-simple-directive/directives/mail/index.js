angular.module('mymail')
  .directive('mail', function messages() {
    return {
      restrict: 'EA',
      scope: {
        "messages": "=messages"
      },
      templateUrl: "directives/mail/mail.html"
    }
  });