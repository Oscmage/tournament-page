var nodemailer = require("nodemailer");
const config = require("../config.json");

module.exports = { sendMail };
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.username,
    pass: config.password
  }
});

function sendMail(mailOptions) {
  return transporter.sendMail(mailOptions);
}
