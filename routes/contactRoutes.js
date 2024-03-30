const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const {
    getContact,
    createContact,
    getSingleContact,
    updateContact,
    deleteContact,
} = require('../controllers/contactController');
router.get('/user/contact/details',checkAuth, getContact);
router.post('/user/contact/create', checkAuth,createContact);
router.get('/contact/:id',checkAuth, getSingleContact);
router.put('/contact/:id',checkAuth, updateContact);
router.delete('/contact/:id',checkAuth, deleteContact);
module.exports = router;