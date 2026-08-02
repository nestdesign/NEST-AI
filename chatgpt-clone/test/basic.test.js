const assert = require('assert');

// Basic smoke test to ensure server module loads (adjust require path if needed)
try {
  const server = require('../server');
  console.log('server module loaded');
  // If server exports a start function, call it in a test environment
  // assert.strictEqual(typeof server, 'function');
  process.exit(0);
} catch (err) {
  console.error('Failed to load server module:', err);
  process.exit(1);
}
const request = require('supertest');
const app = require('../server');

describe('Basic server tests', function () {
  it('GET / responds with 200', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
