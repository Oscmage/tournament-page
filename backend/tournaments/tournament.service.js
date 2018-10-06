const db = require("./../_helpers/db.js");
const Tournament = db.Tournament;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return ["Hello"];
  return await Tournament.find();
}

async function getById(id) {
  return await Tournament.findById(id);
}

async function create(tournamentParam) {
  // validate
  if (await User.findOne({ username: tournamentParam.creator })) {
    if (!tournamentParam.name) {
      throw "Need a tournament name";
    }

    if (!tournamentParam.description) {
      throw "Need a tournament description";
    }

    if (!tournamentParam.date) {
      throw "Need a tournament date";
    }

    if (!tournamentParam.registerDeadline) {
      throw "Need a tournament register deadline";
    }

    if (!tournamentParam.maxTeams) {
      throw "Need a tournament max amount of teams";
    }

    const tournament = new Tournament(tournamentParam);

    // save tournament
    await tournament.save();
  } else {
    throw 'Username "' +
      userParam.username +
      '" does not exist, register before creating a tournament';
  }
}

async function update(id, tournamentParam) {}

async function _delete(id) {
  await Tournament.findByIdAndRemove(id);
}
