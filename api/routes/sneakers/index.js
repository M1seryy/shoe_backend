const express = require("express");
const controllers = require("../../../controllers/sneakersCtrl");

const router = express.Router();

router.get("/", controllers.sneakersController);
router.get("/:sneakerId", controllers.sneakerByIdController);
router.delete("/:sneakerId", controllers.deleteSneakersController);
router.patch("/:sneakerId", controllers.addToFavCtrl);

module.exports = router;
