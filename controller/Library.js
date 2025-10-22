const config  = require('../config');
const BaseController = require('../core/BaseController');
const Library = require('../models/Library');

const libraryController = new BaseController(Library,{
    name:"Library",
    access:"admin",

    get:{
        pagination:config.pagination,
        searchFields:['name'],
        query:['type']
    }
})

module.exports = libraryController;