const express = require('express')
const app = express()
const proxy = require('http-proxy-middleware')
console.log(proxy, 'proxy')

app.use(express.static(__dirname + '/'))
// 代理
app.use('/api', proxy.createProxyMiddleware({ target: 'http://localhost:4000' }))
app.listen(3000)
