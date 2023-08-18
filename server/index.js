const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const jsondata = fs.readFileSync("api.json", "utf-8")
    const objdata = JSON.parse(jsondata)
    if (req.url == "/") {
        res.end("hi this is my first node js server")
    } else if (req.url === "/download") {
        res.end("hi this is my first downlaod page")
    } else if (req.url === "/about") {
        res.end(objdata[0].name)
    } else {
        res.end("Error 404")
    }
})

server.listen(3000, () => {
    console.log("server listening on port noo 3000")
})