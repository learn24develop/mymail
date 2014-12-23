var app = angular.module('mymail', [
  'ngRoute'
]);

app
  .controller('LeftNavController', function LeftNavController($rootScope) {

    $rootScope.$on('create-new-folder', function(event, folderName) {
      console.log("new folder event received");
      console.log(folderName);
    });
  });