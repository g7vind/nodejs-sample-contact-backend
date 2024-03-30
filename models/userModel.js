const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
},
{
    timestamps: true,
});
module.exports = mongoose.model('User', userSchema);