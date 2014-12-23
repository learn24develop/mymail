describe('InboxController', function() {

  var $controller, q, deferred;
  beforeEach(module('mymail'));

  beforeEach(inject(function(_$controller_, _MailService_, $q) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    MailService = _MailService_;

    q = $q;
    deferred = $q.defer();
    deferred.resolve();
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var mailService = jasmine.createSpyObj('MailService', ['getMessages']);
      mailService.getMessages = jasmine.createSpy('getMessages').and.return(deferred.promise);

      var controller = $controller('InboxController', {
        $scope: $scope,
        MailService: mailService
      });

      expect(mailService.getMessages).toHaveBeenCalled();

    });
  });
});