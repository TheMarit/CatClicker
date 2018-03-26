var cat1 = {
	"imgSrc": "https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/?format=500w",
	"imgTitle": "Cat Number 1",
	"imgID": "cat1",
	"clicked": 0
};

var cat2 = {
	"imgSrc": "https://d2kwjcq8j5htsz.cloudfront.net/1970/01/25152936/kitten-1517537_960_720.jpg",
	"imgTitle": "Cat Number 2",
	"imgID": "cat2",
	"clicked": 0
};

var allCats = [cat1, cat2];

for(var j=0; j< allCats.length; j++){
	document.querySelector("#container").innerHTML += 
	`<div class="${allCats[j].imgID} hide">
		<h1>${allCats[j].imgTitle} -  Clicked: <span class="count">0</span></h1>
		<img id="${allCats[j].imgID}" src="${allCats[j].imgSrc}" alt="${allCats[j].imgTitle}">
	</div>`;
}


var images = document.getElementsByTagName('img');

for(var i=0; i<images.length; i++) {
        images[i].addEventListener('click', clickMe, false);
    }

function clickMe(){
	window[this.id].clicked += 1;
	document.querySelector("." + this.id + " span").innerHTML = window[this.id].clicked;
}


