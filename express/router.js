const express = require("express");
const router = express.Router();
const middleware = require("./middleware");


router.use(middleware);


// router.get("/", (req, res) => {
//     console.log(req.query);
//     res.render("index", {
//         title: "index file",
//     });
// });
router.get("/", middleware);
router.get("/home", (req, res) => {
    res.render("home", {
        title: "home file",
    });
});
router.get("/download", (req, res) => {});

module.exports = router;