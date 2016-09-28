// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var trainerSchema = new mongoose.Schema({
	googleID: String,
	name: String,
	pokemon: String
});

// return model
module.exports = restful.model('Trainer', trainerSchema);