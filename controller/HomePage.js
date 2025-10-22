const BaseController = require('../core/BaseController');
const HomePage = require('../models/HomePage');
const config = require('../config');

const homepageController = new BaseController(HomePage,{
    name:"PartnerVideo or venue",

    get:{
        populate:[{path:"banner"}]
    }
});
module.exports = homepageController;