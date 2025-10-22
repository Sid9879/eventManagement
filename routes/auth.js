const express = require('express')
const router = express.Router();
const auth = require('../controller/auth');

router.post('/register',auth.register);
router.post('/login',auth.login);



router.use(auth.authenticateToken);
router.get('/profile',auth.getUser);
router.put('/update',auth.updateUser);

module.exports = router;