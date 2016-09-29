// Dependencies
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://52.59.233.107:27017/pokemon-go-manager');

// Express
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {

	let allowedOrigins = [
		'http://pokemongomanager.de',
		'http://pokemongomanager.de:81',
		'http://pokemongomanager.waog.net',
		'http://pokemongomanager.waog.net:81',
		'http://52.59.233.107',
		'http://52.59.233.107:81',
		'http://localhost',
		'http://localhost:81',
		'http://localhost:3000',
	]

	if (allowedOrigins.includes(req.headers.origin)) {
    	res.header("Access-Control-Allow-Origin", req.headers.origin);
	}

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000, () => console.log('API is running on port 3000!'));