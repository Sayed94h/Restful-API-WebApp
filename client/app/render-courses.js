"use strict";

const displayButton = document.getElementById("display-courses");
const listContainer = document.getElementById("listContainer");
const displayOneCourse = document.getElementById("display-oneCourse");
const courseID = document.getElementById("courseID");
/**
 * fetch the data and create a table to render the data in order and nice
 *
 */
const renderCourses = async () => {
	listContainer.innerHTML = "";
	const res = await fetch("/api/courses");
	const data = await res.json();
	//console.log("data to display: ", data);

	let tableEl = document.createElement("table");
	let trElOne = document.createElement("tr");
	let thElOne = document.createElement("th");
	let thElTwo = document.createElement("th");
	thElOne.innerHTML = "Course ID";
	thElTwo.innerHTML = "Course Name";
	trElOne.appendChild(thElOne);
	trElOne.appendChild(thElTwo);
	tableEl.appendChild(trElOne);
	for (let i = 0; i < data.length; i++) {
		let row = document.createElement("tr");
		let columnOne = document.createElement("td");
		let columnTwo = document.createElement("td");
		columnOne.textContent = `${data[i].id}`;
		columnTwo.textContent = `${data[i].name}`;
		row.appendChild(columnOne);
		row.appendChild(columnTwo);

		tableEl.appendChild(row);
	}
	listContainer.appendChild(tableEl);
};

/*************
 *
 * fetch the data and create a table to render the data in order and nice
 *
 * function to render just one course by ID
 *
 ***/
const renderOneCourse = async () => {
	listContainer.innerHTML = "";
	let inputValue = courseID.value;
	const res = await fetch(`/api/courses/${inputValue}`);
	const data = await res.json();
	//console.log("data to display: ", data);
	let tableEl = document.createElement("table");
	let trElOne = document.createElement("tr");
	let thElOne = document.createElement("th");
	let thElTwo = document.createElement("th");
	thElOne.innerHTML = "Course ID";
	thElTwo.innerHTML = "Course Name";
	trElOne.appendChild(thElOne);
	trElOne.appendChild(thElTwo);
	tableEl.appendChild(trElOne);

	let row = document.createElement("tr");
	let columnOne = document.createElement("td");
	let columnTwo = document.createElement("td");
	columnOne.textContent = `${data.id}`;
	columnTwo.textContent = `${data.name}`;
	row.appendChild(columnOne);
	row.appendChild(columnTwo);

	tableEl.appendChild(row);

	listContainer.appendChild(tableEl);
	courseID.value = "";
};
/**
 *
 * The event listeners
 *
 */
displayOneCourse.addEventListener("click", renderOneCourse);
displayButton.addEventListener("click", renderCourses);
