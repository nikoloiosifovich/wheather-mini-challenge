const express = require("express");
const axios = require("axios").default;
require("dotenv").config();

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send(`<h1>server is on ${process.env.API_KEY}<h1>`);
});

module.exports = routes;
