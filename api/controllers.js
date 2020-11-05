"use strict";

const fs = require("fs");
const path = require("path");
const Joi = require("joi");

const config = require("../config");
const DATA_DIR = path.join(__dirname, "..", "data", "courses.json");

const controllers = {
	hello: (req, res) => {
		res.json({ api: "courses!" });
	},
	getCourses: (req, res, next) => {
		fs.readFile(DATA_DIR, "UTF-8", (err, data) => {
			if (err) {
				console.error("Error from the read file in getCourses function: ", err);
				return;
			}
			let parsedData = JSON.parse(data);
			console.log("parsedData from read file: ", parsedData);
			res.json(parsedData);
		});
	},
	getOneCourse: (req, res, next) => {
		fs.readFile(DATA_DIR, "UTF-8", (err, data) => {
			if (err) {
				console.error("Error from the read file in getCourses function: ", err);
				return;
			}
			let parsedData = JSON.parse(data);
			console.log("parsedData from read file: ", parsedData);

			let specificCourse = parsedData.find(function (c) {
				return c.id === parseInt(req.params.id);
			});

			if (!specificCourse) {
				res.status(404).send("The course with given ID was not found");
			}
			res.send(specificCourse);
		});
	},
};

module.exports = controllers;
