var count = 0;
var img = document.querySelector("#catImg");
var countDisplay = document.querySelector("#count");

img.addEventListener('click', function(){
	count++;
	countDisplay.innerHTML = count;
});