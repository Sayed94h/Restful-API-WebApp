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
		/**
		 *  Display all courses
		 */
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
		/**
		 * Display just one course by providing its ID
		 */
		fs.readFile(DATA_DIR, "UTF-8", (err, data) => {
			if (err) {
				console.error("Error from the read file in getCourses function: ", err);
				return;
			}
			let parsedData = JSON.parse(data);
			//console.log("parsedData from read file: ", parsedData);

			let specificCourse = parsedData.find(function (c) {
				return c.id === parseInt(req.params.id);
			});

			if (!specificCourse) {
				res.status(404).send("The course with given ID was not found");
			}
			res.send(specificCourse);
		});
	},
	createCourse: (req, res, next) => {
		/**
		 * Create one course by providing the course name
		 */
		// read the entire file
		fs.readFile(DATA_DIR, "UTF-8", (err, data) => {
			if (err) {
				console.error("Error from the read file in getCourses function: ", err);
				return;
			}
			let toWrite;
			let parsedData = JSON.parse(data);
			// validate the users input
			function validateCourse(course) {
				const schema = Joi.object({
					name: Joi.string().min(1).required(),
				});
				const result = schema.validate(course);
				return result;
			}
			// push the user input to the course file
			const { error } = validateCourse(req.body);
			if (error) {
				console.log("Errrrrror happend!!!!");
				res.status(400).send(error.details[0].message);
				return;
			}
			/**
			 * solve duplicates ID
			 */
			let newID = 0;
			parsedData.forEach((element) => {
				newID++;
				element.id = newID;
			});
			const newCourse = {
				id: parsedData.length + 1,
				name: req.body.name,
			};
			// push to the json array
			parsedData.push(newCourse);

			// convert to string
			toWrite = JSON.stringify(parsedData, null, " ");

			// write to json file
			fs.writeFile(DATA_DIR, toWrite, "UTF-8", (err) => {
				if (err) {
					console.log("Your changes did not saved");
					process.exit();
				}

				console.log("your changes were saved");
			});
			res.json(newCourse);
		});
	},
	editCourse: (req, res, next) => {
		/**
		 *  First read the file in the database
		 */
		fs.readFile(DATA_DIR, "UTF-8", (err, data) => {
			if (err) {
				console.error("Error from the read file in getCourses function: ", err);
				return;
			}
			let parsedData = JSON.parse(data);
			console.log("parsedData from read file: ", parsedData);
			/**
			 * Check if there is a course with the given ID
			 */
			let specificCourse = parsedData.find(function (c) {
				console.log(`c.id is: ${c.id}, req.params.id is: ${req.params.id}`);
				return c.id === parseInt(req.params.id);
			});

			if (!specificCourse) {
				console.log("the id is not ok");
				return res.status(404).send("The course with given ID was not found");
			}

			/**
			 * validate the users input
			 */
			function validateCourse(course) {
				const schema = Joi.object({
					name: Joi.string().min(1).required(),
				});
				const result = schema.validate(course);
				return result;
			}
			const { error } = validateCourse(req.body);
			if (error) {
				res.status(400).send(error.details[0].message);
				return;
			}
			/**
			 * update the course with the given ID
			 */
			specificCourse.name = req.body.name;
			let toWrite = JSON.stringify(parsedData, null, " ");

			/**
			 * write to json file (save changes)
			 */
			fs.writeFile(DATA_DIR, toWrite, "UTF-8", (err) => {
				if (err) {
					console.log("Your changes did not saved");
					process.exit();
				}

				console.log("your changes were saved");
			});
			res.send(specificCourse);
		});
	},
	deleteCourse: (req, res, next) => {
		/**
		 *  First read the file in the database
		 */
		fs.readFile(DATA_DIR, "UTF-8", (err, data) => {
			if (err) {
				console.error("Error from the read file in getCourses function: ", err);
				return;
			}
			let parsedData = JSON.parse(data);
			console.log("parsedData from read file: ", parsedData);
			/**
			 * Check if there is a course with the given ID
			 */
			let specificCourse = parsedData.find(function (c) {
				console.log(`c.id is: ${c.id}, req.params.id is: ${req.params.id}`);
				return c.id === parseInt(req.params.id);
			});

			if (!specificCourse) {
				console.log("the id is not ok");
				return res.status(404).send("The course with given ID was not found");
			}
			/**
			 * delete the course with the given ID
			 */
			const index = parsedData.indexOf(specificCourse);

			parsedData.splice(index, 1);
			let toWrite = JSON.stringify(parsedData, null, " ");

			/**
			 * write to json file (save changes)
			 */
			fs.writeFile(DATA_DIR, toWrite, "UTF-8", (err) => {
				if (err) {
					console.log("Your changes did not saved");
					process.exit();
				}

				console.log("your changes were saved");
			});
			res.send(specificCourse);
		});
	},
};

module.exports = controllers;
