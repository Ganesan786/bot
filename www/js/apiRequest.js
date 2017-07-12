function apiRequest() {
	this.subscriptionKey;
	this.baseUrl;
	this.recognition;
}
apiRequest.prototype = function(){
	init = function(){
		var that = this;
		that.accessToken 		= "24b9449d38e8424db925f984bf6814f1";
		that.subscriptionKey 	= "24b9449d38e8424db925f984bf6814f1";
		that.baseUrl 			= "https://api.api.ai/v1/";
			$("#input").keypress(function(event) {
				if (event.which == 13) {
					event.preventDefault();
					that.send();
                    $(this).val("");
				}
			});
			$("#rec").click(function(event) {
				that.switchRecognition();
                $(this).val("");
			});
	},

	startRecognition = function() {
			var that = this;
			that.recognition = new webkitSpeechRecognition();
			that.recognition.onstart = function(event) {
				that.updateRec();
			};
			that.recognition.onresult = function(event) {
				var text = "";
			    for (var i = event.resultIndex; i < event.results.length; ++i) {
			    	text += event.results[i][0].transcript;
			    }
			    that.setInput(text);
				that.stopRecognition();
			};
			that.recognition.onend = function() {
				that.stopRecognition();
			};
			that.recognition.lang = "en-US";
			that.recognition.start();
	},

	stopRecognition =	function() {
		var that = this;
		if (that.recognition) {
			that.recognition.stop();
			that.recognition = null;
		}
		that.updateRec();
	},

	switchRecognition = function() {
		var that = this;
		if (that.recognition) {
			that.stopRecognition();
		} else {
			that.startRecognition();
		}
	},

	setInput = function(text) {
		var that = this;
		$("#input").val(text);
		that.send();
	},

	updateRec = function() {
		var that = this;
		$("#rec").removeClass("stopMic speakingMic");
		$("#rec").addClass(that.recognition ? "speakingMic" : "stopMic");
	},

	send = function() {
		var text = $("#input").val();

		 $.ajaxSetup({
            beforeSend: function () {
               $(".loader").show();
            },
            complete: function () {
                $(".loader").hide();
            }
    	});

		$.ajax({
			type: "POST",
			url: g_apiRequest.baseUrl + "query?v=20150910",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			headers: {
				"Authorization": "Bearer " + g_apiRequest.accessToken
			},
			//data: JSON.stringify({ q: text, lang: "en" }),
			data: JSON.stringify({query: text, lang: "en", sessionId: "runbarry"}),
			success: function(data) {
				//setResponse(JSON.stringify(data, undefined, 2));
				g_apiRequest.successReturn(JSON.stringify(data, undefined, 2));
			},
			error: function() {
				g_apiRequest.setResponse("Internal Server Error");
			}
		});
		//setResponse("Loading...");
	},

	setResponse = function(val) {
		$("#response").html(val);
	},
		
	successReturn = function(val) {
		var res = JSON.parse(val);
		var action = res.result.action;
        var parameters = res.result.parameters;
		var speech = res.result.fulfillment.messages[0].speech;
		$("#response").append("<div class='query'>"+res.result.resolvedQuery+"</div>");
		switch(action) {
			case "giftShop":
                g_giftShop.init(speech);
                break;
            case "wishList":
                g_wishList.init(parameters);
                break;
            case "sportsItems":
            	g_sportsItems.init(parameters,speech);
            	break;
			default:
			$("#response").append("<div class='result'><div class='query'>"+speech+"</div></div>");
		}
		$('.content_Block').animate({scrollTop: $('.content_Block').prop("scrollHeight")}, 500);
	};

	return {
		init:init,
		startRecognition:startRecognition,
		stopRecognition:stopRecognition,
		switchRecognition:switchRecognition,
		setInput:setInput,
		updateRec:updateRec,
		send:send,
		setResponse:setResponse,
		successReturn:successReturn
	}
}();
var g_apiRequest = new apiRequest();