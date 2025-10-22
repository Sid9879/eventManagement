const BaseController = require('../core/BaseController');
const EventDate = require('../models/EventDate');
const config = require('../config');

const eventDate = new BaseController(EventDate,{
    name:"Event Date",
    accesskey:"admin",
    get:{
        pagination:config.pagination,
        searchFields:['eventDate']

    }
});

module.exports = eventDate