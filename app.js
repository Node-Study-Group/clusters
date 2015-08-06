
var cluster = require('cluster');

var express = require('express');
app = express();

app.get('/', function(req,res) {
  res.send('worker ' + (cluster.worker ? cluster.worker.id + ' pid '+cluster.worker.process.pid : 'main'));
});

setTimeout(function() {
  throw(new Error('got sleepy'));
}, Math.floor(Math.random()*10000));


module.exports = app;
