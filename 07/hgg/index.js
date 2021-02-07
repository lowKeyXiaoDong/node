const Koa = require('koa')
const app = new Koa()
const { initRouter } = require('./hxd-loader')

app.use(initRouter().routes())
app.listen(3000)
