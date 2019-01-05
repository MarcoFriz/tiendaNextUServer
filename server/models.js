const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userId: { type: Number, required: true, unique: true },
	userName: { type: String, required: true },
	userPass: { type: String, required: true }
})

var productsSchema = new Schema({
	id: { type: Number, required: true, unique: true },
	nombre: { type: String, required: true },
	imagen: { type: String, required: true },
	precio: { type: Number, required: true },
	stock: { type: Number, required: true },
})

var User = mongoose.model("User", userSchema, "usuarios")
var Products = mongoose.model("Products", productsSchema, "products")

module.exports.User = User;
module.exports.Products = Products;
