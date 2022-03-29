(function($) {
	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};

}(jQuery));
//Sol contador
$(document).ready(function(){
    window.addEventListener("scroll", function(){
       if (this.scrollTop(500){
  $("#counter2").jQuerySimpleCounter({
    start:  0,
    end:250,
    easing: 'swing',
    duration: 6000,
    complete: '',

  });
        }
    }, false);
});
$(document).ready(function(){
    window.addEventListener("scroll", function(){
       if (this.scrollTop(500){
  $("#counter3").jQuerySimpleCounter({
    start:  0,
    end:500000,
    easing: 'swing',
    duration: 6000,
    complete: '',

  });
        }
    }, false);
});
$(document).ready(function(){
    window.addEventListener("scroll", function(){
       if (this.scrollTop(500){
  $("#counter4").jQuerySimpleCounter({
    start:  0,
    end:5500,
    easing: 'swing',
    duration: 6000,
    complete: '',

  });
        }
    }, false);
});
$(document).ready(function(){
    window.addEventListener("scroll", function(){
       if (this.scrollTop(500){
  $("#counter5").jQuerySimpleCounter({
    start:  0,
    end:50000000,
    easing: 'swing',
    duration: 6000,
    complete: '',

  });
        }
    }, false);
});
$(document).ready(function(){
    window.addEventListener("scroll", function(){
       if (this.scrollTop(500){
  $("#counter6").jQuerySimpleCounter({
    start:  0,
    end:1000000,
    easing: 'swing',
    duration: 6000,
    complete: '',

  });
        }
    }, false);
});


//Mercurio contador
$(document).ready(function(){
    $('[data-planet="mercurio"]').click(function(){
    $("#counter7").jQuerySimpleCounter({
		start: 0,
		end:57,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter8").jQuerySimpleCounter({
		start:  0,
		end: 88,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter9").jQuerySimpleCounter({
		start:  -1,
		end:-170,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter10").jQuerySimpleCounter({
		start:  0,
		end:350,
		easing: 'swing',
		duration: 9000,
		complete: '',

	});
	});
	});
//VENUS CONTADOR
$(document).ready(function(){
    $('[data-planet="venus"]').click(function(){
    $("#counter11").jQuerySimpleCounter({
		start: 0,
		end:108,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter12").jQuerySimpleCounter({
		start:  0,
		end: 225,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter13").jQuerySimpleCounter({
		start:  -1,
		end:-45,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter14").jQuerySimpleCounter({
		start:  0,
		end:462,
		easing: 'swing',
		duration: 9000,
		complete: '',

	});
	});
	});
//EARTH CONTADOR
$(document).ready(function(){
    $('[data-planet="earth"]').click(function(){
    $("#counter15").jQuerySimpleCounter({
		start: 0,
		end:150,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter16").jQuerySimpleCounter({
		start:  0,
		end: 365,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter17").jQuerySimpleCounter({
		start:  -1,
		end:-60,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter18").jQuerySimpleCounter({
		start:  0,
		end:60,
		easing: 'swing',
		duration: 9000,
		complete: '',

	});
	});
	});
//MARS CONTADOR
$(document).ready(function(){
    $('[data-planet="mars"]').click(function(){
    $("#counter19").jQuerySimpleCounter({
		start: 0,
		end:227,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter20").jQuerySimpleCounter({
		start:  0,
		end: 687,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter21").jQuerySimpleCounter({
		start:  -1,
		end:-87,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter22").jQuerySimpleCounter({
		start:  0,
		end:20,
		easing: 'swing',
		duration: 9000,
		complete: '',

	});
	});
	});
//ASTEROIDS CONTADOR
$(document).ready(function(){
    $('[data-planet="asteroids"]').click(function(){
    $("#counter23").jQuerySimpleCounter({
		start: 0,
		end:450,
		easing: 'swing',
		duration: 9500,
		complete: '',
	});
	$("#counter24").jQuerySimpleCounter({
		start:  0,
		end: 952,
		easing: 'swing',
		duration: 9500,
		complete: '',
	});
	$("#counter25").jQuerySimpleCounter({
		start:  -1,
		end:-87,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter26").jQuerySimpleCounter({
		start:  0,
		end:20,
		easing: 'swing',
		duration: 9000,
		complete: '',

	});
	});
	});
//JUPITER CONTADOR
$(document).ready(function(){
    $('[data-planet="jupiter"]').click(function(){
    $("#counter27").jQuerySimpleCounter({
		start: 0,
		end:778,
		easing: 'swing',
		duration: 9500,
		complete: '',
	});
	$("#counter28").jQuerySimpleCounter({
		start:  0,
		end: 11,
		easing: 'swing',
		duration: 9500,
		complete: '',
	});
	$("#counter29").jQuerySimpleCounter({
		start:  -1,
		end:-163,
		easing: 'swing',
		duration: 9000,
		complete: '',
	});
	$("#counter30").jQuerySimpleCounter({
		start:  -1,
		end:-75,
		easing: 'swing',
		duration: 9000,
		complete: '',

	});
	});
	});
$(document).ready(function(){
$('[data-planet="sun"]').click(function(){
$('#reprod').bind('canplay', function() {
  audio.currentTime = 49; // jumps to 29th secs
});
});
});