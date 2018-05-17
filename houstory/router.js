'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {Houstory} = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();
const passport = require('passport');
const jwtAuth = passport.authenticate('jwt', {session: false})
router.use(jwtAuth);

// Post new appliance data
router.post('/', jsonParser, (req, res) => {
  let {userId, brand, model} = req.body;
  // console.log(userId, brand, model);
  // console.log(req.body);
  const newDevice = Houstory.create(req.body);
  res.status(201).json(newDevice);
});

// Get all data
router.get('/', jsonParser, (req, res) => {
  //from MyLibrary/library/router.js
  let userId = req.user.id;
  return Houstory.find({userId})
  .then(posts => posts.map(post => post.serialize()));
  // res.json(Houstory.get());
});


module.exports = {router};
