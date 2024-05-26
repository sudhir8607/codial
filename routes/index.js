const express = require('express')
const router = express.Router()
const controller = require('../controller/home_controller')
console.log("inside router");

router.get('/',home_=controller.home);

module.exports= router;