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
  confirmRegister,
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

  t.push(teamInfo);
  await Tournament.findOneAndUpdate(
    { _id: id },
    { teams: t },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        throw "Failed updating tournament with team";
      }

      const newItem = doc.teams.slice(-1)[0];
      const mailOptions = {
        from: "tournament.page.activation@gmail.com",
        to: "oscar.evertsson@gmail.com    ",
        subject: "Sending Email using Node.js",
        html: `<h1>Please confirm your registration to the tourmament</h1> 
        <a href="http://localhost:3000/tournament/${id}/confirm/${
          newItem._id
        }">http://localhost:3000/tournament/${id}/confirm/${newItem._id}
        </a>`
      };
      mail.sendMail(mailOptions);
    }
  );
}

async function update(id, tournamentParams) {}

async function _delete(id) {
  await Tournament.findByIdAndRemove(id);
}

async function confirmRegister(tournamentId, teamId) {
  const obj = await Tournament.findById(tournamentId, {
    teams: 1,
    _id: 0,
    registerDeadline: 1
  });

  // Check that we have not passed register deadline
  if (datePassed(obj.registerDeadline)) {
    throw "Registration deadline passed";
  }

  let t = obj.teams;
  let idx = t.findIndex(e => e._id.toString() === teamId);

  if (idx === -1) {
    throw "Can't confirm a team that doesn't exist";
  }

  t[idx].confirmed = true;
  await Tournament.findOneAndUpdate({ _id: tournamentId }, { teams: t });
}

function datePassed(registerDeadline) {
  const currentTime = moment();
  registerDeadline = moment(registerDeadline);
  return currentTime.isAfter(registerDeadline);
}
