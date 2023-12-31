const express = require("express");
const Router = express.Router();
const user = require("./database");

Router.get("/", (req, res) => {
    res.render("index")
})
Router.post("/register", async(req, res) => {
    try {
        const data = new user(req.body);
        const savedata = await data.save();
        res.render("login");
    } catch (error) {
        res.status(400).send(error);
    }
})

Router.post("/login", async(req, res) => {
    try {
        const checkemail = req.body.email;
        const database = await user.findOne({ email: checkemail });
        res.send(database);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = Router;