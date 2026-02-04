const express = require("express");
const helmet = require("helmet");

const app = express();

// Helmet security headers
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
// app.use(helmet.hsts()); // only enable if you actually want HSTS

// Static files
app.use(express.static("public"));

// API routes
const api = require("./api");
app.use("/_api", api);

// Main route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

module.exports = app;
