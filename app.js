const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Jenkins CI/CD 🚀</h1>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;