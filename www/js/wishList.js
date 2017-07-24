function wishList(){
    
}
wishList.prototype = function(){
    init = function(params){
        var wishlistTypes = params.wishlistData;
        if(wishlistTypes == "Remove"){
            this.removeData(params.any);
        }else if(wishlistTypes == "go to") {
            this.getData(params.any);
        }else if(wishlistTypes == "shopping list") {
            this.setData(params.any);
        }else if(wishlistTypes == "cart") {
            this.getData(wishlistTypes);
        }
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
            htmlData = params+ " is added to shopping list";
        }else {
            var getWishList = localStorage.getItem('wishlistData');
            wishListItems = JSON.parse(getWishList);
            if(checkValue(params)){
                 htmlData = params+ " is already added in your shopping list";
            }else{
                 wishListItems.items.push({list:params});
                 htmlData = params+ " is added to your shopping list";
            }
           
        }
        // Put the object into storage
        localStorage.setItem('wishlistData', JSON.stringify(wishListItems));     
        $("#response").append("<div class='result'><div class='query'>"+htmlData+"</div></div>");
    },
    getData = function(type){
        if(type == "cart"){
            // Retrieve the object from storage
            var getList = localStorage.getItem('cart');
            var lists = JSON.parse(getList);
            var template = Handlebars.templates["slideCart"];
            var htmlData = template(lists);
            $("#response").append("<div class='result'><div class='slideView query'>"+htmlData+"</div></div>");
        }else {
            // Retrieve the object from storage
            var getDataList = localStorage.getItem('wishlistData');
            var template = Handlebars.templates["wishListItems"];
            var htmlData = template(JSON.parse(getDataList));
            $("#response").append("<div class='result'><div class='query listItems'>"+htmlData+"</div></div>");
        }
    },
    setCart = function(params){
        var cartData = localStorage.getItem('cart');
        var cartListData = {"items":[]};
        var htmlData = "";
        var checkValue = function(value) {
            return  _.find(cartListData.items,function(child){
            return child.title.match(new RegExp(value,"i"));
            });
        };
        
        if(cartData == null){
            cartListData.items.push(params);
            htmlData = params.title+ " is added to your shopping cart";
        }else {
            var getWishList = localStorage.getItem('cart');
            cartListData = JSON.parse(getWishList);
            if(checkValue(params.title)){
                 htmlData = params.title+ " is already added in your shopping cart";
            }else{
                 cartListData.items.push(params);
                 htmlData = params.title+ " is added to your shopping cart";
            }
           
        }
        // Put the object into storage
        localStorage.setItem('cart', JSON.stringify(cartListData));   
        $("#response").append("<div class='result'><div class='query'>"+htmlData+"</div></div>");
        $("#dialogBox").dialog("close");
        
    },
    selectList = function(list){
        g_apiRequest.send(list.innerText);
    };
    removeData = function(_this){
        $(_this).parent().parent().remove();
    };
    return {
        init:init,
        setData:setData,
        getData:getData,
        selectList:selectList,
        setCart:setCart,
        removeData:removeData
    }
}();
var g_wishList = new wishList();