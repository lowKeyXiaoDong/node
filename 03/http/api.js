const http = require('http')
const fs = require('fs')

http
  .createServer((req, res) => {
    const { method, url } = req
    console.log('url', url, method)
    console.log('cookie', req.headers.cookie)
    if (method === 'GET' && url === '/') {
      fs.readFile('./index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      })
    } else if (method === 'GET' && url === '/api/user') {
      // 浏览器跨域
      // res.setHeader('Set-Cookie', 'cooke=123')
      // res.setHeader('Access-Control-Allow-Credentials', 'true') // cookie 跨域
      // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.setHeader('Content-Type', 'appliction/json')
      res.end(
        JSON.stringify({
          name: 'hxd',
        })
      )
    } else if (method === 'OPTIONS' && url === '/api/user') {
      // res.setHeader('Set-Cookie', 'cooke=123')
      // res.setHeader('Access-Control-Allow-Credentials', 'true') // cookie 跨域
      // // 预检
      // res.writeHead(200, {
      //   'Access-Control-Allow-Origin': 'http://localhost:3000',
      //   'Access-Control-Allow-Headers': 'X-Token,Content-Type',
      //   'Access-Control-Allow-Methods': 'PUT',
      // })
      res.end()
    } else if (method === 'POST' && url === '/api/save') {
      let reqData = []
      req.on('data', (data) => {
        reqData.push(data)
      })

      req.on('end', () => {
        const data = Buffer.concat(reqData)
        res.end(`formdata: ${data.toString()}`)
      })
    }
  })
  .listen(4000, () => {
    console.log('监听4000端口')
  })
