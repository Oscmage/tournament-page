const express = require("express");

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5000;

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
