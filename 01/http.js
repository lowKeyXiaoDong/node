const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  const { url, headers, method } = request
  if (url === '/' && method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' })
        response.end('500, 服务器异常')
        return
      }

      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'application/json',
    })

    response.end(
      JSON.stringify({
        name: 'hxd',
      })
    )
  } else if (method === 'GET' && headers.accept.indexOf('image/*')) {
    fs.createReadStream('.' + url).pipe(response)
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('404, 页面找不到')
  }
})

server.listen(9000, () => {
  console.log('🔥启动成功')
})
