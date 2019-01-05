var models = require('./models.js')
User = models.User;
Producto = models.Products;

let newRegistro = function(Model, value, callback) {
	let registro = new Model(value);
	registro.save((error) => {
		if (error) callback(error)
		callback(null, "Registro Guardado")
	})
}
let searchRegistro = function(Model, value, callback) {
	Model.find(value).exec((error, result) => {
		if (error) callback(error);
		callback(null, result);
	})
}
let deleteRegistro = function(Model, value, callback) {
	Model.deleteMany(value, (error) => {
		if (error) callback(error);
		callback(null, "Registro Eliminado")
	})
}
let updateRegistro = function(Model, value, data, callback) {
	Model.update(value, data, (error, result) => {
		if (error) callback(error);
		callback(null, result);
	})
}

module.exports.newRegistro = newRegistro;
module.exports.searchRegistro = searchRegistro;
module.exports.deleteRegistro = deleteRegistro;
module.exports.updateRegistro = updateRegistro;
//USER
module.exports.newUser = function(user, callback) {
	newRegistro(User, user, callback);
}
module.exports.searchUser = function(user, callback) {
	searchRegistro(User, user, callback);
}
module.exports.deleteUser = function(user, callback) {
	deleteRegistro(User, user, callback);
}
module.exports.updateUser = function(user, data, callback) {
	updateRegistro(User, user, data, callback);
}
//EVENT
module.exports.newProduct = function(producto, callback) {
	newRegistro(Producto, producto, callback);
}
module.exports.searchProduct = function(producto, callback) {
	searchRegistro(Producto, producto, callback);
}
module.exports.deleteProduct = function(producto, callback) {
	deleteRegistro(Producto, producto, callback);
}
module.exports.updateProduct = function(producto, data, callback) {
	updateRegistro(Producto, producto, data, callback);
}
