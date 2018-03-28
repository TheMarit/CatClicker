var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Cat");
	this.imgSrc = ko.observable("https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/?format=500w");
	this.level = ko.computed(function(){
		console.log(this.clickCount())
		if(this.clickCount() < 11){
			return "NewBorn";
		} else if (this.clickCount() < 101){
			return "Infant";
		} else {
			return "Teen";
		}
	},this);
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());