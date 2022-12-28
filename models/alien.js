const mongoose = require('mongoose')
const aliens = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true,
        default: false
    }
})

module.exports = aliens