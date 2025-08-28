const express = require('express');
const AdminController = require('../controller/AdminController');
const verifyToken = require('../middleware/auth');
const TechnologyController = require('../controller/TechnologyController');
const SliderController = require('../controller/SliderController');
const PortfolioController = require('../controller/PortfolioController');
const EventsController = require('../controller/EventsController');
const TeamController = require('../controller/TeamController');
const LearnController = require('../controller/LearnController');
const route = express.Router();


//Admin
route.post('/register', AdminController.AdminRegister);
route.post('/login', AdminController.verifyLogin);
route.get('/logout',verifyToken,AdminController.logOut);
route.get('/getAdmin', verifyToken, AdminController.getAdmin);
route.post('/updateProfile', verifyToken, AdminController.updateProfile);
route.post('/changePassword', verifyToken, AdminController.changePassword);
route.get('/admin/dashboard', verifyToken, AdminController.dashboard )


//Technology
route.post('/techinsert', TechnologyController.techinsert);
route.get('/techdisplay', TechnologyController.techdisplay);
route.get('/techview/:id', TechnologyController.techview);
route.post('/techupdate/:id', TechnologyController.techupdate);
route.delete('/techdelete/:id', TechnologyController.techdelete);

//Slider
route.post('/createSlider', SliderController.createSlider);
route.get('/displaySlider', SliderController.displaySlider);
route.get('/viewSlider/:id', SliderController.viewSlider);
route.post('/updateSlider/:id', SliderController.updateSlider);
route.delete('/deleteSlider/:id', SliderController.deleteSlider);


// Portfolio
route.post('/createPortfolio', PortfolioController.createPortfolio);
route.get('/displayPortfolio', PortfolioController.displayPortfolio);
route.get('/viewPortfolio/:id', PortfolioController.viewPortfolio);
route.post('/updatePortfolio/:id', PortfolioController.updatePortfolio);
route.delete('/deletePortfolio/:id', PortfolioController.deletePortfolio);

// Events
route.post('/createEvents', EventsController.createEvents);
route.get('/displayEvents', EventsController.displayEvents);
route.get('/viewEvents/:id', EventsController.viewEvents);
route.post('/updateEvents/:id', EventsController.updateEvents);
route.delete('/deleteEvents/:id', EventsController.deleteEvents);

// Team
route.post('/createteam', TeamController.createTeam);
route.get('/displayTeam', TeamController.displayTeam);
route.get('/viewTeam/:id', TeamController.viewTeam);
route.post('/updateTeam/:id', TeamController.updateTeam);
route.delete('/deleteTeam/:id', TeamController.deleteTeam);


// Learn
route.post('/createLearn', LearnController.createLearn);
route.get('/displayLearn', LearnController.displayLearn);
route.get('/viewLearn/:id', LearnController.viewLearn);
route.post('/updateLearn/:id', LearnController.updateLearn);
route.delete('/deleteLearn/:id', LearnController.deleteLearn);








module.exports = route;