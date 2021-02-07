module.exports = {
  // user
  'get /': async (ctx) => {
    ctx.body = '首页'
  },
  'get /info': async (ctx) => {
    ctx.body = '详情页面'
  },
}
