
const Contact = require('../models/contactModel');

const getContact = async (req, res) => {
    try {
        console.log(req.userData);
        const contacts = await Contact.find({ userId: req.userData.userId });
        res.status(200).json({ message: 'Retrieved all contacts', data: contacts });
    } catch (error) {
        console.error('Get contacts failed:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
const createContact = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const emailExists = await Contact.findOne({ email });
        const phoneExists = await Contact.findOne({ phone });
        if (emailExists || phoneExists) {
            return res.status(400).json({ error: 'Email or phone number already exists' });
        }
        if (!name || !email || !phone) {
            return res.status(400).json({ error: 'Please fill in all fields' });
        }
        const contact = new Contact({
            userId: req.userData.userId,
            name,
            email,
            phone,
        });
        await contact.save();
        res.status(200).json({ message: 'Successfully created a contact' });
    } catch (error) {
        console.error('Create contact failed:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const getSingleContact =async (req, res) => {
    try{
        const contact = await Contact.findOne({ _id: req.params.id, userId: req.userData.userId });
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found'});
        }
        res.status(200).json(contact);
    }catch (error) {
        console.error('Get single contact failed:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const updateContact = async (req, res) => {
    try{
        const contact = await Contact.findOne({ _id: req.params.id, userId: req.userData.userId });
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found'});
        }
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        res.status(200).json(updatedContact);
    }catch (error) {
        console.error('Update contact failed:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
const deleteContact =async (req, res) => {
    try{
        const contact = await Contact.findOne({ _id: req.params.id, userId: req.userData.userId });
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found'});
        }
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "deleted contact successfully"});
    }
    catch (error) {
        console.error('Delete contact failed:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports = {getContact, createContact, getSingleContact, updateContact, deleteContact};