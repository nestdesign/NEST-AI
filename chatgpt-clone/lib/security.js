const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Returns an array of middleware to mount on your Express app
module.exports = function securityMiddleware(options = {}) {
  const {
    allowedOrigins = '*',
    windowMs = 60 * 1000, // 1 minute
    max = 60, // 60 requests per window per IP
  } = options;

  return [
    helmet(),
    cors({ origin: allowedOrigins }),
    rateLimit({ windowMs, max }),
  ];
};
