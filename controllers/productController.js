// Require the Product model
const Product = require('../models/productModel');


// Create a new product
const addNewProduct =  async (req, res) => {

    const product = new Product(req.body);

    try {

        const newProduct = await product.save();
        res.status(201).json({

            role: 'Handling incoming POST requests to create a new product',
            message: 'New product is added !',
            createdProduct: newProduct
    
        });

    } catch (err) {

        res.status(400).json({ message: err.message});

    }

};


// Retrieve all products
const getAllProducts = async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json({

            role: 'Handling incoming GET requests to get all products',
            message: `List of available products in the database !`,
            all_products: products
    
        });

    } catch (err) { res.status(500).json({ message: err.message }) };

};


// Retrieve an existing product
const getOneProduct = async (req, res) => {

    const id = req.params.productId;

    try {

        const singleProduct = await Product.findById(id);

        if (!singleProduct) {

            return res.status(500).json({ message: err.message });

        }

        res.status(200).json({

            role: 'Handling incoming GET requests to get an existing product',
            message: `The product with the current id:${id} is selected !`,
            single_product: singleProduct
    
        });

    } catch (err) { res.status(404).json({ message: 'Cannot find product !'}) };

};



// Update an existing product
const editOneProduct = async (req, res) => {

    try {

        const id = req.params.productId;
        const updatedData = req.body;
        const options = { new: true};

        const product = await Product.findById(id);

        if (!product) {

            return res.status(404).json({ message : 'Cannot find product !' });

        }

        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, options);

        res.status(200).json({

            role: 'Handling incoming PATCH requests to update an existing product',
            message: `The product with the current id:${id} is updated !`,
            updated_product: updatedProduct

        })

    } catch (err) { 

        return res.status(400).json({ message : err.message }); 
    }

};

// Delete an existing product
const deleteOneProduct = async (req, res) => {

    try {

        const id = req.params.productId;
        const updatedData = req.body;
        const options = { new: true};

        const product = await Product.findById(id);

        if (!product) {

            return res.status(404).json({ message : 'Cannot find product !' });

        }

        const deletedProduct = await Product.findByIdAndRemove(id);

        res.status(200).json({

            description: 'Handling incoming DELETE requests to delete an existing product',
            message: `The product with the current id:${id} is deleted !`,
            deleted_product: deletedProduct

        })

    } catch (err) { 

        return res.status(500).json({ message : err.message });

    }

};

module.exports = {
    
    getAllProducts,
    getOneProduct,
    addNewProduct,
    editOneProduct,
    deleteOneProduct
};
