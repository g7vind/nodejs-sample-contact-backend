const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user'],
    },
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
    }, 
},
{
    timestamps: true,
});
module.exports = mongoose.model('Contact', contactSchema);