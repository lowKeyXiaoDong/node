const Koa = require('koa')
const app = new Koa()

// 切面编程 责任链模式
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const end = Date.now()
  console.log(`请求${ctx.url}, 耗时${end - start}秒`)
})

app.use((ctx) => {
  const expire = Date.now() + 100
  while (Date.now() < expire)
    ctx.body = {
      name: 'tom',
    }
})

app.listen(3000, () => {
  console.log('监听3000')
})
