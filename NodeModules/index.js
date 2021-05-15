const server = require("./server");
const router = require("./router");
const handler = require("./requestHandler")

server.start(router.route, handler);