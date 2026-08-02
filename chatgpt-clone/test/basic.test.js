const request = require('supertest');
const app = require('../server');

describe('Basic server tests', function () {
  it('GET / responds with 200', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
