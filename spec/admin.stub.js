/**
 * Created by yeoman generator-makrina 0.4.1 on 2/12/2016.
 */
var request = require('supertest');
var proxyquire = require('proxyquire');
var sinon = require('sinon');

describe('Routing: Admin with stub error in session', function() {
  var app, stub = sinon.stub();
  beforeEach(function () {
    stub.returns(function (req, res, next) {
      // override session object
      req.session = {
        save: function(cb) {
          cb('Session save error');
        }
      };
      // override CSRF token method
      req.csrfToken = function() {
        return '';
      };
      next();
    });
    app = proxyquire('../app', {
      './services/session-config': stub,
      csurf: stub
    });
  });
  it('should return 500', function(done) {
    request(app)
      .post('/admin/login')
      .send({
        username: 'admin',
        password: 'SNeVZXhnlAK2'
      })
      .expect(500)
      .end(done);
  });
});
