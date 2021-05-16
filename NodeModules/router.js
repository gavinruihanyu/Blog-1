const fs = require("fs");
const notFoundPage = fs.readFileSync("../Public/404.html");

route = (res, handler, pathName, postData) => {

    handle = handler.handles;

    handle["/"] = handle.start;
    //console.log(handle)

    if (handle[pathName.substring(1)]) {
        console.log(`About to route a response for ${pathName}`);
        handle[pathName.substring(1)](res, postData);
    }
    else if (handle[pathName]) {
        console.log(`About to route a response for ${pathName}`);
        handle[pathName](res, postData);
    }
    else {
        console.log(`No manipulator found for ${pathName}`);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(notFoundPage);
        res.end();
    }

}
exports.route = route;