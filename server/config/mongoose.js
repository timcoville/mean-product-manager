// Require Mongoose
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost/productManager');

// Require Models
require('./../models/models');