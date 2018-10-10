const db = require("./../_helpers/db.js");
const { Tournament, User } = db;

module.exports = {
  getAll,
  getById,
  create,
  update,
  register,
  delete: _delete
};

async function getAll() {
  const tournaments = await Tournament.find();
  // TODO (Remove sensitive data if there is some)
  return tournaments;
}

async function getById(id) {
  return await Tournament.findById(id);
}

async function create(id, tournamentParams) {
  if (id !== tournamentParams.creator) {
    throw "Can't create a tournament for some other user";
  }
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

async function register(id, teamInfo) {
  const obj = await Tournament.findById(id, { teams: 1, _id: 0 });
  let t = obj.teams;
  t.forEach(element => {
    if (element.teamName === teamInfo.teamName) {
      throw "This team name already exists";
    }
  });

  t.push(teamInfo);
  await Tournament.update({ _id: id }, { $set: { teams: t } });
}

async function update(id, tournamentParams) {}

async function _delete(id) {
  await Tournament.findByIdAndRemove(id);
}
