const mysql = require('mysql')
const cfg = {
  host: 'localhost',
  user: 'root',
  password: 'hanxd123',
  database: 'initHxd',
}

// 创建连接对象
const conn = mysql.createConnection(cfg)
// 连接
conn.connect((err) => {
  if (err) {
    throw err
  } else {
    console.log('连接成功！')
  }
})
