var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var h1 = document.querySelector("h1");
var p = document.querySelector("p");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	button.appendChild(document.createTextNode("delete"));
	li.addEventListener("click", function(){
		li.classList.toggle("done");
	})
	button.addEventListener("click", function(){
		li.remove();
		button.remove();
	})
	ul.appendChild(li);
	ul.appendChild(button);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

h1.addEventListener("click", () => {
	h1.classList.toggle("coolTitle");
});
p.addEventListener("click", () => {
	p.classList.toggle("coolTitle");
});


