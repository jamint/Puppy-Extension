// var hamburger = document.getElementsByClassName("hamburger");
var onlineStatus = "online";
var content = $('.content');
var offlineMessage = $('.offline-message');

// createCookie("waka", "waka2")
// console.log(readCookie("waka"));

// ---------------- Init --------------------
showVideo();

// ---------------- Cookies --------------------
setInterval(function() {
	var newOnlineStatus = navigator.onLine;
	if(navigator.onLine) { // true|false
		newOnlineStatus = "online";
	} else {
		newOnlineStatus = "offline";
	}
	if (newOnlineStatus != onlineStatus) {
		onlineStatus = newOnlineStatus;
		// console.log("Status Changed. The new status is: " + navigator.onLine);
		changeOnlineStatus();
	}
}, 1000);

function changeOnlineStatus() {
	// console.log(content);
	content.empty();
	if (onlineStatus === "offline") {
		console.log("you're now offline");
		offlineMessage.addClass("show");
		
	} else {
		console.log("you're now online");
		offlineMessage.removeClass("show");
		showVideo();
	}
}

function showVideo() {
	content.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tNMfBs6kKK0?autoplay=1" frameborder="0" allowfullscreen></iframe>');
}







// ---------------- Cookies --------------------

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	var thing = name+"="+value+expires+"; path=/"
	document.cookie = thing;
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}