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
	this.currentCat = ko.observable(new Cat({
		clickCount: 0,
		name: "Cat",
		imgSrc: "https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/?format=500w",
		nicknames: [["Spike", "Spikey", "Mr. Spike"]]

	}));

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};


ko.applyBindings(new ViewModel());