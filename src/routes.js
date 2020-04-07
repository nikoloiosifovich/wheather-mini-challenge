const express = require("express");
const axios = require("axios").default;
const moment = require("moment"); // 👁 to conv unix-GMT

require("dotenv").config(); // 👁 to process.env.API_KEY (API_KEY=api_key from openweathermap)

const routes = express.Router();
// let base = require("./database/onecall.json"); // 👁 only used for tests

const api = axios.create();

// 👁 I stay here for lot of time with this part, cause a dont know how this work
// and I need to learn on the web about this
api.interceptors.request.use(
  async function (config) {
    config.params = {
      lat: process.env.LAT,
      lon: process.env.LON,
      units: "metric",
      lang: "pt_br",
      appid: process.env.API_KEY,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async function (response) {
    const newData = await response.data.daily;
    for (e in newData) {
      newData[e].dt = moment.unix(newData[e].dt).format("DD");
      newData[e].status =
        newData[e].humidity > 70
          ? "Buuu! Sem praia hoje..."
          : "Yeah! O dia está lindo...";

      if (e > 3) {
        newData.pop();
      }
    }

    return response.data.daily;
  },
  function (error) {
    if (error.response.status === 401) {
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);

routes.get("/", async (req, res) => {
  const data = await api
    .get("http://api.openweathermap.org/data/2.5/onecall")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      if (error.response.status >= 400) {
        return error.response.status;
      }
    });

  if (data >= 400) {
    if (data === 400) {
      console.log("ERROR: ", data);
      return res
        .status(404)
        .send("<h1>Juro que não entendi o que vocês está querendo!<h1>");
    } else if (data === 401) {
      console.log("ERROR: ", data);
      return res
        .status(401)
        .send("<h1>Você tem certeza que já passou por aqui?<h1>");
    } else if (data === 403) {
      console.log("ERROR: ", data);
      return res
        .status(403)
        .send("<h1>Infelizmente você não pode ver isso!<h1>");
    } else if (data === 404) {
      console.log("ERROR: ", data);
      return res.status(404).send("<h1>Cara! Isso nem existe aqui...<h1>");
    } else if (data === 500) {
      console.log("ERROR: ", data);
      return res.status(500).send("<h1>Nem sei como resolver isso...<h1>");
    } else if (data === 503) {
      console.log("ERROR: ", data);
      return res.status(503).send("<h1>No momento, fui dar uma volta!<h1>");
    }
  } else {
    res.render("index.html", { dados: data });
  }
});

module.exports = routes;
