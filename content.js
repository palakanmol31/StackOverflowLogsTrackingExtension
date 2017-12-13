var request;

$(this).on('click'  , function(event){
	var classList;
	var html = event.target.innerHTML ;
	console.log(event);
	if(event.target.classList == null || event.target.classList == "")
		classList = event.type;
	else
		classList = event.target.classList[0];

	if(html == null)
		html = "";

	request={'eventInnerHTML': html, 'eventClassList' : classList, 'eventType':event.type, 'eventURI' : event.target.baseURI};
	chrome.runtime.sendMessage(request);
});
