/*=============================================*/
/*==== Import required modules
/*=============================================*/

// Include the Express library
const express = require('express');

// Import the Mongoose module
const mongoose = require('mongoose');



/*=============================================*/
/*==== Configure the application
/*=============================================*/

// Instantiate an Express object
const app = express();


// Make the entire module app available for import elsewhere
module.exports = app;