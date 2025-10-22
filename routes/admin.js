const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');
const {userController,registerUserController} = require('../controller/User');
const committeeController = require('../controller/Committee');
const exhibitionController = require('../controller/Exhibition');
const speakerController = require('../controller/Speaker');
const libraryController = require('../controller/Library');
const bannerController = require('../controller/Banner');
const {feedbackController} = require('../controller/Feedback');
const enquiryController = require('../controller/Enquiry');
const notificationController = require('../controller/Notification');
const eventDate = require('../controller/EventDate');
const eventWorkshopController = require('../controller/EventWorkshop');
const officeBearerController = require('../controller/OfficeBearers');
const finalPageController = require('../controller/FinalPage');
const highlighController = require('../controller/Hightlight');
const mapsController = require('../controller/Map');
const aboutController = require('../controller/About');
const {getCounts,getDailyActivitySummary} = require('../controller/Dashboard');
const homepageController = require('../controller/HomePage');
const feedbackeventcontroller = require('../controller/FeedbackEvent')


router.use(auth.authenticateToken);
router.use(auth.authorizeRole("admin"));

//User
router.get('/user',userController.get);
router.post('/register',registerUserController.register);


//Committee
router.get('/committee',committeeController.get);
router.get('/committee/:id',committeeController.getById);
router.post('/committee',committeeController.create);
router.put('/committee/:id',committeeController.updateById);
router.delete('/committee/:id',committeeController.deleteById);


//OfficeBearers...
router.get('/OfficeBearers',officeBearerController.get);
router.get('/OfficeBearers/:id',officeBearerController.getById);
router.post('/OfficeBearers',officeBearerController.create);
router.put('/OfficeBearers/:id',officeBearerController.updateById);
router.delete('/OfficeBearers/:id',officeBearerController.deleteById);



//Exhibition..
router.get('/exhibition',exhibitionController.get);
router.get('/exhibition/:id',exhibitionController.getById);
router.post('/exhibition',exhibitionController.create);
router.put('/exhibition/:id',exhibitionController.updateById);
router.delete('/exhibition/:id',exhibitionController.deleteById);


//Speaker..
router.get('/speaker',speakerController.get);
router.get('/speaker/:id',speakerController.getById);
router.post('/speaker',speakerController.create);
router.put('/speaker/:id',speakerController.updateById);
router.delete('/speaker/:id',speakerController.deleteById);


//Library...
router.get('/library',libraryController.get)
router.get('/library/:id',libraryController.getById)
router.post('/library',libraryController.create)
router.put('/library/:id',libraryController.updateById)
router.delete('/library/:id',libraryController.deleteById)

//Banner..
router.get('/menu/banner', bannerController.getAll);
router.get('/banner', bannerController.get); // add pagination
router.get('/banner/:id', bannerController.getById);
router.post('/banner',  bannerController.create);
router.put('/banner/:id',  bannerController.updateById);
router.delete('/banner/:id',  bannerController.deleteById);

//Feedback..
router.get('/feedback',feedbackController.get)
router.get('/feedback/:id',feedbackController.getById)
// router.post('/feedback',feedbackController.create)
// router.put('/feedback/:id',feedbackController.updateById)
// router.delete('/feedback/:id',feedbackController.deleteById)

//Enquiry..
router.get('/enquiry',enquiryController.get)
router.get('/enquiry/:id',enquiryController.getById)
router.put('/enquiry/:id',enquiryController.updateById)
// router.delete('/enquiry/:id',enquiryController.deleteById)


//Notification.. pending
router.get('/notification',notificationController.get);
router.get('/notification/:id',notificationController.getById);
router.post('/notification',notificationController.create);
router.put('/notification/:id',notificationController.updateById);
router.delete('/notification/;id',notificationController.deleteById);

//EventDate..
router.get('/event',eventDate.get);
router.get('/event/:id',eventDate.getById);
router.post('/event',eventDate.create);
router.put('/event/:id',eventDate.updateById);
router.delete('/event/:id',eventDate.deleteById);

//Event Workshop...
router.get('/event-workshop',eventWorkshopController.get);
router.get('/event-workshop/:id',eventWorkshopController.getById);
router.post('/event-workshop',eventWorkshopController.create);
router.put('/event-workshop/:id',eventWorkshopController.updateById);
router.delete('/event-workshop/:id',eventWorkshopController.deleteById);


//Final Page...
router.get('/final-page',finalPageController.get);
router.get('/final-page/:id',finalPageController.getById);
router.post('/final-page',finalPageController.create);
router.put('/final-page/:id',finalPageController.updateById);
router.delete('/final-page/:id',finalPageController.deleteById);

//HighLights..
router.get('/highLights',highlighController.get);
router.get('/highLights/:id',highlighController.getById);
router.post('/highLights',highlighController.create);
router.put('/highLights/:id',highlighController.updateById);
router.delete('/highLights/:id',highlighController.deleteById);

//Maps Curd
router.get('/maps',mapsController.get);
router.get('/maps/:id',mapsController.getById);
router.post('/maps',mapsController.create);
router.put('/maps/:id',mapsController.updateById);
router.delete('/maps/:id',mapsController.deleteById);

//AboutUs and AboutCity..
router.get('/about',aboutController.get);
router.get('/about/:id',aboutController.getById);
router.post('/about',aboutController.create);
router.put('/about/:id',aboutController.updateById);
router.delete('/about/:id',aboutController.deleteById);

//Dashboard..
router.get('/activity',getDailyActivitySummary);
router.get('/card',getCounts);

//Homepage..partnerVideo and venue curd
router.get('/homepage',homepageController.get);
router.get('/homepage/:id',homepageController.getById);
router.post('/homepage',homepageController.create);
router.put('/homepage/:id',homepageController.updateById);
router.delete('/homepage/:id',homepageController.deleteById);


//Feedback for session only..
router.get('/feedback-event',feedbackeventcontroller.get);
router.get('/feedback-event/:id',feedbackeventcontroller.getById);
router.delete('/feedback-event/:id',feedbackeventcontroller.deleteById);


module.exports = router;