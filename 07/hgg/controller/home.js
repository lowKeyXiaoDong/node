module.exports = app => ({
    index: async ctx => {
        // ctx.body = '首页Ctrl'
        const name = await app.$service.user.getName()
        app.ctx.body = `ctrl user ${name}`
    },
    detail: ctx => {
        app.ctx.body = '详细页面Ctrl'
    }
})