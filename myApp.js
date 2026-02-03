const express = require("express");
const helmet = require("helmet");
const api = require("./server.js");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use(helmet.hidePoweredBy());

app.disable("strict-transport-security");
app.use("/_api", api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

module.exports = app;

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
