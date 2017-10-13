var targetElement = document.getElementById("disparaissable");

button.onclick = function(){
if (targetElement.style.display == "none"){
	targetElement.style.display = "block";
}
else {
	targetElement.style.display = "none";
}
}