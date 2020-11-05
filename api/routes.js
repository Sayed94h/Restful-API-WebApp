const controllers = require("./controllers.js");
const express = require("express");

const router = express.Router();

router.get("/", controllers.hello);

router.get("/courses", controllers.getCourses);
router.get("/courses/:id", controllers.getOneCourse);

// write your routes

module.exports = router;
