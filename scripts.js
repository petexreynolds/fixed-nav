(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away

		$( window ).scroll(function() {
		  if($(window).scrollTop() > 0) {
		    $('.header').addClass('fixed');
		  }
		  else{
		    $('.header').removeClass('fixed');
		  }
		});

	});
	
})(jQuery, this);