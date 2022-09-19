// making a http server

const http = require('http')

const server = http.createServer(function(req, res){
    res.write('hello world\n')
    res.end()
})

server.listen(8080)