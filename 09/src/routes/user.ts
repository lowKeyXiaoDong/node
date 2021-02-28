import * as Koa from 'koa'
import { get, post, middleware } from '../utils/route-decors'
const users = [{ name: 'hxd' }]

@middleware([
  async function guard(ctx, next) {
    if (ctx.header.token) {
      await next()
    } else {
      throw '请登录'
    }
  },
])
export default class User {
  @get('/users')
  public list(ctx) {
    ctx.body = { ok: 1, data: users }
  }

  @post('/users', {
    middlewares: [
      async function validation(ctx, next) {
        const name = ctx.request.body.name

        if (!name) {
          throw '请插入用户名'
        }

        await next()
      },
    ],
  })
  public add(ctx) {
    users.push(ctx.request.body)
    ctx.body = { ok: 1 }
  }
}
