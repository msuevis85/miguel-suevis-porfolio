let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

let contactController = require("../controllers/contact");
let userController = require("../controllers/user");

/* GET contact list page. */
router.get('/list',userController.ensureAuthenticated,contactController.listContact);

/* PUT contact list page. */
router.get('/update',userController.ensureAuthenticated,function(req,res,next) {
  res.render('contact/update', { 
    title: 'my contact list',
    displayName: req.user ? req.user.displayName : "",
  });
});


/* DELETE contact list page. */
router.delete('/delete',userController.ensureAuthenticated,function(req,res,next) {
  res.render('contact/update', { 
    title: 'my contact list',
    displayName: req.user ? req.user.displayName : "",
  });
});


module.exports = router;