const http = require('http')

const server = http.createServer ((req, res) => {
    if (req.url === '/') {
     console.log (req.headers)
     res.write ('Meu primeiro server com node')
     res.end()
    }
 });

 server.on ('connection', (stream) => {
    console.log("some one connection")
 })


 server.listen (4000);
 console.log('server listen on http://localhost:4000')
 