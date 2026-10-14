/**
 * Vercel Serverless Function Entrypoint
 * Bridges Express app to Vercel's serverless environment
 */

const app = require('../backend/server');

module.exports = app;
