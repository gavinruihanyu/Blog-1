route = (res, handler, pathName, postData) => {

    handle = handler.handles;

    handle["/"] = handle.start;
    handle["/start"] = handle.start;
    //console.log(handle)

    if (!handle[pathName]) {
       console.log(`No manipulator found for ${pathName}`);
       res.writeHead(200, { 'Content-Type': 'text/html' });
       res.write("404 Not Found!");
       res.end();
    }

    if (handle[pathName]) {
        console.log(`About to route a response for ${pathName}`);
        handle[pathName](res, postData);
    }

}
exports.route = route;