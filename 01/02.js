const buffer1 = Buffer.alloc(10)
console.log(buffer1)

buffer1.write('hello')
console.log(buffer1, 'buffer1---')
const buffer2 = Buffer.from('中')
console.log(buffer2)

const buffer3 = Buffer.from('a')
console.log(buffer3)

const buffer4 = Buffer.concat([buffer2, buffer3])
console.log(buffer4.toString())
