const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    Port: process.env.Port,
    Email_Id: process.env.Email_Id,
    Email_Pass: process.env.Email_Pass,
    Message_Broker_Url: process.env.Message_Broker_Url,
    Exchange_Name: process.env.Exchange_Name,
    Binding_Key: process.env.Binding_Key
}