const http = require('http')

const session = {}

http
  .createServer((req, res) => {
      const { headers } = req
      const sessionKey = 'sid'
      const cookie = headers.cookie

      if (cookie && cookie.indexOf(sessionKey) > -1) {
        // 来过
        res.end('Come Back')
        const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
        const sid = pattern.exec(cookie)[1]
        console.log('sessionKey', sid, session, session[sid]);
      } else {
        // 新用户
        const sid = (Math.random() * 9999999).toFixed()
        res.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
        session[sid] = {
          name: 'hxd'
        }

        res.end('Hello cookie')
      }
  })
  .listen(3000, () => {
    console.log('监听3000')
  })
