$(document).ready (function () {

	$( "[data-after],[data-before],[data-append],[data-replace]" ).ajaxInclude();

	$( "a[data-interaction]" ).bind( "click", function() {

		$( this ).removeAttr( "data-interaction" ).ajaxInclude({
			headerCallbacks: {

				'X-AjaxInclude-Redirect': function( url ) {
					window.location.href = url;
				}

			}
		});
		return false;
	});




		$('.banner-more').click(function(){
			$(this).parents('.banner').find('.innards').slideDown('slow');
			$(this).parents('.banner').find('.guts').slideUp('slow');
		return false;
		});
		

	
	$(document).ajaxComplete(function() {
	  
	  	$('.closer').each(function(){

	  		$(this).on('click', function(){
    			$(this).parents('.banner').find('.innards').slideUp('slow');
    			$(this).parents('.banner').find('.guts').slideDown('slow');
    		return false;
			});
	  	});

	  	
	});
	



});

