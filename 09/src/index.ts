import * as Koa from 'koa'
import * as bodify from 'koa-body'
import * as Router from 'koa-router'
import { load } from './utils/route-decors'
import { resolve } from 'path'

const app = new Koa()

app.use(
  bodify({
    multipart: true,
    // 使用非严格模式，解析delete 请求的请求体
    strict: false,
  })
)

// const router = new Router()

// router.get('/abc', (ctx) => {
//   ctx.body = 'abc'
// })

// app.use(router.routes())

const router = load(resolve(__dirname, './routes'))
app.use(router.routes())

app.listen(3000, () => {
  console.log('服务器已启动')
})
