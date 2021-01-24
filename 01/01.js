const fs = require('fs')
const { promisify } = require('util') // 使用promisify把异步函数进行加工可以使用async awiat
// const data = fs.readFileSync('./const.js')

// ! fs 获取data是一个Buffer 需要toString转
// console.log(data.toString())

// * 错误优先的回调函数
// fs.readFile('./const.js', (err, data) => {
//   if (err) throw err

//   console.log(data.toString())
// })
;(async () => {
  const readFile = promisify(fs.readFile)

  const data = await readFile('./const.js')
  console.log(data.toString(), 'datas')
})()
