const controllers = require("./controllers.js");
const express = require("express");

const router = express.Router();

router.get("/", controllers.hello);

// write your routes
router.get("/courses", controllers.getCourses);
router.get("/courses/:id", controllers.getOneCourse);
router.post("/courses", controllers.createCourse);
router.put("/courses/:id", controllers.editCourse);
router.delete("/courses/:id", controllers.deleteCourse);
module.exports = router;
