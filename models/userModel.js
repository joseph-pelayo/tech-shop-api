// Import the Mongoose module
const mongoose = require('mongoose');

// Create a Schema with mongoose
const userSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

// Create a model from schema and export it as a external module
module.exports = mongoose.model('User', userSchema);