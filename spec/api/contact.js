/**
 * Created by yeoman generator-makrina 0.4.1 on 2/12/2016.
 */
var request = require('supertest');
var app = require('../../app');
var getToken = require('../helpers/get-token');

describe('Routing: API contact with real transport', function() {
  this.timeout(5000);
  it('should send an email', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        request(app)
          .post('/api/contact')
          .set({cookie: res.headers['set-cookie']})
          .send({
            _csrf: getToken(res.headers['set-cookie']),
            name: 'Knoble Industries test',
            email: 'spec/index.js',
            subject: '[TEST]',
            message: 'Test OK'
          })
          .expect(200)
          .end(done);
      });
  });
});
