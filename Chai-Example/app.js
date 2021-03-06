const express = require('express');
const app = express();
const http = require('http');

const dbConfig = require('./db.config');

// define a simple route
app.get('/', (req, res) => {
  res.send('Server is running on port : 4500')
});

// listen for requests
app.listen(4500, () => {
    console.log("Server is listening on port 4500");
});
