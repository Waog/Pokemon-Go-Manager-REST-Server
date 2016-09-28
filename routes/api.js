// Dependencies
let express = require('express');
let router = express.Router();

// Models
var Product = require('../models/product');

// Routes
// router.get('/products', (req, res) => res.send('api is working')); // TODO understand this line
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Return router
module.exports = router;