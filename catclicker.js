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

var cat3 = {
	"imgSrc": "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
	"imgTitle": "Cat Number 3",
	"imgID": "cat3",
	"clicked": 0
};

var cat4 = {
	"imgSrc": "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
	"imgTitle": "Cat Number 4",
	"imgID": "cat4",
	"clicked": 0
};

var cat5 = {
	"imgSrc": "https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450",
	"imgTitle": "Cat Number 5",
	"imgID": "cat5",
	"clicked": 0
};

var allCats = [cat1, cat2, cat3, cat4, cat5];

for(var j=0; j< allCats.length; j++){
	document.querySelector("#container").innerHTML += 
	`<div class="${allCats[j].imgID} hide">
		<h1>${allCats[j].imgTitle} -  Clicked: <span class="count">0</span></h1>
		<img id="${allCats[j].imgID}" src="${allCats[j].imgSrc}" alt="${allCats[j].imgTitle}">
	</div>`;
	document.querySelector("#catList").innerHTML += 
	`<li class="${allCats[j].imgID}">${allCats[j].imgTitle}</li>`;

}


var images = document.getElementsByTagName('img');

for(var i=0; i<images.length; i++) {
        images[i].addEventListener('click', clickMe, false);
    }

function clickMe(){
	window[this.id].clicked += 1;
	document.querySelector("." + this.id + " span").innerHTML = window[this.id].clicked;
}

var links = document.getElementsByTagName('li');

for(var l=0; l<links.length; l++) {
        links[l].addEventListener('click', showMe, false);
    }

function showMe(){
	for(var m=0; m<allCats.length; m++) {
		document.querySelector("div" + "." + allCats[m].imgID ).classList.add("hide");
	}
	document.querySelector("div" + "." + this.classList[0] ).classList.remove("hide");
}


