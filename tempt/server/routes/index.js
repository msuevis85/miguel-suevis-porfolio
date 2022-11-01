const express = require('express');
const router = express.Router();

let userController = require("../controllers/user");

/* GET home page. */
router.get('/' ,userController.ensureAuthenticated,function(req, res, next) {
  res.render('pages/home', { title: 'home',  displayName: req.user ? req.user.displayName : "", });
});

/* GET home page. */
router.get('/home', userController.ensureAuthenticated, function(req, res, next) {
    res.render('pages/home', { title: 'home',displayName: req.user ? req.user.displayName : "", });
  });
  
/* GET about me page. */
router.get('/about', userController.ensureAuthenticated, function(req, res, next) {
res.render('pages/about', { title: 'about', displayName: req.user ? req.user.displayName : "", });
});

/* GET project page. */
router.get('/projects', userController.ensureAuthenticated, function(req, res, next) {
res.render('pages/projects', { title: 'projects', displayName: req.user ? req.user.displayName : "", });
});

/* GET services page. */
router.get('/services', userController.ensureAuthenticated, function(req, res, next) {
res.render('pages/services', { title: 'services', displayName: req.user ? req.user.displayName : "", });
});

/* GET contact me page. */
router.get('/contact', userController.ensureAuthenticated, function(req, res, next) {
res.render('pages/contact', { title: 'contact me', displayName: req.user ? req.user.displayName : "", });
});


module.exports = router;
  