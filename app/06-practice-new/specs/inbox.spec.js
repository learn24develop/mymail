describe('inbox', function() {

  beforeEach(function() {

  });

  it('title is Inbox', function() {

    var inbox = $('.inbox.title');

    expect(inbox.text()).toBe('Inbox');
  });
});