const db = require("./../_helpers/db.js");
const { Tournament, User } = db;
const moment = require("moment");
const mail = require("./../_helpers/mail");

module.exports = {
  getAll,
  getById,
  create,
  update,
  register,
  delete: _delete
};

async function getAll() {
  let tournaments = await Tournament.find();
  // Make sure the tournament is in the future and that the deadline for registering is not passed.
  tournaments = tournaments.filter(
    tournament =>
      !datePassed(tournament.registerDeadline) && !datePassed(tournament.date)
  );
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
  const obj = await Tournament.findById(id, {
    teams: 1,
    _id: 0,
    registerDeadline: 1
  });

  // Check that we have not passed register deadline
  if (datePassed(obj.registerDeadline)) {
    throw "Registration deadline passed";
  }

  // Check for duplication in team name
  let t = obj.teams;
  t.forEach(e => {
    if (e.teamName === teamInfo.teamName) {
      throw "This team name already exists";
    }
  });

  const mailOptions = {
    from: "tournament.page.activation@gmail.com",
    to: "oscar.evertsson@gmail.com    ",
    subject: "Sending Email using Node.js",
    html: "<h1>Please confirm your registration to the tourmament</h1>"
  };

  t.push(teamInfo);
  await Tournament.update({ _id: id }, { $set: { teams: t } }, (err, _) => {
    if (err) {
      console.log(err);
      throw "Failed updating tournament with team";
    }
  });
  mail.sendMail(mailOptions);
}

async function update(id, tournamentParams) {}

async function _delete(id) {
  await Tournament.findByIdAndRemove(id);
}

function datePassed(registerDeadline) {
  const currentTime = moment();
  registerDeadline = moment(registerDeadline);
  return currentTime.isAfter(registerDeadline);
}
