/*=============================================*/
/*==== Import required modules
/*=============================================*/

// Include the Express library
const express = require('express');

// Import the Mongoose module
const mongoose = require('mongoose');

// Import MongoDB database credentials
const cnx = require('./config/db.config');


/*=============================================*/
/*==== Configure the application
/*=============================================*/

// Instantiate an Express object
const app = express();



/*==================================================*/
/*==== Create routes for HTTP methods (Endpoints)
/*==================================================*/

// Import routing modules
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');



/*==================================================*/
/*==== Middlewares
/*==================================================*/

// Set a basic GET request route for testing purposes
app.get('/', (req, res) => {

    res.status(200).json({

        message: 'Welcome to the root of your favorite API REST!'
    });

});


// This middleware will be executed for all requests received.
// app.use((req, res, next) => {

//     console.log(req);

//     res.status(200).json({

//         message: 'Welcome to the root of your favorite API REST!'
//     });

// });


// Body parser
app.use(express.json());

// Follow the specified route if the requested path is matched
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


/*=============================================*/
/*==== Database connection
/*=============================================*/

// Suppress the warning about the change that will be
// introduced in Mongoose 7 to the default value of 'strictQuery'
mongoose.set('strictQuery', false);

// MongoAtlas connection URI
const mongoAtlasUri = `mongodb+srv://${cnx.username}:${cnx.password}@${cnx.cluster}.ysvpzhj.mongodb.net/${cnx.database}?retryWrites=true&w=majority`;

// Connect the MongoDB cluster to our server using Mongoose
mongoose
    .connect(mongoAtlasUri, {

        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => console.log("Mongoose is connected to MongoDB Atlas"))
    .catch((err) => console.error(err.message));


// Make the entire module app available for import elsewhere
module.exports = app;