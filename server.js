var cluster = require('cluster');
var app = require('./app');

app.listen(3000, function() {
  if (cluster.worker) console.log('worker: '+cluster.worker.id + " pid: "+cluster.worker.process.pid);
  console.log('listening to port 3000');
});
