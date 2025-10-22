const BaseController = require('../core/BaseController');
const Speaker = require('../models/Speaker');
const config = require('../config')

const speakerController = new BaseController(Speaker,{
    name:"Speaker",
    access:"admin",
    
    get:{
     pagination:config.pagination,
     sort:{priority:1},
     searchFields:['name'],
     query:['type'],
  pre: (filter, req, res) => {
      if (!req.user || req.user.role !== 'admin') {
        // Only show speakers where visibility is true
        filter.visibility = true;
      }
    }
    }
});

module.exports = speakerController;