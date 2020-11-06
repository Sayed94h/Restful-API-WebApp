"use strict";

const deleteCourse = document.getElementById("delete-course");
const deleteFormContainer = document.querySelector(".section-delete");

const deleteID = document.getElementById("id-delete");
const deleteButton = document.getElementById("delete-button");
let displayDeleteForm = false;
/**
 * display or not display the Edit form container
 */
function displayDeleteFormContainer() {
	displayDeleteForm = !displayDeleteForm;
	if (displayDeleteForm) {
		deleteFormContainer.style.display = "contents";
	} else {
		deleteFormContainer.style.display = "none";
	}
}

/**
 * Fetching data
 *
 */

const deleteOneCourse = async (event) => {
	const id = deleteID.value;
	const res = await fetch(`/api/courses/${id}`, {
		method: "DELETE",
		headers: {
			"content-type": "application/json; charset=UTF-8",
		},
	});
	if (!res.ok) {
		alert(`Something went wrong:`);
		console.log("Error from put method: ", res);
	} else {
		const data = await res.json();
		console.log("Deleted course: ", data);
		let courseN = data.name;
		let courseID = data.id;
		alert(
			`Your change has been saved.\nThe following course deleted:\n Course Name: ${courseN} \n Course ID: ${courseID}`
		);
	}
	deleteID.value = "";
	event.preventDefault();
};
deleteButton.addEventListener("click", deleteOneCourse);
deleteCourse.addEventListener("click", displayDeleteFormContainer);
