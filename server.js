// DEPENDENCIES
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
