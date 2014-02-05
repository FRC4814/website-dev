var app = (function() {

	'use strict';
	var privateVariable = 'app fired!',
		docElem = document.documentElement;

	return {
		publicFunction: function() {
			console.log(privateVariable);
		},
		userAgentInit: function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		}
	};

})();

(function() {

	'use strict';

	//foundation init
	$(document).foundation();

	app.publicFunction();
	app.userAgentInit();

})();

// Load Slider
Flipsnap('.slideshow');
var $next = $('.next').click(function() {
	flipsnap.toNext();
});
var $prev = $('.past').click(function() {
    flipsnap.toPrev();
});