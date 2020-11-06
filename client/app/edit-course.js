"use strict";

const editCourse = document.getElementById("edit-course");
const editFormContainer = document.querySelector(".section-update");

const courseName = document.getElementById("courseName");
const inputID = document.getElementById("id-input");
const updateButton = document.getElementById("update-button");
let dis = false;
/**
 * display or not display the Edit form container
 */
function displayEditFormContainer() {
	dis = !dis;
	if (dis) {
		editFormContainer.style.display = "contents";
	} else {
		editFormContainer.style.display = "none";
	}
}

/**
 * Fetching data
 *
 */

const updateOneCourse = async (event) => {
	const id = inputID.value;
	const res = await fetch(`/api/courses/${id}`, {
		method: "PUT",
		body: JSON.stringify({ name: courseName.value }),
		headers: {
			"content-type": "application/json; charset=UTF-8",
		},
	});
	if (!res.ok) {
		alert(`Something went wrong:`);
		console.log("Error from put method: ", res);
	} else {
		const data = await res.json();
		console.log("Edited Course: ", data);
		let courseN = data.name;
		let courseID = data.id;
		alert(
			`Your change has been saved.\nThen new course is:\nCourse Name: ${courseN} \n Course ID: ${courseID}`
		);
	}
	inputID.value = "";
	courseName.value = "";
	event.preventDefault();
};
updateButton.addEventListener("click", updateOneCourse);
editCourse.addEventListener("click", displayEditFormContainer);
