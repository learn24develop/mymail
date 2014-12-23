describe('Math', function() {
  var Math = window.Math;

  it('Adding 1 + 5 should return 6', function() {
    var sum = Math.add(1, 5);
    expect(sum).toBe(6);
  });

  it('Adding 1 + 2 should return 3', function() {
    var sum = Math.add(1, 2);
    expect(sum).toBe(3);
  });

});