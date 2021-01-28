export const parser = async () => {
  let reqData = []
  let size = 0
  await new Promise((resolve, reject) => {
    req.on('data', (data) => {
      reqData.push(data)
      size += data.length
    })

    req.on('end', () => {
      const data = Buffer.concat(reqData)
      console.log('data', size, data.toString())
      ctx.request.body = data.toString()
      resolve()
    })
  })
}
