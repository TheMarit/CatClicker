initialCats = [{
	"imgSrc": "https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/?format=500w",
	"name": "Cat Number 1",
	"imgID": "cat1",
	"clickCount": 0,
	"nicknames": ["Spike", "Spikey"]
},
{
	"imgSrc": "https://d2kwjcq8j5htsz.cloudfront.net/1970/01/25152936/kitten-1517537_960_720.jpg",
	"name": "Cat Number 2",
	"imgID": "cat2",
	"clickCount": 0,
	"nicknames": ["Tigy", "Tiger"]
},
{
	"imgSrc": "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
	"name": "Cat Number 3",
	"imgID": "cat3",
	"clickCount": 0,
	"nicknames": ["Caspy", "Casper"]

},
{
	"imgSrc": "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
	"name": "Cat Number 4",
	"imgID": "cat4",
	"clickCount": 0,
	"nicknames": ["Shadow", "Shooby"]
},
{
	"imgSrc": "https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450",
	"name": "Cat Number 5",
	"imgID": "cat5",
	"clickCount": 0,
	"nicknames": ["Sleepy", "Zzzzz"]
}

];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.level = ko.computed(function(){
		if(this.clickCount() < 11){
			return "NewBorn";
		} else if (this.clickCount() < 101){
			return "Infant";
		} else {
			return "Teen";
		}
	},this);
	this.nicknames = ko.observableArray(data.nicknames);
};


var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function (catItem) {
		self.catList.push( new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
	this.setCurrentCat = function(clickedCat){
		self.currentCat(clickedCat);
	};
};


ko.applyBindings(new ViewModel());