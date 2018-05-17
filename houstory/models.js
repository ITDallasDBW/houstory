'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const HoustorySchema = mongoose.Schema({
  username: {type: String, required: true},
  brand: {type: String, required: true},
  model: {type: String, required: true}
});

HoustorySchema.methods.serialize = function() {
  return {
    username: this.username || '',
    brand: this.brand || '',
    model: this.model || '',
  };
};

const Houstory = mongoose.model('Houstory', HoustorySchema);

module.exports = {Houstory};
