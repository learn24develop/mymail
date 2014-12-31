describe('InboxController', function() {
  var $rootScope, $scope, $q, deferred, mailService, $compile,$templateCache;

  beforeEach(module('mymail'));

  beforeEach(inject(function($injector) {

    var $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    $q = $injector.get('$q');
    deferred = $q.defer();
    deferred.resolve();

    mailService = jasmine.createSpyObj('MailService', ['getMessages']);
    mailService.getMessages.and.returnValue(deferred.promise);

    $controller('InboxController', {
      $scope: $scope,
      MailService: mailService
    });

  }));

  describe('On Load', function() {
    it('calls getMessages', function() {
      expect(mailService.getMessages).toHaveBeenCalled();
    });
  });
});