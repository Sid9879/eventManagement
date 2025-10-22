const BaseController = require('../core/BaseController');
const Notes = require('../models/Notes');

const notesController = new BaseController(Notes,{
    name:"Notes",
    accessKey:'user',
    get:{
        searchFields:['title']
    }
});

module.exports = notesController;