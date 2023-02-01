const {createTicket} = require('../service/ticket-service')

const create = async (req,res)=>{
    try{
        const data = await createTicket(req.body)
    return res.status(201).json({
        suceess: true,
        data: data,
        err: {},
        message: "successfully created the reminder"
    })
    }catch(error){
        console.log("something went wrong at controller")
        return res.status(500).json({
            suceess: false,
            data: {},
            err: error,
            message: "something went wron"
        })
    }
}

module.exports = {
    create
}