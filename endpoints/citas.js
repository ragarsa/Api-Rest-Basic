const express = require("express"); 
const app = express.Router();
const citasController = require('../controllers/citasController');


app.post('/citas', citasController.citas);

module.exports = app;