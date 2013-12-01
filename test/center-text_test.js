var assert = require('assert');
var centerText = require('../');

describe('An even string in an even amount of columns', function () {
  before(function () {
    this.file = require('./test-files/even-in-even');
  });

  describe('when centered', function () {
    before(function () {
      this.actual = centerText(this.file.input, {columns: this.file.columns});
    });

    it('generates centered text', function () {
      assert.strictEqual(this.file.expected, this.actual);
    });
  });
});

describe('An ANSI colored string', function () {
  before(function () {
    this.file = require('./test-files/ansi-colors');
  });

  describe('when centered', function () {
    before(function () {
      this.actual = centerText(this.file.input, {columns: this.file.columns});
    });

    it('generates colored centered text', function () {
      assert.strictEqual(this.file.expected, this.actual);
    });
  });
});
