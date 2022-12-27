const express = require('express');
const { default: mongoose } = require('mongoose');
const monogoose = require('mongoose')
const url = 'mongodb://llocalhost/AlienDB'

const app = express();
mongoose.connect(url, {useNewUrlParser: true})

const con = mongoose.connection
con.on('Open', () => {
    console.log('Connected')
})

const aliensRouter = require('./routers/aliens')
app.use('/aliens', aliensRouter)
app.listen(9000, () => {
    console.log("Server started")
})