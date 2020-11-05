export const init = async () => {
	const res = await fetch("/api");
	const data = await res.json();
	const hEL = document.createElement("h1");
	hEL.style.marginTop = "10vh";
	hEL.innerHTML = `${data.api}`;
	hEL.style.color = "black";
	hEL.style.border = "2px red solid";
	document.body.appendChild(hEL);
	console.log("data is: ", data);
};
