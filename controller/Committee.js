const BaseConntroller = require('../core/BaseController');
const Committee = require('../models/Committee');
const config = require('../config');

const committeeController = new BaseConntroller(Committee,{
    name:"Committee Member",
    access:"admin",


    get:{
       pagination:config.pagination,
        searchFields:['name','email']
    }

});

module.exports = committeeController;