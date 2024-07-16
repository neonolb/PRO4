const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.get("/all",bookingController.findAll);
router.get("/:Id_R",bookingController.findOne);
router.post("/",bookingController.create);
router.patch("/:Id_R",bookingController.update);
router.delete("/:Id_R",bookingController.delete)
//router.get("/search",bookingController.filter);


module.exports = router;
