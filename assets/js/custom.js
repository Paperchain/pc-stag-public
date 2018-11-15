(function($) {
"use strict";


/*--------------------------------------------------------------
 Define your own config for saastrend
------------------------------------------------------------*/
SaasTrend.config({
    appearAnimation : true, // Enable disable single page scroll on click
    singlePageScroll : true, // Enable disable single page scroll on click
    gmapApiKey: 'AIzaSyArZVfNvjnLNwJZlLJKuOiWHZ6vtQzzb1Y' // Set your google map api key ( required in order to map work properly )
});


$(function(){

$('a[href*="#"].btn_scroll').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top - 100
	}, 300, 'linear');
});


}); /*End document ready*/


})(jQuery);







    