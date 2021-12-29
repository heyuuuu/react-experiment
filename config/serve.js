const http = require("http")
const https = require('https')

const server = http.createServer((req, res) => {
    post(data => {
        res.write(data);
        res.end();
    })
});

function post(callback) {
    const options = {
        hostname: 'bang.test.duia.com',
        port: 443,
        path: '/web/user/mon-list',
        method: 'POST',
        headers: {
        }
    }
    
    const instance = https.get(options, res => {
        res.on('data', callback)
    }).on('error', error => {
        console.error(error)
    })

    instance.end()
}


server.listen(8888)