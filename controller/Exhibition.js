const BaseConntroller = require('../core/BaseController');
const Exhibition = require('../models/Exhibition');
const config = require('../config');

const exhibitionController = new BaseConntroller(Exhibition,{
    name:"Exhibition",
    access:"admin",
    get:{
         pagination:config.pagination,
         searchFields:["name"],
         query:['sponsored']
    }
    
});

module.exports = exhibitionController;