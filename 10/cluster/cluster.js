var cluster = require('cluster')
var os = require('os')
var numCPUs = os.cpus().length

console.log('numCPUs', numCPUs)

var process = require('process')

var workers = {}

if (cluster.isMaster) {
  // 主进程

  for (var i = 0; i < numCPUs; i++) {
    var worker = cluster.fork()
    console.log('init...pid', worker.process.pid)

    workers[worker.process.pid] = worker
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log('工作进程 关闭', code)
    delete workers[worker.process.pid]
    worker = cluster.fork()
    workers[worker.process.pid] = worker
  })
} else {
  var app = require('./app')
  app.listen(3000)
}

// ctrl + c
process.on('SIGTERM', () => {
  for (var pid in workers) {
    process.kill(pid)
  }

  process.exit(0)
})

require('./test')
