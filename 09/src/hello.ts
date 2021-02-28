// 注解风格的装饰器
function decoate(s) {
  return function (target, property, descriptor) {
    const old = descriptor.value
    descriptor.value = (msg) => {
      msg = `${s}${s} ${msg} ${s}${s}`

      return old.apply(null, [msg])
    }

    return descriptor
  }
}

class Log {
  @decoate('*')
  print(msg) {
    console.log(msg)
  }
}

// 装饰器工厂
// const createDoc = (s) => (target, property) => {
//   const old = target.prototype[property]

//   target.prototype[property] = (msg) => {
//     msg = `${s}${msg}${s}`
//     old(msg)
//   }
// }

// const doc = createDoc('-')
// doc(Log, 'print')

const log = new Log()

log.print('hello, ts')
