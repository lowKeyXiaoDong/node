const Hxd = require('./hxd')
const Router = require('./router')
const app = new Hxd()
const router = new Router()

router.get('/index', async (ctx) => {
  console.log('index, xx')
  ctx.body = 'index page'
})

app.use(router.routes())

const delay = () => new Promise((resolve) => setTimeout(() => resolve(), 2000))
app.use(async (ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '5'
})
app.use(async (ctx, next) => {
  ctx.body += '2'
  await delay()
  await next()
  ctx.body += '4'
})
app.use(async (ctx, next) => {
  ctx.body += '3'
})

app.listen(3000, () => {
  console.log('监听3000端口')
})
