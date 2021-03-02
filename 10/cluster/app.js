const http = require('http')

const server = http.createServer((request, response) => {
  // 随机错误
  Math.random() > 0.9 ? aa() : '2'

  response.end('Hello ')
})

if (!module.parent) {
  server.listen(3000, () => {
    console.log('3000端口启动')
  })
} else {
  module.exports = server
}
