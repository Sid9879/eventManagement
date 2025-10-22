const BaseController = require('../core/BaseController');
const User = require('../models/User');
const config = require('../config');
const AuthController = require('../core/AuthController');

const userController = new BaseController(User,{
    name:"User",
    access:"admin",

    get:{
        pagination:config.pagination,
        select:'-password -otp'
    }
})

const  registerUserController = new AuthController(User,{
    name:"Admin registed successfully",
});



module.exports = {userController,registerUserController};