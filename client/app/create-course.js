"use strict";

const createCourseButton = document.getElementById("create-course");
const createForm = document.getElementById("create-form");
const submitButton = document.getElementById("post-course");
const inputText = document.getElementById("name-input");

function createInput() {
	let isRed = false;
	function setClass() {
		isRed = !isRed;
		console.log("isRed: ", isRed);
		if (isRed) {
			inputText.classList.remove("green");
			inputText.classList.add("label");
		} else {
			inputText.classList.remove("label");
			inputText.classList.add("green");
		}
	}
	setInterval(setClass, 1000);

	// post the new course to the server

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
			console.log("saved data: ", data);
			let courseN = data.name;
			let courseID = data.id;
			alert(
				`Your change has been saved:\n Course Name: ${courseN} \n Course ID: ${courseID}`
			);
		}
		event.preventDefault();
		inputText.value = "";
	};
	submitButton.addEventListener("click", postCourse);
}

createCourseButton.addEventListener("click", createInput);
