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
		// read the entire file
		//console.log("path: ", DATA_DIR);
		fs.readFile(DATA_DIR, "UTF-8", (err, data) => {
			if (err) {
				console.error("Error from the read file in getCourses function: ", err);
				return;
			}
			let parsedData, toWrite;
			let parsedReadFile = JSON.parse(data);
			parsedData = parsedReadFile;
			//console.log("read file inside readFile Func: ", parsedData);
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

			const newCourse = {
				id: parsedData.length + 1,
				name: req.body.name,
			};
			// push to the json array
			parsedData.push(newCourse);

			// convert to string
			toWrite = JSON.stringify(parsedData, null, " ");
			//console.log("toWrite file: ", toWrite);
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
};

module.exports = controllers;
