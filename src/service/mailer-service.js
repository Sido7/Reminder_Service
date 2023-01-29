const transporter = require('../config/email-transport')

// const mailOptions = {
//     from: 'remiderservice@gmail.com',
//     to: 'siddharth1850@gmail.com',
//     subject: 'Checking the mailer service',
//     text: 'Kuchnhi bhai bas nodemailer check kar rha tha'
//   };

async function sendEmail(mailFrom,mailTo,subject,body){
    try{
        const res = await transporter.sendMail({
           from: mailFrom,
           to: mailTo,
           subject: subject,
           text: body
        })
        
    }catch(error){
    console.log(error)
    }
}

module.exports = sendEmail