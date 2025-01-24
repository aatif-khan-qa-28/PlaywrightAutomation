// server.js
const express = require('express');
const app = express();
const port = 3000;

// Basic endpoint
app.get('/', (req, res) => {
  res.send('Hello from Playwright automation!');
});

// Mock API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'This is a mock API response',
    data: [1, 2, 3, 4, 5],
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
