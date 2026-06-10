import './env.js';
import { createApp } from './app.js';
import { initDb } from './db/index.js';

// Initialize the database for this function invocation
initDb();

const app = createApp();

// Export the app as a serverless function handler
// (Vercel automatically wraps Express/Connect style apps)
export default app;
