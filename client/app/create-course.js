"use strict";

const createCourseButton = document.getElementById("create-course");
const inputContainer = document.getElementById("input-container");
function createInput() {
	let formEl = document.createElement("form");
	let inputText = document.createElement("input");
	let submitButton = document.createElement("input");
	submitButton.type = "button";
	submitButton.value = "Create";
	submitButton.id = "post-course";
	inputText.type = "text";
	inputText.placeholder = "Enter the course name";
	inputText.id = "name-input";
	formEl.appendChild(inputText);
	formEl.appendChild(submitButton);
	inputContainer.appendChild(formEl);
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
