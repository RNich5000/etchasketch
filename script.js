const container = document.querySelector(".container");
const btnReset = document.querySelector("#reset");

btnReset.addEventListener("click", () => {
	while (container.firstChild10) {
		container.removeChild(container.lastChild);
	}
	startProgram();
});

const addCell = function () {
	const cell = document.createElement("div");
	cell.classList.add("cell");
	cell.classList.add("dark");
	container.appendChild(cell);

	cell.addEventListener("mouseover", () => {
		cell.classList.toggle("dark");
	});
};

const populateGrid = function (num) {
	for (let i = 0; i < num ** 2; i++) {
		addCell();
	}
};

const createCssRule = function (num) {
	const cells = document.querySelectorAll(".cell");
	const style = window.getComputedStyle(container);
	const width = parseInt(style.getPropertyValue("width").replace("px", ""));
	const cellSize = width / num;
	6;

	for (let i = 0; i < cells.length; i++) {
		cells[i].style.width = cellSize.toString() + "px";
		cells[i].style.height = cellSize.toString() + "px";
	}
};

const startProgram = function () {
	let numStr = prompt("How many squares? (1-100)");
	let num = parseInt(numStr) || 0;

	if (num > 0 && num <= 100) {
		populateGrid(num);
		createCssRule(num);
	} else {
		alert("Please enter a valid integer between 1 and 100.");
		startProgram();
	}
};

startProgram();
