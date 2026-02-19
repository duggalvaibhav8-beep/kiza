const express = require('express');
const helloRoutes = require('./routes/hello');

const app = express();

app.use(express.json());
app.use('/api', helloRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Hello from Node project!' });
});

module.exports = app;
