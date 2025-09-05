const express = require('express');
const app = express();
const port = 54867; // Use the provided port

app.get('/', (req, res) => {
  res.send('<h1>Hello from Node.js Sample Site!</h1><p>This is a simple Node.js application.</p>');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Node.js sample site listening at http://0.0.0.0:${port}`);
});