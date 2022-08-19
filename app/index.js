const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");

const app = express();

/** Install JSON request parser */
app.use(express.json());

module.exports = router.apply(app)
