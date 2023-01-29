const mailer = require('nodemailer')
const {Email_Id,Email_Pass} = require('./serverConfig')
console.log(Email_Id,Email_Pass)
let transporter = mailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: 'Gmail',
    auth: {
      user: Email_Id, // generated ethereal user
      pass: Email_Pass, // generated ethereal password
    },
  });

  module.exports = transporter