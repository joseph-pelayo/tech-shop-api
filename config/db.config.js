/*=============================================*/
/*==== MongoDB database - configuration
/*=============================================*/

module.exports = {

    // Environment variables
    cluster: `${process.env.MONGO_DB_CLUSTER}`,
    username: `${process.env.MONGO_DB_USER}`,
    password: `${process.env.MONGO_DB_PASS}`,
    database: `${process.env.MONGO_DB_NAME}`

};