const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
    try {
        const userId = req.userData.userId;
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized access' });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const { password, ...data } = user._doc;
        res.status(200).json(data);
    } catch (error) {
        console.error('Get user failed:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};


const createUser = async (req, res) => {
    try{
        const { name, email, password} = req.body;
        const emailExists = await User.findOne({email});
        if (emailExists) {
            return res.status(400).json({ error: 'Email already exists'});
        }
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Please fill in all fields'});
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.status(200).json({ message: 'Successfully created a user'});
    }
    catch(error){
        console.error('Create user failed:', error.message);
        res.status(500).json({ error: 'Server error'});
    }
};
const loginUser = async (req, res) => {
    try{
        const { email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ error: 'User does not exist'});
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password'});
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.cookie('token', token);
        res.status(200).json({ message: 'Successfully logged in'});
    }
    catch(error){
        console.error('Login user failed:', error.message);
        res.status(500).json({ error: 'Server error'});
    }
};

const logoutUser = async (req, res) => {
    try{
        res.clearCookie('token');
        res.status(200).json({ message: 'Successfully logged out'});
    }
    catch(error){
        console.error('Logout user failed:', error.message);
        res.status(500).json({ error: 'Server error'});
    }
};
module.exports = {getUser, createUser, loginUser, logoutUser};

