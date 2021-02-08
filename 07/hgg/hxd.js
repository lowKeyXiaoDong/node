const Koa = require('koa')
const { initRouter, initController, initService, loadConfig } = require('./hxd-loader')

class Hxd {
    constructor (conf) {
        this.$app = new Koa(conf)
        // loadConfig(this)
        this.$service = initService()
        this.$ctrl = initController(this)
        this.$router = initRouter(this)
        this.$app.use(this.$router.routes())

    }

    start(port) {
        this.$app.listen(port, () => {
            console.log(`服务器启动 ${port}`);
        })
    }
}

module.exports = Hxd