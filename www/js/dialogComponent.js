function dialogBox(){
	this.dialogId;
}
dialogBox.prototype = function(){
	init = function(_id){
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
		this.genData();
	},
	genData = function(){
		var template = Handlebars.templates["dialogTemplate"];
		$("#"+this.dialogId).html(template);
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