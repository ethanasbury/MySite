/*New JQuery file 06-09-2015*/

$(document).ready(function(){
	
	$("li#home").mouseenter(function(){

		$("li#home").fadeTo('slow', 0.50)

		$("li#home").effect( "bounce", {direction: 'up', distance: 3, times: 1}, 300 );

	});

	
	$("li#home").mouseleave(function(){

		$("li#home").fadeTo('fast', 1.00)

	});


	$("li#about").mouseenter(function(){

		$("li#about").fadeTo('slow', 0.50)

		$("li#about").effect( "bounce", {direction: 'up', distance: 3, times: 1}, 300 );

	});
	

	$("li#about").mouseleave(function(){

		$("li#about").fadeTo('fast', 1.00)
	
	});

	

	$("li#examples").mouseenter(function(){

		$("li#examples").fadeTo('slow', 0.50)

		$("li#examples").effect( "bounce", {direction: 'up', distance: 3, times: 1}, 300 );

	});
	

	$("li#examples").mouseleave(function(){

		$("li#examples").fadeTo('fast', 1.00)

	});



    	$("#button").click(function() {
        	var toAdd = $("input[name=checkListItem]").val();
        	$(".list").append('<div class="articles">' + toAdd + '</div>');
    	});
    	$(document).on('click','.item', function(){
        	$(this).remove();
    	});
});

