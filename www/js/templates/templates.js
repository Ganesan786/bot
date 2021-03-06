(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addressSelect'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"cardSelect addressType\">\r\n	<div class=\"item\">\r\n          \r\n           <div class=\"productTitle blckColor\">Town Hall House\r\nLevel 2, 456 Kent Street\r\nSydney NSW 2000</div>\r\n 		   <div class=\"viewItem\" onclick=\"g_wishList.addressSelect()\">Select</div>\r\n    </div>\r\n    <div class=\"item\">\r\n         \r\n           <div class=\"productTitle blckColor\">City of Sydney\r\nGPO Box 1591\r\nSydney NSW 2001</div>\r\n 		   <div class=\"viewItem\" onclick=\"g_wishList.addressSelect()\">Select</div>\r\n    </div>\r\n</div>";
  });
templates['cardType'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"cardSelect\">\r\n	<div class=\"item\">\r\n           <img src=\"../www/img/masterCard.png\">\r\n           <div class=\"productTitle\">xxxxxxxxxxxxx123</div>\r\n 		   <div class=\"viewItem\" onclick=\"g_wishList.cardType()\">Select</div>\r\n    </div>\r\n    <div class=\"item\">\r\n           <img src=\"../www/img/visaCard.jpg\">\r\n           <div class=\"productTitle\">xxxxxxxxxxxxx687</div>\r\n 		   <div class=\"viewItem\" onclick=\"g_wishList.cardType()\">Select</div>\r\n    </div>\r\n</div>";
  });
templates['dialogTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                        <div class=\"addListItem\"><img src=";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " /></div>\r\n                  ";
  return buffer;
  }

  buffer += "<div class=\"container_Block\">\r\n<div class=\"actionBtn\">\r\n	<i class=\"fa fa-angle-left arrowBackBtn\" aria-hidden=\"true\"></i> <span class=\"blueAct backText\" onclick=\"g_dialogBox.closeDialog();\">Back</span>\r\n</div>\r\n<div class=\"dialogContainer\">\r\n	<div class=\"productInfoHeader\">\r\n	<div class=\"viewItemImg\">\r\n		<img src=";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " />\r\n	</div>\r\n	<div class=\"prodAddImg\">   \r\n        <section id=\"productExtraImg\">\r\n          <div class=\"row\">\r\n            <div class=\"large-12 columns\">\r\n              <div class=\"owl-carousel owl-theme extraProImg\">\r\n                  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.addedPhoto), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n	</div>\r\n	</div>\r\n	<div class=\"productInfo\">\r\n		<div class=\"prodHeader\">\r\n			";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		</div>\r\n		<div class=\"actionBlock\">\r\n			<div class=\"blueAct\" onClick=\"g_wishList.setCart("
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + ")\">Add to cart</div>\r\n			<div class=\"blueAct\">Read Reviews</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n</div>";
  return buffer;
  });
templates['placeOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"placeOrder\">\r\n	<div><span class=\"placeLable\">Total price : </span><span class=\"totalPrice\">";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " $</span></div>\r\n	<div><span class=\"placeLable\">Quantity : </span><span class=\"quantity\">";
  if (helper = helpers.quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></div>\r\n	<div>Sure. Where would you want the product to be delivered</div>\r\n</div>";
  return buffer;
  });
templates['priceFilter'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<li onclick=\"g_filterOptions.filterValue(this)\">";
  if (helper = helpers.keyVal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.keyVal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n	";
  return buffer;
  }

  buffer += "<ul>\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });
templates['slideCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <div class=\"item\">\r\n                 <img src=";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " />\r\n                 <div class=\"productTitle\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                 <div class=\"productPrize\">";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                 <div class=\"viewItem\" onclick='g_wishList.removeData(\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\","
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ",this)'>Remove from cart</div>\r\n                </div>\r\n              ";
  return buffer;
  }

  buffer += "<section id=\"demos\">\r\n      <div class=\"row\">\r\n        <div class=\"large-12 columns\">\r\n          <div class=\"owl-carousel owl-theme cartSlider\">\r\n              ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          </div>\r\n        </div>\r\n      </div>\r\n</section>";
  return buffer;
  });
templates['sliderTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                <div class=\"item\">\r\n                 <img src=";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " />\r\n                 <div class=\"productTitle\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                 <div class=\"productPrize\">";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                 <div class=\"viewItem\" onclick='g_dialogBox.init(\"dialogBox\","
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + ")'>View Item</div>\r\n                 <!--div class=\"btnGroup\">\r\n                    <div class=\"viewBtn\">View</div>\r\n                    <div class=\"buyBtn\">Buy</div>\r\n                  </div-->\r\n                </div>\r\n              ";
  return buffer;
  }

  buffer += "<section id=\"demos\">\r\n      <div class=\"row\">\r\n        <div class=\"large-12 columns\">\r\n          <div class=\"owl-carousel owl-theme\">\r\n              ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          </div>\r\n        </div>\r\n      </div>\r\n</section>";
  return buffer;
  });
templates['wishListItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	        <li onClick=\"g_wishList.selectList(this)\"><i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i> ";
  if (helper = helpers.list) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.list); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n	    ";
  return buffer;
  }

  buffer += "\r\n  <div class=\"list-heading\">Shopping List</div>\r\n  	<ul class='shoppingList'>\r\n	    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n";
  return buffer;
  });
})();