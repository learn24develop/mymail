describe('MailService', function() {
  var $rootScope, $scope, $q, deferred, mailService, $compile, $httpBackend;

  beforeEach(module('mymail'));

  beforeEach(inject(function($injector) {

    $httpBackend = $injector.get('$httpBackend');
    mailService = $injector.get('MailService');

  }));

  describe('getMessages', function() {

    it('returns messages', function() {

      var data = [{}];
      $httpBackend.whenGET('api/inbox-messages.json').respond({data: data});
      $httpBackend.whenGET('views/inbox.html').respond(200, '');

      mailService.getMessages('inbox').then(function(response) {
        expect(response.data).toEqual(data);
      });

      $httpBackend.flush();
    });
  });
});