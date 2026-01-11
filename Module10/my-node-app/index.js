// index.js
import { createServer } from 'node:http';
//const http = require('node:http'); 

const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  // Standard 2026 response format
  res.end(JSON.stringify({ 
    message: 'Hello from Node.js index.js!',
    status: 'success',
    timestamp: new Date().toISOString()
  }));
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
