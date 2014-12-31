describe('Math', function() {
  var mathUtil;

  beforeEach(function() {
    mathUtil = window.mathUtil;
  });

  it('adding 1 + 2 gives 3', function() {
    expect(mathUtil.add(1, 2)).toBe(3);
  });

});