const express = require("express");
const path = require("path");

//const server = require("./server");
//const router = require("./router");
//const handler = require("./requestHandler");

const app = express();
const port = process.env.port || 1337;

//express static is a package shipped with express that helps us serve static files
app.use(express.static("../Public"))



//start
app.listen(port, () => {
    console.log(`App is listning on port: ${port}`)
})


//routing
//request handler 
//request handling for "/ alone"
app.get("/", (req, res) => {
    //sendfile is method of express
    res.sendFile(path.resolve(__dirname, "../pages/index.html"))
    /*res.json({
        name: "Gavin Yu"
    })*/
})

app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../pages/about.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../pages/contact.html"))
})

app.get("/post", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../pages/post.html"))
})


//##old server
    //server.start(router.route, handler);