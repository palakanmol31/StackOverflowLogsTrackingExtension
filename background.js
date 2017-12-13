chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
console.log("about to take cuurent user name");
	chrome.cookies.get({url:'https://mysterious-falls-18613.herokuapp.com/login',name:'current_user'},
    //chrome.cookies.get({url:'http://localhost:3000/login',name:'current_user'},
	function(cookie){
		if(cookie){
			console.log(response);
            chrome.cookies.get({url:'https://mysterious-falls-18613.herokuapp.com/login',name:'session_id'},
				function (session_cookie) {
            	if(session_cookie){
            	console.log(session_cookie.value);
                    $.post("https://mysterious-falls-18613.herokuapp.com/logevents", {'eventInnerHTML': response['eventInnerHTML'] , 'eventClassList' : response['eventClassList'], 'eventType': response['eventType'] , 'eventbaseURI': response['eventURI'] , 'currentUser' : cookie.value , 'session' : session_cookie.value },
                        function(data, status){
                            console.log("cookie in background " + status);
                        })
                        .done(function(){
                            console.log("success");
                        })
                        .fail(function(){
                            console.log("error");
                        })
                        .always(function(){
                            console.log("always");
                        });
                }
		});
		}

});
});