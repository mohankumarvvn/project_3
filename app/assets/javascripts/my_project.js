$(document).ready(function() {
	$('.go_portfolio').click(function() {
		$('body, html').animate({scrollTop: $('.content_portfolio').offset().top - $('.content_header').outerHeight()}, 1000);
	});
	$('.go_contact').click(function() {
		$('body, html').animate({scrollTop: $('.content_contact').offset().top - $('.content_header').outerHeight()}, 1000);
	});
	$('.go_home').click(function() {
		$('body, html').animate({scrollTop: 0}, 1000);
	});


	/*$(document).on('click', '.content_contact', function(event) {
		event.preventDefault();
		$('#pointer').css('left', '85%');
	});
	$(document).on('click', '.content_portfolio', function(event) {
		event.preventDefault();
		$('#pointer').css('left', '68%');
	});
	$(document).on('click', '.content_home', function(event) {
		event.preventDefault();
		$('#pointer').css('left', '53%');
	});*/


	$(document).on('scroll load',function() {
	    var value = $(this).scrollTop() + 10;
	    if ( value >=  $('.content_contact').offset().top - $('.content_header').outerHeight()){
	    	$(".content_header").css("background-color", "#999966");
	    	$('#pointer').css('left', '85%');	    	
	    }
	    else if ( value >=  $('.content_portfolio').offset().top - $('.content_header').outerHeight()){
	    	$(".content_header").css("background-color", "#cc9966");
	    	$('#pointer').css('left', '68%');	    	
	    }
	    else{
	        $(".content_header").css("background-color", "#009999");
	    	$('#pointer').css('left', '53%');	    	
	    }
	});
});