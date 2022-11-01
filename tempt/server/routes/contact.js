let express = require("express");
let router = express.Router();

let contactController = require("../controllers/contact");
let userController = require("../controllers/user");

/* GET contact list page. */
router.get('/list',userController.ensureAuthenticated,contactController.listContact);


//  GET contact Details
router.get('/:id',userController.ensureAuthenticated,contactController.getById);



module.exports = router;