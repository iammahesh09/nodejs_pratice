var express = require('express');

var routes = express.Router();

var defaultCtrl = require('../controllers/default.ctrl');

routes.get('/', defaultCtrl.get)

module.exports = routes