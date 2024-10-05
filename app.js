
const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Welcome to our history')
    }
    res.end(`
        <h1>Oops</h1>
        <p>That aint no intended page lil bro</p>
        <a href='/'>go here</a>
        `)
})

server.listen(3000)