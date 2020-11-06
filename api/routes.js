const controllers = require("./controllers.js");
const express = require("express");

const router = express.Router();

router.get("/", controllers.hello);

// write your routes
router.get("/courses", controllers.getCourses);
router.get("/courses/:id", controllers.getOneCourse);
router.post("/courses", controllers.createCourse);
module.exports = router;
