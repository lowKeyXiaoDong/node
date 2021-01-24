const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const { clone } = require('./download')

const spawn = async (...args) => {
  const { spawn } = require('child_process')
  return new Promise((resolve) => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}
const log = (content) => console.log(chalk.green(content))
module.exports = async (name) => {
  // 打开欢迎页面
  clear()
  const data = await figlet('HXD Welcome')
  log(data)

  // 创建项目
  log(`创建项目 ${name}`)

  // 克隆代码
  await clone('github:su37josephxia/vue-template', name)
  log('安装依赖')

  await spawn('cnpm', ['install'], { cwd: `./${name}` })

  log(`
安装完成:
To get Start
==========================
    cd ${name}
    npm run serve
==========================
  `)
  const open = require('open')
  open('http://localhost:8080')
  await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}
