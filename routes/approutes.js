const express = require("express");
const router = express.Router();
const { getallvalue, addvalue,removevalue } = require("./../controllers/appController");

//defining routes and path
router.route("/healthvalues")
.get(getallvalue)
.post(addvalue)


router.route("/healthvalues/:id").delete(removevalue)

module.exports = router;