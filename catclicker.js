function CatClicker(){

    var model = {
        currentCat: null,
        adminMode: false,
        cats: [
                {
                    "imgSrc": "https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/?format=500w",
                    "imgTitle": "Cat Number 1",
                    "clicked": 0
                },
                {
                    "imgSrc": "https://d2kwjcq8j5htsz.cloudfront.net/1970/01/25152936/kitten-1517537_960_720.jpg",
                    "imgTitle": "Cat Number 2",
                    "clicked": 0
                },
                {
                    "imgSrc": "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
                    "imgTitle": "Cat Number 3",
                    "clicked": 0
                },
                {
                    "imgSrc": "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
                    "imgTitle": "Cat Number 4",
                    "clicked": 0},
                {
                    "imgSrc": "https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450",
                    "imgTitle": "Cat Number 5",
                    "clicked": 0
                }
            ]
        
    };


    var octopus = {
        init: function() {
            model.currentCat = model.cats[0];
            viewList.init();
            viewDisplay.init();
            viewAdmin.init();
        },
        getCurrentCat: function(){
            return model.currentCat;
        },
        getCats: function(){
            return model.cats;
        }, 
        setCurrentCat: function(cat) {
            model.currentCat = cat;
            this.hideAdminMode();
        },
        incrementCounter: function(){
            model.currentCat.clicked++;
            viewDisplay.render();
        },
        getAdminMode: function(){
            return model.adminMode;
        },
        showAdminMode: function(){
            model.adminMode = true;
            viewAdmin.render();
        },
        hideAdminMode: function(){
            model.adminMode = false;
            viewAdmin.render();
        },
        updateCat: function() {
            var newCurrentCat = viewAdmin.updateCurrentCat();
            model.currentCat = newCurrentCat;
            model.adminMode = false;
            viewList.render();
            viewDisplay.render();
        }
    };


    var viewList = {
        init: function(){
            this.catListElem = document.getElementById("cat-list");
            this.render();
        },
        render: function(){
            var cats = octopus.getCats();
            this.catListElem.innerHTML = "";
            for(var i = 0; i< cats.length; i ++){
                var cat = cats[i];

                var elem = document.createElement("li");
                elem.textContent = cat.imgTitle;

                elem.addEventListener("click", (function(cat){
                    return function(){
                        octopus.setCurrentCat(cat);
                        viewDisplay.render();
                    };
                })(cat));

                this.catListElem.appendChild(elem);
            }
            
             
        }
    };

    var viewDisplay = {
        init: function() {
            this.catElem = document.getElementById("cat");
            this.catNameElem = document.getElementById("cat-name");
            this.catImageElem = document.getElementById("cat-img");
            this.countElem = document.getElementById("cat-count");

            this.catImageElem.addEventListener("click", function(){
                octopus.incrementCounter();
            });

            this.render();
        },
        render: function() {
            var currentCat = octopus.getCurrentCat();
            this.countElem.textContent = currentCat.clicked;
            this.catNameElem.textContent = currentCat.imgTitle;
            this.catImageElem.src = currentCat.imgSrc;
        }
    };

    var viewAdmin = {
        init: function(){
            this.adminBtn = document.getElementById("admin");
            this.cancelBtn = document.getElementById("cancel");
            this.saveBtn = document.getElementById("save");
            this.catName = document.getElementById("catName");
            this.imgUrl = document.getElementById("imgUrl");
            this.clicks = document.getElementById("clicks");
            this.form = document.getElementById("form");

            this.adminBtn.addEventListener("click", function(){
                octopus.showAdminMode();
            });
            this.cancelBtn.addEventListener("click", function(e){
                octopus.hideAdminMode();
                e.preventDefault();
            });
            this.saveBtn.addEventListener("click", function(e){
                octopus.updateCat();
                e.preventDefault();
            });
            this.render();
        },
        render: function() {
            this.form.style.display = "none";

            if(octopus.getAdminMode()){
                var currentCat = octopus.getCurrentCat();
                this.catName.value = currentCat.imgTitle;
                this.imgUrl.value = currentCat.imgSrc;
                this.clicks.value = currentCat.clicked;
                this.form.style.display = "block";
            }
        },
        updateCurrentCat: function(){
            var currentCat = octopus.getCurrentCat();
            currentCat.imgTitle = this.catName.value;
            currentCat.imgSrc = this.imgUrl.value;
            currentCat.clicked = this.clicks.value;
            return currentCat;
        }

    };

    octopus.init();
}

CatClicker();