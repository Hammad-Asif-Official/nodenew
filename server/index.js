const http = require("http");
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.end("hi this is my first node js server")
    } else if (req.url === "/download") {
        res.end("hi this is my first downlaod page")
    } else {
        res.end("Error 404")
    }
})

server.listen(3000, () => {
    console.log("server listening on port noooooo 3000")
})