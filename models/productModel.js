// Import the Mongoose module
const mongoose = require('mongoose');

// Create a Schema with mongoose
const productSchema = new mongoose.Schema({

    reference:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    long_description: {
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    // categories: [{
    //     category: {
    //         type: String,
    //         required: true
    //     }
    // }]

});

// Create a model from schema and export it as a external module
module.exports = mongoose.model('Product', productSchema);