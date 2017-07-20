function filterOptions() {
	
}
filterOptions.prototype = function(){
	init = function(_params,_speech){
		this.genData(_params,_speech);
	},
	genData = function(_params,_speech){
		if(_speech != "search"){
			$("#response").append("<div class='result'><div class='query'>"+_speech+"</div></div>");
		}
		var list = "";
		var obj = (_.find(_params, function(item) {
    		return item.name == "sports"; 
		}));
		if(obj.parameters["unitCurrency.original"]){
			list = [{"keyVal":"Adidas"},{"keyVal":"Nike"},{"keyVal":"Puma"},{"keyVal":"Reebok"}];
			this.genFilterList(list);
		}else if(obj.parameters["adniList.original"]){
			list = [{"keyVal":"100$ - 250$"},{"keyVal":"250$ - 350$"},{"keyVal":"350$ - 450$"},{"keyVal":">450$"}];
			this.genFilterList(list);
		}
		if(_speech == "search"){
			var params = {
				adNiname:obj.parameters["brands"],
				adniList:obj.parameters["adniList"],
				color:obj.parameters["color"],
				unitCurrency:obj.parameters["unitCurrency.original"]
			};
			g_sportsItems.init(params,obj.parameters["adniList"]);
			$("#filterBlock").html(" ").hide();
		}
		
	},
	filterValue = function(_data){
		var setVal = $(_data).html();
		$("#input").val(setVal);
		g_apiRequest.send();
		$("#filterBlock").html(" ").hide();
	},
	genFilterList = function(_list){
		var template = Handlebars.templates["priceFilter"];
		var htmlData = "";
		var lists = {};
		lists.list = _list;
		htmlData = template(lists);
        $("#filterBlock").html(htmlData).show();
	};
	return {
		init:init,
		genData:genData,
		filterValue:filterValue,
		genFilterList:genFilterList
	}
}();
var g_filterOptions = new filterOptions();