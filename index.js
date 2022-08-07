var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/src/index.html");
});

app.get('/estilo.css', function(req, res) {
    res.sendFile(__dirname + "/src/estilo.css");
});

app.get('/fundo2.jpg', function(req, res) {
    res.sendFile(__dirname + "/src/fundo2.jpg");
});

app.get('/homerrr.jpg', function(req, res) {
    res.sendFile(__dirname + "/src/homerrr.jpg");
});

app.get('/smart.js', function(req, res) {
    res.sendFile(__dirname + "/src/smart.js");
});

  

app.listen(3000)