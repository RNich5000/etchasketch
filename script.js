const container = document.querySelector(".container");
const btnReset = document.querySelector("#reset");
const btnRandomize = document.querySelector("#randomize");
const btnDarken = document.querySelector("#darken");

btnReset.addEventListener("click", () => {
	startProgram(false);
});

btnRandomize.addEventListener("click", () => {
	startProgram(true);
});

btnDarken.addEventListener("click", () => {
	startProgram(false);
});

const clearBoard = function () {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
};

const addCell = function (isRandom) {
	const cell = document.createElement("div");
	cell.classList.add("cell");
	container.appendChild(cell);

	if (isRandom) {
		cell.addEventListener("mouseover", () => {
			const red = Math.floor(Math.random() * 256).toString();
			const green = Math.floor(Math.random() * 256).toString();
			const blue = Math.floor(Math.random() * 256).toString();
			const color = `RGB(${red},${green},${blue})`;
			cell.style.backgroundColor = color;
		});
	} else {
		cell.classList.add("light");
		cell.addEventListener("mouseover", () => {
			cell.classList.toggle("light");
		});
	}
};

const populateGrid = function (num, isRandom) {
	for (let i = 0; i < num ** 2; i++) {
		addCell(isRandom);
	}
};

const createBoxSize = function (num) {
	const cells = document.querySelectorAll(".cell");
	const style = window.getComputedStyle(container);
	const width = parseInt(style.getPropertyValue("width").replace("px", ""));
	const cellSize = width / num;

	for (let i = 0; i < cells.length; i++) {
		cells[i].style.width = cellSize.toString() + "px";
		cells[i].style.height = cellSize.toString() + "px";
	}
};

const startProgram = function (isRandom) {
	clearBoard();

	let numStr = prompt("How many squares? (1-100)");
	let num = parseInt(numStr) || 0;

	if (num > 0 && num <= 100) {
		populateGrid(num, isRandom);
		createBoxSize(num);
	} else {
		alert("Please enter a valid integer between 1 and 100.");
		startProgram();
	}
};

startProgram(false);
