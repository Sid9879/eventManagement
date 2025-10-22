const BaseControlller = require('../core/BaseController');
const Highlights = require('../models/Highlight');
const config = require('../config');

const highlighController = new BaseControlller(Highlights,{
    name:"Highlight",
    get:{
        pagination:config.pagination,
        searchFields:['type']
    }
});

module.exports = highlighController