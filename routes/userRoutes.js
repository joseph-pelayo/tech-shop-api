/*=============================================*/
/*==== Import required modules
/*=============================================*/

// Instantiate an Express router object
const router = require('express').Router();

// Import the controller that handles users
const userController = require('../controllers/userController');

/*=============================================*/
/*==== Routes
/*=============================================*/

// Get all users
router.get('/', userController.getAllUsers);

// Get an existing user
router.get('/:userId', userController.getOneUser);

// Create a new user
router.post('/', userController.addNewUser);

// Update an existing user
router.put('/:userId', userController.editOneUser);

// Delete an existing user
router.delete('/:userId', userController.deleteOneUser);

// Make the entire module available for import elsewhere
module.exports = router;