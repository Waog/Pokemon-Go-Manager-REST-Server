// Dependencies
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/pokemon-go-manager');

// Express
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:81");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000, () => console.log('API is running on port 3000!'));