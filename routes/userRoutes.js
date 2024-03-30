const express=  require('express');
const router= express.Router();
const checkAuth= require('../middleware/checkAuth');
const{
    getUser,
    createUser,
    loginUser,
    logoutUser
}= require('../controllers/userController');

router.get('/user', checkAuth, getUser);
router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/logout', checkAuth, logoutUser);

module.exports= router;
