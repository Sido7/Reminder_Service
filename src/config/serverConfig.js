const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    Port: process.env.Port,
    Email_Id: process.env.Email_Id,
    Email_Pass: process.env.Email_Pass
}