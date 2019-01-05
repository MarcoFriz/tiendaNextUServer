const Router = require('express').Router();
const Operaciones = require('./CRUD.js');

Router.get('/all', (req, res) => {
	producto = {}
	Operaciones.searchProduct(producto, (error, result) => {
		if (error) console.log(error);
		res.json(result)
	})
})

Router.get('/delete/all', (req, res) => {
	producto = {}
	Operaciones.deleteProduct(producto, (error, result) => {
		if (error) console.log(error);
		console.log(result);
		res.send("OK");
	})
})

Router.get('/delete/:id', (req, res) => {
	producto = { id: req.params.id }
	Operaciones.deleteProduct(producto, (error, result) => {
		if (error) console.log(error);
		console.log(result);
		res.send({ result: "Ok" });
	})
})

Router.post('/new', (req, res) => {
	var producto = {
		id: Math.random() * 10000000000000000000,
		nombre: req.body.nombre,
		imagen: req.body.imagen,
		precio: req.body.precio,
		stock: req.body.stock,
	}
	Operaciones.newProduct(producto, (error, result) => {
		if (error) {
			console.log(error);
			res.send({ result: "error" });
		}
		console.log(result);
		res.send({ result: "Ok" })
	})
})

Router.post('/update/:id', (req, res) => {
	var producto = { id: req.body.id }
	var data = { stock: req.body.stock }
	Operaciones.updateProduct(producto, data, (error, result) => {
		if (error) {
			console.log(error);
			res.json({ result: "error" });
			return;
		}
		console.log(result);
		res.json({ result: "Ok" });
	})
})
module.exports = Router
