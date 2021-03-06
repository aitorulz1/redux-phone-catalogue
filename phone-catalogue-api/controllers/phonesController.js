const Phone = require('../models/Phone');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  Phone.find()
    .then(phones => res.json(phones))
    .catch(error => next(error));
}