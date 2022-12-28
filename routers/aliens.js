const express = require('express')
const Alien = require('../models/alien')
const router = express.Router()
router.get('/', async(req, res) =>{
    try{
        const aliens = Alien.find()
        res.json(aliens)
    }
    catch(err){
        res.send('Error occured'+ err);
    }
})
router.post('/', async(res,req) {
    
})

module.exports = router