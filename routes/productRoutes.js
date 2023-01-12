/*=============================================*/
/*==== Import required modules
/*=============================================*/

// Instantiate an Express router object
const router = require('express').Router();

// Import the controller that handles products
const productController = require('../controllers/productController');


/*=============================================*/
/*==== Routes
/*=============================================*/

// Get all products
router.get('/', productController.getAllProducts);

// Get an existing product
router.get('/:productId', productController.getOneProduct);

// Create a new product
router.post('/', productController.addNewProduct);

// Update an existing product
router.put('/:productId', productController.editOneProduct);

// Delete an existing product
router.delete('/:productId', productController.deleteOneProduct);

// Make the entire module available for import elsewhere
module.exports = router;