// as a more robust alternative to cluster,
// use pm2 or strongloops process manager.
// also don't forever in production (strongloop guy)

var cluster = require('cluster');
if (cluster.isMaster) {
  console.log('master');
  var cpuCount = require('os').cpus().length;

  for (var i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker,code,signal) {
    console.log('exit received',code);
    console.log('restarting process');
    cluster.fork();
  });
} else {
  require('./server');
}
