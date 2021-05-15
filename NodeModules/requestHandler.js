let handles = {
    start: (res, postData) => {
        console.log(`Start has been called`);
        res.end("Hello Node!");
    }
}

exports.handles = handles;