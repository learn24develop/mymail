angular.module('mymail')
  .directive('messageList', function messageList() {
    return {
      restrict: 'AE',
      templateUrl: "directives/mail/message.html"
    }
  })

  .directive('myDialog', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'directives/mail/my-dialog.html'
    };
  });