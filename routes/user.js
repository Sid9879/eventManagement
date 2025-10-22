const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');
const bannerController = require('../controller/Banner');
const enquiryController = require('../controller/Enquiry');
const {feedbackControllerUser} = require('../controller/Feedback');
const notificationController = require('../controller/Notification');
const committeeController = require('../controller/Committee');
const notesController = require('../controller/Note')
const speakerController = require('../controller/Speaker');
const officeBearerController = require('../controller/OfficeBearers');
const eventDate = require('../controller/EventDate');
const eventWorkshopController = require('../controller/EventWorkshop');
const finalPageController = require('../controller/FinalPage');
const highlighController = require('../controller/Hightlight');
const libraryController = require('../controller/Library');
const exhibitionController = require('../controller/Exhibition');
const mapsController = require('../controller/Map');
const homepageController = require('../controller/HomePage');
const feedbackeventcontroller = require('../controller/FeedbackEvent')



//authenticationa and authorizetion
router.use(auth.authenticateToken);
router.use(auth.authorizeRole('user'));

//Banner..
router.get('/banner', bannerController.get);
router.get('/banner/:id', bannerController.getById);


//Enquiry..
router.post('/enquiry',enquiryController.create);

//Feedback..
router.get('/feedback',feedbackControllerUser.get);
router.get('/feedback/:id',feedbackControllerUser.getById);
router.post('/feedback',feedbackControllerUser.create);
router.put('/feedback/:id',feedbackControllerUser.updateById);


//Notificaton..
router.get('/notification',notificationController.get);
router.get('/notification/:id',notificationController.getById);


//Notes Curd..
router.get('/notes',notesController.get);
router.get('/notes/:id',notesController.getById);
router.post('/notes',notesController.create);
router.put('/notes/:id',notesController.updateById);
router.delete('/notes/:id',notesController.deleteById);

//Committtee..
router.get('/committee',committeeController.get);
router.get('/committee/:id',committeeController.getById);

//Speaker..
router.get('/speaker',speakerController.get);
router.get('/speaker/:id',speakerController.getById);

//OfficeBearers...
router.get('/OfficeBearers',officeBearerController.get);
router.get('/OfficeBearers/:id',officeBearerController.getById);


//EventDate..
router.get('/event',eventDate.get);
router.get('/event/:id',eventDate.getById);

//Event Workshop...
router.get('/event-workshop',eventWorkshopController.get);
router.get('/event-workshop/:id',eventWorkshopController.getById);

//Final-page..
router.get('/final-page',finalPageController.get);
router.get('/final-page/:id',finalPageController.getById);

//HighLights..
router.get('/highLights',highlighController.get);
router.get('/highLights/:id',highlighController.getById);

//Library...
router.get('/library',libraryController.get)
router.get('/library/:id',libraryController.getById)

//Exhibition..
router.get('/exhibition',exhibitionController.get);
router.get('/exhibition/:id',exhibitionController.getById);

//Maps..
router.get('/maps',mapsController.get);
router.get('/maps/:id',mapsController.getById);

//Homepage..partnerVideo and venue curd
router.get('/homepage',homepageController.get);
router.get('/homepage/:id',homepageController.getById);

//Feedback for session only..
router.post('/feedback-event',feedbackeventcontroller.create);

module.exports = router;