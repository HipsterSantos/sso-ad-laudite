const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const {findUser,createUser }  = require('../controllers/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/my-account',findUser);
router.post('/',createUser);

module.exports = router; 
