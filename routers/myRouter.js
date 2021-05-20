const express = require('express');
const {mynumberX} = require('../controllers/myController');

const Router = express.Router();

Router.route('/mynumber').post(mynumberX);

module.exports = Router;