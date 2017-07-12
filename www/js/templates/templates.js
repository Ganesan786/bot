(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dialogTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container_Block\">\r\n<div class=\"actionBtn\">\r\n	<i class=\"fa fa-angle-left arrowBackBtn\" aria-hidden=\"true\"></i> <span class=\"blueAct backText\" onclick=\"g_dialogBox.closeDialog();\">Back</span>\r\n</div>\r\n<div class=\"dialogContainer\">\r\n	<div class=\"productInfoHeader\">\r\n	<div class=\"viewItemImg\">\r\n		<img src=\"../www/img/m1.jpg\" class=\"productImg\" />\r\n	</div>\r\n	<div class=\"prodAddImg\">\r\n		<ul class=\"addListImg\">\r\n			<li class=\"addListItem\"><img src=\"../www/img/m5.jpg\" /></li>\r\n			<li class=\"addListItem\"><img src=\"../www/img/m6.jpg\" /></li>\r\n			<li class=\"addListItem\"><img src=\"../www/img/m3.jpg\" /></li>\r\n		</ul>\r\n	</div>\r\n	</div>\r\n	<div class=\"productInfo\">\r\n		<div class=\"prodHeader\">\r\n			product for marriage gifts\r\n		</div>\r\n		<div class=\"actionBlock\">\r\n			<div class=\"blueAct\">Buy Item</div>\r\n			<div class=\"blueAct\">Read Reviews</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n</div>";
  });
templates['sliderTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "</div>\r\n                 <div class=\"viewItem\" onclick='g_dialogBox.init(\"dialogBox\")'>View Item</div>\r\n                 <!--div class=\"btnGroup\">\r\n                    <div class=\"viewBtn\">View</div>\r\n                    <div class=\"buyBtn\">Buy</div>\r\n                  </div-->\r\n                </div>\r\n              ";
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
  buffer += "\r\n        <li>";
  if (helper = helpers.list) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.list); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n    ";
  return buffer;
  }

  buffer += "<ul>\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });
})();