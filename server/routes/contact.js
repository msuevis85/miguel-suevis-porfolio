let express = require("express");
let router = express.Router();

let contactController = require("../controllers/contact");
let userController = require("../controllers/user");

/* GET contact list page. */
router.get('/list',userController.ensureAuthenticated,contactController.listContact);


//  GET contact Details
router.get('/:id',userController.ensureAuthenticated,contactController.getById);


//  GET contact Details for update
router.get('/update/:id',userController.ensureAuthenticated,contactController.showUpdate);

// PUT process the Car  Details page and create a new Car  - UPDATE
router.post("/update", userController.ensureAuthenticated,contactController.update);

module.exports = router;