
// Require the User model
const User = require('../models/userModel');


// Create a new user
const addNewUser =  async (req, res) => {

    const user = new User(req.body);

    try {

        const newUser = await user.save();
        res.status(201).json({

            role: 'Handling incoming POST requests to create a new user',
            message: 'New user is added !',
            createdUser: newUser
    
        });

    } catch (err) {

        res.status(400).json({ message: err.message});

    }

};


// Retrieve all users
const getAllUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json({

            role: 'Handling incoming GET requests to get all users',
            message: `List of available users in the database !`,
            all_users: users
    
        });

    } catch (err) { res.status(500).json({ message: err.message }) };

};


// Retrieve an existing user
const getOneUser = async (req, res) => {

    const id = req.params.userId;

    try {

        const singleUser = await User.findById(id);

        if (!singleUser) {

            return res.status(500).json({ message: err.message });

        }

        res.status(200).json({

            role: 'Handling incoming GET requests to get an existing user',
            message: `The product with the current id:${id} is selected !`,
            single_user: singleUser
    
        });

    } catch (err) { res.status(404).json({ message: 'Cannot find user !'}) };

};



// Update an existing user
const editOneUser = async (req, res) => {

    try {

        const id = req.params.userId;
        const updatedData = req.body;
        const options = { new: true};

        const user = await User.findById(id);

        if (!user) {

            return res.status(404).json({ message : 'Cannot find user !' });

        }

        const updatedUser = await User.findByIdAndUpdate(id, updatedData, options);

        res.status(200).json({

            role: 'Handling incoming PUT requests to update an existing user',
            message: `The user with the current id:${id} is updated !`,
            updated_user: updatedUser

        })

    } catch (err) { 

        return res.status(400).json({ message : err.message }); 
    }

};

// Delete an existing user
const deleteOneUser = async (req, res) => {

    try {

        const id = req.params.userId;
        const updatedData = req.body;
        const options = { new: true};

        const user = await User.findById(id);

        if (!user) {

            return res.status(404).json({ message : 'Cannot find user !' });

        }

        const deletedUser = await User.findByIdAndRemove(id);

        res.status(200).json({

            description: 'Handling incoming DELETE requests to delete an existing user',
            message: `The user with the current id:${id} is deleted !`,
            deleted_user: deletedUser

        })

    } catch (err) { 

        return res.status(500).json({ message : err.message });

    }

};

module.exports = {
    
    getAllUsers,
    getOneUser,
    addNewUser,
    editOneUser,
    deleteOneUser
};
