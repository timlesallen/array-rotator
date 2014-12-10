var expect = require('expect.js'),
    arrayRotator = require('..');

describe('array-rotator', function() {
  it('should work', function(done) {
    expect(arrayRotator([1,2,3,4])).to.be.a('number');
    done();
  });
});
