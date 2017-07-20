function notify(){
    
}
notify.prototype = function(){
    init = function(params){
        var notifyTypes = params.variables;
        if(notifyTypes == "suggestions"){
            this.suggestion(notifyTypes);
        }else if(notifyTypes == "yes") {
            this.getData(notifyTypes);
        }
        
    },
    getData = function(){
        var speech = "Great ! I've found quiet a few sports shoes from Adidas, Nike, Puma... Let me know if this works";
        $("#response").append("<div class='result'><div class='query'>"+speech+"</div></div>");
       /* var params = {
            adNiname:"",
            adniList:"shoe",
            color:"",
            unitCurrency:""
        };
        g_sportsItems.init(params);*/
        g_apiRequest.send("shoes");
    },
    suggestion = function(_type){
        var emoji = "<i class='fa fa-smile-o' ></i>";
        var speech = "Sure will do "+emoji+" ! How about sports shoes? Looks like there are some new collections out there. Should we have a quick look?";
        $("#response").append("<div class='result'><div class='query'>"+speech+"</div></div>");
    };
    return {
        init:init,
        getData:getData,
        suggestion:suggestion
    }
}();
var g_notify = new notify();