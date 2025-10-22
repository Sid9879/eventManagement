const BaseController = require('../core/BaseController');
const EventWorkshops = require('../models/EventWorkshops');
const config = require('../config');

const eventWorkshopController = new BaseController(EventWorkshops,{
    name:"Event Workshop",
    accessKey:"admin",

    get:{
        pagination:config.pagination,
        populate:[{path:"eventDate",select:"eventDate"}],
        searchFields:['title'],
        query:['eventDate']

    }
});

module.exports = eventWorkshopController;