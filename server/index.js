require('dotenv');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const users = require('./routes/users');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
if (!config.get('jwtPrivateKey')) {
  console.error('FATALERROR: jwtPrivateKey environment variable is not defined.');
  process.exit(1);
}

mongoose.connect('mongodb://localhost/sson-auth')
  .then(() => console.log('Connected to mongodb database'))
  .catch(err => console.error('Could not connect to MongoDB...',err));

app.use(express.json());
app.use('/api/users',users);
app.use('/api/auth', auth);
app.get('/api', async(req,res)=>{

  console.log('Im getting called');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}...`));