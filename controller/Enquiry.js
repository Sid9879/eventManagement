const BaseController = require('../core/BaseController');
const Enquiry = require('../models/Enquiry');
const config = require('../config');

const enquiryController = new BaseController(Enquiry,{
    name:"Enquiry",
    access:"admin",
    
    get:{
        pagination:config.pagination,
    },
    getById:{
        pagination:config.pagination,
    },
})

module.exports = enquiryController;