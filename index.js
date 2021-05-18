const express = require("express");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

const port = process.env.port || 1337;

const server = {
    "start": () => {

        app.listen(port, () => {
            console.log(`Server is listning on port: ${port}`);
        })

        app.get("/", (req, res) => {
            res.render("index");
        })
        app.get("/about", (req, res) => {
            res.render("about");
        })
        app.get("/contact", (req, res) => {
            res.render("contact");
        })
        app.get("/post", (req, res) => {
            res.render("post");
        })

    }
}

server.start();