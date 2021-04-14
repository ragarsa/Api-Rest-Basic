const express = require("express"); 
const app = express.Router();
const bienvenidaController = require('../controllers/bienvenidaController');


app.get('/', bienvenidaController.bienvenida);

module.exports = app; 