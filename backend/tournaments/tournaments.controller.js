const express = require("express");
const router = express.Router();
const tournamentService = require("./tournament.service");

// routes
router.post("/create", create);
router.get("/", getAll);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function create(req, res, next) {
  // Important, we need the id from the jwt to verify
  const id = req.user.sub;
  tournamentService
    .create(id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  tournamentService
    .getAll()
    .then(tournaments => res.json(tournaments))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  tournamentService
    .getById(req.user.sub)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
}

function getById(req, res, next) {
  tournamentService
    .getById(req.params.id)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  tournamentService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  tournamentService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
