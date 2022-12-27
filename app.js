const express = require('express');
const { default: mongoose } = require('mongoose');
const monogoose = require('mongoose')
const url = 'mongodb://llocalhost/AlienDB'

const app = express();
mongoose.connect(url, {useNewUrlParser: true})
con.on('Open', () => {
    console.log('Connected')
})
app.listen(9000, () => {
    console.log("Server started")
})