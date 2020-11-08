"use strict";

const createCourseButton = document.getElementById("create-course");
const createForm = document.getElementById("create-form");
const submitButton = document.getElementById("post-course");
const inputText = document.getElementById("name-input");
/**
 *
 * Change the placeholder color of the input to show the user where should create the new course
 *
 */
function changePlaceholderColor() {
	let isRed = false;
	function setClass() {
		isRed = !isRed;

		if (isRed) {
			inputText.classList.remove("green");
			inputText.classList.add("label");
		} else {
			inputText.classList.remove("label");
			inputText.classList.add("green");
		}
	}
	setInterval(setClass, 700);
}

/**
 *
 *
 * Post the new course to the server
 *
 */

const postCourse = async (event) => {
	const res = await fetch(`/api/courses`, {
		method: "POST",
		body: JSON.stringify({ name: inputText.value }),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	if (!res.ok) {
		alert("Something went wrong: ", res);
		console.log("the error is: ", res);
	} else {
		const data = await res.json();
		console.log("Created course: ", data);
		let courseN = data.name;
		let courseID = data.id;
		alert(
			`Your change has been saved and the new course is:\n Course Name: ${courseN} \n Course ID: ${courseID}`
		);
	}
	event.preventDefault();
	inputText.value = "";
};

/**
 *
 * The event listeners
 *
 */
submitButton.addEventListener("click", postCourse);

createCourseButton.addEventListener("click", changePlaceholderColor);
