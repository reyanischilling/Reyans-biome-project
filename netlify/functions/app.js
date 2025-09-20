const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

app.post('/createUser', (req, res) => {
  // Your logic here
  res.json({ message: 'User created' });
});

app.get('/getUser', (req, res) => {
  res.json({ user: 'Demo' });
});

module.exports.handler = serverless(app);
