/*=============================================*/
/*==== Import required modules
/*=============================================*/

// Include the Express library
const app = require('./app');

/*=============================================*/
/*==== Configure and run the server
/*=============================================*/

// Define an IP adress for the server
const SERVER_IP = process.env.API_HOST || "127.0.0.1";

// Define a port to listen
const SERVER_PORT = process.env.API_PORT || 8080;

// Information variables
const serverErrorMsg = "Error occured, server can't start !";
const serverOnlineMsg = `Server is successfully running, and the application is available on http://${SERVER_IP}:${SERVER_PORT}`;

// Launch server that listens for HTTP requests on specified port
app.listen(SERVER_PORT, SERVER_IP, (err) => err? console.error(serverErrorMsg, err) : console.log(serverOnlineMsg));