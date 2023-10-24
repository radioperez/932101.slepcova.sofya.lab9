const display = document.getElementById("display").children[0];

const literalButtons = document.getElementsByClassName("lit");

for (let i=0; i<literalButtons.length; i++) {
	literalButtons[i].addEventListener('click', function(){
		let num = this.innerHTML;
		if (display.value == "0") display.value = num;
		else display.value += num;
	});
}

const controlButtons = document.getElementsByClassName("control");
const clearButton = document.getElementById("clear");

clearButton.addEventListener('click', function() {
	display.value = "0";
});

const deleteButton = document.getElementById("delete");

deleteButton.addEventListener('click', function() {
	if (display.length < 2) display.value = "0";
	else {
		display.value = display.value.slice(0,-1);
	}
});

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click', function() {
	let curExpression = display.value;
	display.value = eval(curExpression);
});