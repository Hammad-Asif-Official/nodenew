const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("hi this is first express root");
})
app.get("/download", (req, res) => {
    res.send("Download File");
})

app.listen(3000, () => {
    console.log("server establish");
})