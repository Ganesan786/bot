function giftShop() {
	
}
giftShop.prototype = function(){
	init = function(giftName){
		this.getData(giftName);
		var owl = $('.owl-carousel');
	          owl.owlCarousel({
	            loop: false,
	            nav: false,
				dots:false,
	            margin: 40,
	            items:2
	          });
	          owl.on('mousewheel', '.owl-stage', function(e) {
	            e.preventDefault();
	          });
	},
	getData = function(giftName){
        var obj = giftList[giftName];
        var lists = {list:obj};
        var template = Handlebars.templates["sliderTemplate"];
        var htmlData = template(lists);
        if(obj == undefined){
            htmlData = "Sorry we don't have "+giftName+" gift's in our swordfish";
        }
        $("#response").append("<div class='result'><div class='slideView query'>"+htmlData+"</div></div>");
	};
	return {
		init:init,
		getData:getData
	}
}();
var g_giftShop = new giftShop();