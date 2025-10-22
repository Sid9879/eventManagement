const BaseController = require('../core/BaseController');
const Notification = require('../models/Notification');
const config = require('../config');

const notificationController = new BaseController(Notification,{
    name:'Notification',
    accesskey:'admin',

    get:{
        pagination:config.pagination,
        query:['visible']
    },
    updateById:{
        
    }
});

module.exports = notificationController;