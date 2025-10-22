const express = require('express');
const router = express.Router();
const appAuth = require('../controller/appAuth');

router.post('/register',appAuth.register);
router.post('/otp',appAuth.sendOtp)
router.post('/verify',appAuth.verifyOtp)
router.post('/login',appAuth.login);
router.post('/forget',appAuth.forgotPassword);
router.put('/changed',appAuth.resetPassword);

router.use(appAuth.authenticateToken)
router.put('/profile',appAuth.updateUser);
router.get('/user',appAuth.getUser);


module.exports = router;