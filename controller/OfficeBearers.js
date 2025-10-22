const BaseController = require('../core/BaseController');
const config = require('../config');
const OfficeBeares = require('../models/OfficeBeares');

const officeBearerController = new BaseController(OfficeBeares,{
    name:'Office Bearers',
    accessKey:"admin",
    get:{
        pagination:config.pagination,
        searchFields:['name']
    }
});
module.exports = officeBearerController;