const fs = require('fs')
const rs = fs.createReadStream('./1.jpeg')
const ws = fs.createWriteStream('./2.jpeg')
rs.pipe(ws)
