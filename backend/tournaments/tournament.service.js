const db = require("./../_helpers/db.js");
const { Tournament, User } = db;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Tournament.find();
}

async function getById(id) {
  return await Tournament.findById(id);
}

async function create(tournamentParams) {
  console.log(tournamentParams);
  // validate
  if (await User.findOne({ _id: tournamentParams.creator })) {
    if (!tournamentParams.name) {
      throw "Need a tournament name";
    }

    if (!tournamentParams.description) {
      throw "Need a tournament description";
    }

    if (!tournamentParams.date) {
      throw "Need a tournament date";
    }

    if (!tournamentParams.registerDeadline) {
      throw "Need a tournament register deadline";
    }

    if (!tournamentParams.maxTeams) {
      throw "Need a tournament max amount of teams";
    }

    const tournament = new Tournament(tournamentParams);

    // save tournament
    await tournament.save();
  } else {
    throw 'Username "' +
      tournamentParams.creator +
      '" does not exist, register before creating a tournament';
  }
}

async function update(id, tournamentParams) {}

async function _delete(id) {
  await Tournament.findByIdAndRemove(id);
}
