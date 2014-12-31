describe('EditController', function() {
  var $rootScope, $scope, $q, deferred, mailService, editController;

  beforeEach(module('mymail'));

  beforeEach(inject(function($injector) {

    var $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    $q = $injector.get('$q');
    deferred = $q.defer();
    deferred.resolve();

    mailService = jasmine.createSpyObj('MailService', ['save']);

    editController = $controller('EditController', {
      $scope: $scope,
      MailService: mailService
    });

  }));

  describe('Save', function() {
    it('calls save service', function() {
      $scope.save();

      expect(mailService.save).toHaveBeenCalled();
    });
  });
});