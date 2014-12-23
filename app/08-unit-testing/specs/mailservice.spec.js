describe('MailService', function() {
  var service, $http, url;

  beforeEach(module('mymail'));

  beforeEach(inject(function($injector) {
    service = $injector.get("MailService");
    $http = $injector.get("$httpBackend");
    url = "api/inbox-messages.json";
  }));

  it('test', function() {

    expect('').toBe('');
  });
});