function apiRequest() {
	this.subscriptionKey;
	this.baseUrl;
	this.recognition;
}
apiRequest.prototype = function(){
	init = function(){
		var that = this;
		this.accessToken 		= "24b9449d38e8424db925f984bf6814f1";
		this.subscriptionKey 	= "24b9449d38e8424db925f984bf6814f1";
		this.baseUrl 			= "https://api.api.ai/v1/";
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
			this.recognition = new webkitSpeechRecognition();
			this.recognition.onstart = function(event) {
				this.updateRec();
			};
			this.recognition.onresult = function(event) {
				var text = "";
			    for (var i = event.resultIndex; i < event.results.length; ++i) {
			    	text += event.results[i][0].transcript;
			    }
			    this.setInput(text);
				this.stopRecognition();
			};
			this.recognition.onend = function() {
				this.stopRecognition();
			};
			this.recognition.lang = "en-US";
			this.recognition.start();
	},

	stopRecognition =	function() {
		if (this.recognition) {
			this.recognition.stop();
			this.recognition = null;
		}
		this.updateRec();
	},

	switchRecognition = function() {
		if (this.recognition) {
			this.stopRecognition();
		} else {
			this.startRecognition();
		}
	},

	setInput = function(text) {
		$("#input").val(text);
		this.send();
	},

	updateRec = function() {
		$("#rec").text(this.recognition ? "Stop" : "Speak");
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
			default:
			$("#response").append("<div class='result'><div class='query'>"+speech+"</div></div>");
		}
		
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