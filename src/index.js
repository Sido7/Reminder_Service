const express = require('express')
const bodyParser  = require('body-parser')

const {Port} = require('./config/serverConfig')
const sendEmail = require('./service/mailer-service')

async function createServer(){
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(Port,()=>{
        console.log("listening to Port ",Port)
    })

    sendEmail("getsupport@gmail.com","siddharth1850@gmail.com","providing support","Hello! we are happy to help you,pls let us know how can we support you")
}

createServer()