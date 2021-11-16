const dotenv = require("dotenv").config();

const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const express = require("express");

const app = express();

app.use(express.static("dist"));

app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 8081
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

app.get("/getData/:url", async (req, res) => {
    console.log(req.params);
    const url = `&url=${req.params.url}`;
    const baseURL = "https://api.meaningcloud.com/sentiment-2.1?lang=auto";
    const key = `&key=${process.env.API_KEY}`;
    console.log(baseURL + key + url);
    const fetch_response = await fetch(baseURL + key + url);
    const json = await fetch_response.json();
    res.json(json);
});
