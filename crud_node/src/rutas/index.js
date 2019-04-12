const express = require('express');
const rutas = express.Router();

//rutas que el cliente puede acceder
//GET es lo que solicita el navegador del cliente
rutas.get("/",(req,res) =>{
	res.send("Hola mundo Node");
});
module.exports = rutas;