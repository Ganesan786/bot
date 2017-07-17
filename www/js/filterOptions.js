function filterOptions() {
	
}
filterOptions.prototype = function(){
	init = function(_params,_speech){
		this.genData(_params,_speech);
	},
	genData = function(_params,_speech){
		$("#response").append("<div class='result'><div class='query'>"+_speech+"</div></div>");
		$("#filterBlock").html(" ").hide();
		var template = Handlebars.templates["priceFilter"];
		var htmlData = "";
		var lists = {};
		if(_params.unitCurrency){
			htmlData = lists.list = [{"keyVal":"Adidas"},{"keyVal":"Nike"},{"keyVal":"Puma"},{"keyVal":"Reebok"}]
		}else if(_params.filterOption == "filterOption") {
			htmlData = lists.list = [{"keyVal":"100$ - 250$"},{"keyVal":"250$ - 350$"},{"keyVal":"350$ - 450$"},{"keyVal":">450$"}]
		}
        htmlData = template(lists);
        $("#filterBlock").html(htmlData).show();
	},
	filterValue = function(_data){
		var setVal = $(_data).html();
		$("#input").val(setVal);
		g_apiRequest.send();

	};
	return {
		init:init,
		genData:genData,
		filterValue:filterValue
	}
}();
var g_filterOptions = new filterOptions();