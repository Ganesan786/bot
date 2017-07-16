function dialogBox(){
	this.dialogId;
}
dialogBox.prototype = function(){
	init = function(_id,_data){
		$("#"+_id).dialog({
		    modal: true,
		    draggable: false,
		    resizable: false,
		    show: 'blind',
		    hide: 'blind',
		    width: $(window).width(),
        	height: $(window).height(),
        	left: '0px',
        	top:'0px',
		    dialogClass: 'customDialog',
		    create: function() {
        		$(this).siblings('.ui-dialog-titlebar').remove();
    		},
		    buttons: {
		        /*"I've read and understand this": function() {
		            $(this).dialog("close");
		        }*/
		    }
		});
		this.dialogId = _id;
		this.genData(_data);
        
	},
	genData = function(_data){
		var template = Handlebars.templates["dialogTemplate"];
        var htmlData = template(_data);
		$("#"+this.dialogId).html(htmlData);
          var owl = $('.owl-carousel');
	          owl.owlCarousel({
	            loop: false,
	            nav: false,
				dots:false,
	            margin: 20,
	            items:3
	          });
	          owl.on('mousewheel', '.owl-stage', function(e) {
	            e.preventDefault();
	          });
	},
	closeDialog = function(){
		$("#"+this.dialogId).dialog("close");
	};
	return {
		init:init,
		genData:genData,
		closeDialog:closeDialog
	}
}();
var g_dialogBox = new dialogBox();