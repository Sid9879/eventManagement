const BaseController = require('../core/BaseController');
const About = require('../models/About');

const aboutController = new BaseController(About,{
    name:"About",
    get:{
        query:['type']
    }
});

module.exports = aboutController;