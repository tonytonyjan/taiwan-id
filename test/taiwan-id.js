var assert = require('assert');
var TaiwanId = require('../index');

describe('TaiwanId', function() {
  describe('#check(id)', function() {
    it('should return true when ID is valid', function() {
      assert.equal(true, TaiwanId.check('A123456789'));
    });

    it('should return false when ID is not valid', function() {
      assert.equal(false, TaiwanId.check('A123456781'));
    });
  });

  describe('#generate()', function() {
    it('should generate a valid ID', function() {
      assert.equal(true, TaiwanId.check(TaiwanId.generate()));
    });
  });
});
