var express = require('express');
var app = express();

// setup simple endpoint
app.get('/', function (req, res) {
  res.send('RamHacks HTTP Server')
});

// startup server
const server = app.listen(3000, () => {
    console.log("HTTP server running");
});

// handle shutdown from OS or terminal
process.on('SIGINT', () => {
  console.log('Shutting down');
  server.close();
});
