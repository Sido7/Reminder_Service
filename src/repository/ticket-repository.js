const {NotificationTicket} = require('../models/index')
const {Op} = require('sequelize')

class NotificationRepository{
    
    async  findAllPendingTicket(){

        try{
            const pending = await NotificationTicket.findAll({})
            return pending
        }catch(error){
            console.log("Something went wrong at repository")
            throw error
        }

    }

    async  findTicket(filter){

        try{
            const pending = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {[Op.lt]:new Date()}
                }
            })
            return pending
        }catch(error){
            console.log("Something went wrong at repository")
            throw error
        }

    }

    async create(payload){

        try{
            const data = await NotificationTicket.create(payload)
            return data
        }catch(error){
            console.log("Something went wrong at repository")
            throw error
        }
       
    }

    async update(ticketId,data){
        try{
            const ticket = await NotificationTicket.findByPk(ticketId)
            if(data.status){
                ticket.status = data.status
            }
            await ticket.save()
            return ticket
        }catch(error){
            console.log("Something went wrong at repository")
            throw error
        }
       
    }
}

module.exports = NotificationRepository