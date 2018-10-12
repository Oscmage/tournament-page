const express = require("express");
const router = express.Router();
const tournamentService = require("./tournament.service");

// routes
router.post("/create", create);
router.post("/:id/register", register);
router.put("/:tournamentId/confirm/:teamId", confirmRegister);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function create(req, res, next) {
  // Important, we need the id from the jwt to verify
  console.log(req.sub);
  const id = req.user.sub;
  tournamentService
    .create(id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function register(req, res, next) {
  tournamentService
    .register(req.params.id, req.body)
    .then(() => {
      res.json({});
    })
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

function confirmRegister(req, res, next) {
  tournamentService
    .confirmRegister(req.params.tournamentId, req.params.teamId)
    .then(() => res.json({}))
    .catch(err => next(err));
}
