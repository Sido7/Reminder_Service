const transporter = require('../config/email-transport')
const {NotificationRepository} = require('../repository/index')

const notiRepo = new NotificationRepository()

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

async function getAllPendingTickets(){
    try{
        const response = await notiRepo.findAllPendingTicket()
        return response

    }catch(error){
        console.group("something went wrong at service layer")
        throw error
    }
    
}

async function getTicket(filter){
    try{
        const response = await notiRepo.findTicket(filter)
        return response

    }catch(error){
        console.group("something went wrong at service layer")
        throw error
    }
    
}

async function createTicket(payload){
    try{
        const data = await notiRepo.create(payload)
        return data
    }catch(error){
        console.log("something went wron at service")
        throw error
    }
}

async function updateTicket(ticketId,data){
    try{
        const ticket = await notiRepo.update(ticketId,data)
        return ticket
    }catch(error){
        console.log("something went wron at service")
        throw error
    }
}

async function subscribeEvent(payload){
    let service = payload.service
    let data = payload.data
    switch(service){
        case 'Create_Ticket':
            await createTicket(data);
            break;
        case 'Send_Email':
            await sendEmail(data);
            break;
        default:
            console.log("no valid event recieved");
            break;
    }
}

module.exports = {
    sendEmail,
    getAllPendingTickets,
    createTicket,
    getTicket,
    updateTicket,
    subscribeEvent
}