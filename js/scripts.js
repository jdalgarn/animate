// My Scripts
$(document).foundation();

//Animate.css Stuff

$('h1').click(function(){

	$('h1').addClass('animated rubberBand');
	//console.log('Click Me');

});

// Transit.js Stuff

$('img').click(function(){

	$('p').transition({

		x: 200,
		y: 200

	});

});

//unheap.com