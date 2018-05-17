const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema ({
    title: {
        type: String, 
        required: [true, "Name Required"],
        minlength: [4, "Product title needs to be longer than 4 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price Required"]
    },
    url: { 
        type: String, 
        default: '' 
    }  
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema) 

