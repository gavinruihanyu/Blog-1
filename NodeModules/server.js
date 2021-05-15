const http = require("http");
const url = require("url");
const port = process.env.port || 1337;

const start = (route, handler) => {

	//callback function
	const onRequest = (req, res) => {

		
		const pathName = url.parse(req.url).pathname;

		//console.log(`Request for "${pathName}" recieved.`);

		req.setEncoding("utf8");

		//because onReq executes requests that are too large as async, we set up function that adds up data as it is queued and sends it to router as one request
		let dataPosted = "";
		req.addListener("data", (chunk) => {
			dataPosted += chunk
			console.log(`Chunk: ${chunk} recieved`)
		})

		req.addListener("end", () => {
			route(res, handler, pathName, dataPosted);
		})

	}

	const server = http.createServer(onRequest).listen(port, (err) => {
		if (!err) {
			console.log(`Server has been started on ${port}`)
		} else {
			console.log(`Error: ${err}`)
		}
	});
}

exports.start = start;