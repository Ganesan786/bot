function wishList(){
    
}
wishList.prototype = function(){
    init = function(params){
        var wishlistTypes = params.wishlistData;
        if(wishlistTypes == "Remove"){
            this.removeData(params.any);
        }else if(wishlistTypes == "go to") {
            this.getData(params.any);
        }else if(wishlistTypes == "wish list") {
            this.setData(params.any);
        }
        
    },
    setData = function(params){
        var checkData = localStorage.getItem('wishlistData');
        var wishListItems = {"items":[]};
        var htmlData = "";
        var checkValue = function(value) {
            return  _.find(wishListItems.items,function(child){
            return child.list.match(new RegExp(value,"i"));
            });
        };
        
        if(checkData == null){
            wishListItems.items.push({list:params});
            htmlData = params+ " is added to wish list";
        }else {
            var getWishList = localStorage.getItem('wishlistData');
            wishListItems = JSON.parse(getWishList);
            if(checkValue(params)){
                 htmlData = params+ " is already added in your wish list";
            }else{
                 wishListItems.items.push({list:params});
                 htmlData = params+ " is added to your wish list";
            }
           
        }
        // Put the object into storage
        localStorage.setItem('wishlistData', JSON.stringify(wishListItems));     
        $("#response").append("<div class='result'><div class='query'>"+htmlData+"</div></div>");
    },
    getData = function(){
        // Retrieve the object from storage
        var getWishList = localStorage.getItem('wishlistData');
        var template = Handlebars.templates["wishListItems"];
        var htmlData = template(JSON.parse(getWishList));
        $("#response").append("<div class='result'><div class='query listItems'>"+htmlData+"</div></div>");
    },
    removeData = function(){
        
    };
    return {
        init:init,
        setData:setData,
        getData:getData,
        removeData:removeData
    }
}();
var g_wishList = new wishList();