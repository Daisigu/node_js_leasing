const Router = require("express");
const router = new Router();
const carController = require("../controllers/carController");
const upload = require("../middlewaree/uploadFiles");
router.post(
  "/create",
  upload.fields([
    {
      name: "carouselPhotos",
      maxCount: 5,
    },
    {
      name: "photo",
      maxCount: 1,
    },
  ]),
  carController.create
);
router.get("/getAll", carController.getAll);
router.post("/getLimit", carController.getLimit);

router.get("/car/:id", carController.getCar);
router.post("/delete/:id", carController.deleteCar);
router.get("/filters", carController.filters)
router.post(
  "/update",
  upload.fields([
    {
      name: "carouselPhotos",
      maxCount: 5,
    },
    {
      name: "photo",
      maxCount: 1,
    },
  ]),
  carController.updateCar
);

module.exports = router;
