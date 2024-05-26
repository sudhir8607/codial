const express = require('express')
const router = express.Router()
const controller = require('../controller/home_controller')
console.log("inside router");

router.get('/',controller.home);
router.use('/users',require('./users'))

module.exports= router;