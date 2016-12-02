/**
 * Created by yeoman generator-makrina 0.4.1 on 2/12/2016.
 */
var request = require('supertest');
var proxyquire = require('proxyquire');
var sinon = require('sinon');

describe('Routing: Index with stub error', function() {
  var app, stub = sinon.stub();
  // make index route throw an error
  beforeEach(function () {
    stub.throws();
    app = proxyquire('../app', {'./routes/index': stub});
  });
  it('should return 500', function(done) {
    request(app)
      .get('/')
      .expect(500)
      .end(done);
  });
});
