import express from "express";

const router = express.Router();
const controllers = require("../../app/controllers/controllers");
const upload = require("../middleware/upload");

router.get("/", controllers.getItem);
router.get("/:id", controllers.getItemById);
router.post("/create", upload.single("image_url"), controllers.postItem);
router.put("/update/:id", upload.single("image_url"), controllers.putItem);
router.delete("/delete/:id", controllers.deleteItem);

module.exports = router;