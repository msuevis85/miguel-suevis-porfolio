var express = require('express');
var router = express.Router();

let userController = require("../controllers/user");

/* GET Route for displaying the Login page */
router.get('/login',userController.displayLoginPage);

/* POST display login page */
router.post('/login', userController.processLoginPage);

/* GET to perform UserLogout */
router.get("/logout", userController.logout);

module.exports = router;
