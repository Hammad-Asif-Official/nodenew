const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
console.log(app.get("view engine"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "index file"
    })
});
app.get("/home", (req, res) => {
    res.render("home", {
        title: "home file"
    })
});
app.get("/download", (req, res) => {});

app.listen(3000, () => {
    console.log("server establish");
});