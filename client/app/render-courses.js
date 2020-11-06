"use-strict";

const displayButton = document.getElementById("display-courses");
const listContainer = document.getElementById("listContainer");
const displayOneCourse = document.getElementById("display-oneCourse");
const courseID = document.getElementById("courseID");
const renderCourses = async () => {
	listContainer.innerHTML = "";
	const res = await fetch("/api/courses");
	const data = await res.json();
	console.log("data to display: ", data);
	let lineNum = 0;
	for (let i = 0; i < data.length; i++) {
		lineNum++;
		let sectionEl = document.createElement("section");
		sectionEl.className = "each-course";
		let pEl = document.createElement("p");
		let nameContainer = document.createElement("h3");
		let idContainer = document.createElement("h3");
		pEl.textContent = `${lineNum}. `;
		nameContainer.textContent = `Name: ${data[i].name}, `;
		idContainer.textContent = `ID: ${data[i].id}`;
		sectionEl.appendChild(pEl);
		sectionEl.appendChild(nameContainer);
		sectionEl.appendChild(idContainer);
		listContainer.appendChild(sectionEl);
	}
};
// function to render just one course by ID
const renderOneCourse = async (event) => {
	listContainer.innerHTML = "";
	let inputValue = courseID.value;
	console.log("id: ", inputValue);
	const res = await fetch(`/api/courses/${inputValue}`);
	const data = await res.json();
	console.log("data to display: ", data);
	let lineNum = 0;

	lineNum++;
	let sectionEl = document.createElement("section");
	sectionEl.className = "each-course";
	let pEl = document.createElement("p");
	let nameContainer = document.createElement("h3");
	let idContainer = document.createElement("h3");
	pEl.textContent = `${lineNum}. `;
	nameContainer.textContent = `Name: ${data.name}, `;
	idContainer.textContent = `ID: ${data.id}`;
	sectionEl.appendChild(pEl);
	sectionEl.appendChild(nameContainer);
	sectionEl.appendChild(idContainer);
	listContainer.appendChild(sectionEl);
	courseID.value = "";
};

displayOneCourse.addEventListener("click", renderOneCourse);
displayButton.addEventListener("click", renderCourses);
