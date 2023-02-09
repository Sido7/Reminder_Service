const express = require('express')
const bodyParser  = require('body-parser')
const setup = require('./util/cron-schedule')

const {Port,Binding_Key} = require('./config/serverConfig')
const {sendEmail} = require('./service/ticket-service')
const service = require('./service/ticket-service')
const {createChannel,publishMessages,subscribeMessages} = require('./util/messageQueue')

const apiRoutes = require('./routes/index')


async function createServer(){
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes)
    const channel = await createChannel()
    subscribeMessages(channel,service.subscribeEvent,Binding_Key)

    app.listen(Port,()=>{
        console.log("listening to Port ",Port)
    })

   // sendEmail("getsupport@gmail.com","siddharth1850@gmail.com","providing support","Hello! we are happy to help you,pls let us know how can we support you")
    setup()
}

createServer()