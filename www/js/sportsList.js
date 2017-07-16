function sportsItems() {
	
}
sportsItems.prototype = function(){
	init = function(_params,_speech){
		this.getData(_params,_speech);
		var owl = $('.owl-carousel');
	          owl.owlCarousel({
	            loop: false,
	            nav: false,
				dots:false,
	            margin: 20,
	            items:2
	          });
	          owl.on('mousewheel', '.owl-stage', function(e) {
	            e.preventDefault();
	          });
	},
	getData = function(_params,_speech){
       	var that = this;
       /* if(_params.adNiname == "Nike" || _params.adNiname == "Adidas" ){*/
            that.genTemplate(_params,_speech);
        /*}else{
        	$("#response").append("<div class='result'><div class='query'>"+_speech+"</div></div>");
        }*/
	},
	genTemplate = function(_params,_speech){
		var obj = generalSearch[_params.adniList];
		var filtered = _.filter(obj, function(type){ return type.brand == _params.adNiname });
        if(filtered.length == 0){
            filtered = obj;
        }
        var lists = {list:filtered};
        var template = Handlebars.templates["sliderTemplate"];
        var htmlData = template(lists);
        if(lists.list.length == 0){
        	htmlData = "Sorry we don't have this matchs";
        	$("#response").append("<div class='result'><div class='query'>"+htmlData+"</div></div>");
        }else {
        	$("#response").append("<div class='result'><div class='slideView query'>"+htmlData+"</div></div>");
            $("#response").append("<div class='result'><div class='query'>"+_speech+"</div></div>");
        }
	};
	return {
		init:init,
		getData:getData,
		genTemplate:genTemplate
	}
}();
var g_sportsItems = new sportsItems();