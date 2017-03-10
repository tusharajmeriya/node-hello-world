var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World! Infostretch')
})

app.listen(3000, function () {
  console.log('Server Started on port 3000!')
})
