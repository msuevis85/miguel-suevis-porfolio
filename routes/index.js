var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('pages/home', { title: 'home' });
});


/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'about' });
});


/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'projects' });
});


/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('pages/services', { title: 'services' });
});


/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'contact me' });
});


module.exports = router;
