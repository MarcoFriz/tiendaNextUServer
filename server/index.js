const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./users.js')
const shop = require('./products.js')

const PORT = 8082;
const app = express()
var url = "mongodb://localhost/tienda"

const Server = http.createServer(app, res => {
	res.setHeader('Content-Type', 'application/json')
		.setHeader('Access-Control-Allow-Origin', '*');
})

mongoose.connect(url, { useNewUrlParser: true })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client'))
app.use('/user', users)
app.use('/product', shop)


Server.listen(PORT, () => {
	console.log("Conectados al puerto: " + PORT);
})
