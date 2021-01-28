const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')

app.use(require('koa-static')(__dirname + '/'))

app.use(async (ctx, next) => {
  console.log('body-parser')
  const req = ctx.request.req

  let reqData = []
  let size = 0
  await new Promise((resolve, reject) => {
    req.on('data', (data) => {
      reqData.push(data)
      size += data.length
    })

    req.on('end', () => {
      const data = Buffer.concat(reqData)
      console.log('data', size, data.toString())
      ctx.request.body = data.toString()
      resolve()
    })
  })
  await next()
})

router.post('/add', async (ctx, next) => {
  ctx.body = ctx.request.body
  next()
})
