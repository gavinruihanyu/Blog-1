const fs = require("fs");
const homePage = fs.readFileSync("../Public/index.html")
const aboutPage = fs.readFileSync("../Public/about.html")
const contactPage = fs.readFileSync("../Public/contact.html")


let handles = {
    start: (res, postData) => {
        console.log(`Start has been called`);
        res.writeHead(200, { "Content-Type": `text/html` });
        res.end(homePage);
    },
    about: (res, postData) => {
        console.log(`Start has been called`);
        res.writeHead(200, { "Content-Type": `text/html` });
        res.end(aboutPage);
    },
    contact: (res, postData) => {
        console.log(`Start has been called`);
        res.writeHead(200, { "Content-Type": `text/html` });
        res.end(contactPage);
    }
}


exports.handles = handles;