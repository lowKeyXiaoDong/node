const Koa = require('koa')
const app = new Koa()
const redis = require('redis')
const redisStore = require('koa-redis')
const wrapper = require('co-redis')
const redisClient = redis.createClient(6379, 'localhost')

const session = require('koa-session')
const client = wrapper(redisClient)

// 参与计算
app.keys = ['some secret']

const SESS_CONFIG = {
    key: 'hxd:sess',
    maxAge: 86400000,
    signed: true,
    store: redisStore({ client })
}

app.use(session(SESS_CONFIG, app))

app.use(async (ctx, next) => {
    const key = await client.keys('*')
    console.log(key );
    key.forEach(async key => {
        console.log(await client.get(key));
    })
    await next()
})

app.use(ctx => {
    if (ctx.path === '/favicon.ico') return

    // 获取
    let n = ctx.session.count || 0
    ctx.session.count = ++n
    ctx.body = `第${n}次访问`
})

app.listen(3000)

