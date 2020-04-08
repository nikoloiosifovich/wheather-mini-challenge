const express = require("express");
const nunjucks = require("nunjucks");
const cors = require("cors");
const routes = require("./routes");

const server = express();

server.use(
  cors({
    // origin: "*",
    // methods: "GET",
    // optionsSuccessStatus: 204,
  })
); // 👁 I will change this after dev (ALLOW ALL CONNECTIONS - DEVONLY)

server.use(express.static(__dirname + "/public"));

nunjucks.configure(__dirname + "/views", {
  express: server,
  noCache: false, // 👁 I will change this after dev
});

server.use(routes);

server.listen(3333);
console.log(`👁  SERVER ♦ ••RUNNING•• ♦ PID: ${process.pid} ♦`);
