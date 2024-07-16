const express = require("express");
const guestController = require("../controllers/guestController");

const router = express.Router();

router.get("/all",guestController.findAll);
router.get("/:id",guestController.findOne);
router.post("/",guestController.create);
router.patch("/:id",guestController.update);
router.delete("/:id",guestController.delete);


module.exports = router;
