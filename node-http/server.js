var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('RamHacks HTTP Server')
})

app.listen(3000)