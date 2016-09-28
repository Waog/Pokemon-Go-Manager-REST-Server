// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var trainerSchema = new mongoose.Schema({
	googleID: Number,
	name: String,
	pokemonSet: [
      {
      	id: Number,
      	name: String,
      	valueSets: [{id: Number, cp: Number, hp: Number, stardust: Number}]
      }
    ]
});

// return model
module.exports = restful.model('Trainer', trainerSchema);