const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const activeDirectory = require('../utils/adconfig');

router.post('/login', async (req, res) => {
  
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  const {username,password} = req.body.username;

  activeDirectory.authenticate(username, password,async function(err, auth) {
    if (err) {
      console.log('ERROR: '+JSON.stringify(err));
      return res.status(400).send('This username is invalid');
    }
    
    if (auth) {
      console.log('Authenticated!');
      const user = new User({
        adName:username,
        password,
      });

      await user.save();
      const token = user.generateAuthToken();
      res.send(token);
    }

    else {      
      return res.status(401).send('Authentication failed!');
    }
  });
  
});

function validate(req) {
  const schema = {
    username: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(req, schema);
}

module.exports = router; 
