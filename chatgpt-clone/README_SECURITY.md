Security middleware and integration notes

This patch adds a reusable security middleware factory that you can plug into your Express server to enable common protections: helmet, CORS, and a basic rate limiter.

How to integrate

1) Install dependencies:

   npm install helmet cors express-rate-limit

2) In your server (e.g., chatgpt-clone/server.js) add:

   const express = require('express');
   const securityMiddleware = require('./lib/security');

   const app = express();
   // Use default settings — adjust allowedOrigins/windowMs/max as needed
   securityMiddleware() .forEach(mw => app.use(mw));

Notes
- Tune rate limits and allowedOrigins for your deployment environment.
- For production, consider using a distributed rate limiter (Redis-backed) if you run multiple instances.
