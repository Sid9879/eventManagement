const AuthController = require('../core/AuthController');
const User = require('../models/User');
const config = require('../config');

const authConfig = {
    jwtSecret: config.jwtSecret.jwtSecret,
    jwtExpiresIn: config.jwtSecret.expiresIn,
    loginType: 'otp',
    otpField: 'mobile',
};

const authappController = new AuthController(User, authConfig);

module.exports =  authappController;