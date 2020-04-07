const express = require("express");
const nunjucks = require("nunjucks");

const routes = require("./routes");

const server = express();

server.use(express.static(__dirname + "/public"));

nunjucks.configure(__dirname + "/views", {
  express: server,
  noCache: true, // 👁 I will change this after dev
});

server.use(routes);

server.listen(3333);
console.log(`👁  SERVER ♦ ••RUNNING•• ♦ PID: ${process.pid} ♦`);
