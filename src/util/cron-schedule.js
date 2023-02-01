const cron  = require('node-cron')
const transporter = require('../config/email-transport')
const {getPendingTickets,getTicket,sendEmail,updateTicket} = require('../service/ticket-service')

 function setup(){
cron.schedule("*/2 * * * *",async function(){
    const data = await getTicket({status:"Pending"})
    
    data.forEach(element => {
        //sendEmail("bookingsupport@gmail.com",element.recepientEmail,element.subject,element.content)
        transporter.sendMail({
            from: "getsupport@life.com",
            to: element.recepientEmail,
            subject: element.subject,
             text:   element.content
        },async (err,data)=>{
            if(err){
                console.log(err)
            }
            
            const updatedData =  await updateTicket(element.id,{status:"Success"})
            
        })
    });
})
}

module.exports = setup