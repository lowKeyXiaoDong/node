const redis = require('redis')

const cline = redis.createClient(6379, 'localhost')

cline.set('hello', 'This id a value')

cline.get('hello', (err, v) => {
    console.log('redis get: ', v);
})