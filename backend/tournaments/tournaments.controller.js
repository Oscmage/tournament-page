const express = require("express");
const router = express.Router();
const tournamentService = require("./tournament.service");

// routes
router.get("/", getAll);

module.exports = router;

function getAll(req, res, next) {
  tournamentService
    .getAll()
    .then(tournaments => res.json(tournaments))
    .catch(err => next(err));
}
