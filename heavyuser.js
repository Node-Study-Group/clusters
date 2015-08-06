var Promise = require('bluebird');
var request = require('request');

function pget(url) {
  return new Promise(function(resolve,reject) {
    request.get(url,function(err,res,data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

var requests = [];
for (var i=0; i<100; i++) {
  requests.push(pget('http://localhost:3000'));
}

Promise.settle(requests).then(function(results) {
  results.forEach(function(r) {
    if (r.isFulfilled()) console.log(r.value());
    else console.log(r.reason());
  });
});
