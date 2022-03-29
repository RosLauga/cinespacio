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
 jQuery(document).ready(function ($) {
      $('#solsun').waypoint(function(direction) {
$("#counter2").animateNumbers(250,true,4000);
    this.destroy()  
    });
});

 jQuery(document).ready(function ($) {
      $('#solsun').waypoint(function(direction) {
$("#counter3").animateNumbers(10000,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#solsun').waypoint(function(direction) {
$("#counter4").animateNumbers(5500,true,3000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#solsun').waypoint(function(direction) {
$("#counter5").animateNumbers(50000000,true,6000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#solsun').waypoint(function(direction) {
$("#counter6").animateNumbers(1000000,true,5000);
    this.destroy()  
    });
});
//Mercurio contador
  jQuery(document).ready(function ($) {
      $('#pmercury').waypoint(function(direction) {
$("#counter7").animateNumbers(57,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pmercury').waypoint(function(direction) {
$("#counter8").animateNumbers(88,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#pmercury').waypoint(function(direction) {
$("#counter9").animateNumbers(-170,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pmercury').waypoint(function(direction) {
$("#counter10").animateNumbers(350,true,4000);
    this.destroy()  
    });
});
//Venus contador
  jQuery(document).ready(function ($) {
      $('#pvenus').waypoint(function(direction) {
$("#counter11").animateNumbers(108,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pvenus').waypoint(function(direction) {
$("#counter12").animateNumbers(225,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#pvenus').waypoint(function(direction) {
$("#counter13").animateNumbers(-45,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pvenus').waypoint(function(direction) {
$("#counter14").animateNumbers(462,true,4000);
    this.destroy()  
    });
});
//Tierra contador
  jQuery(document).ready(function ($) {
      $('#pearth').waypoint(function(direction) {
$("#counter15").animateNumbers(150,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pearth').waypoint(function(direction) {
$("#counter16").animateNumbers(365,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#pearth').waypoint(function(direction) {
$("#counter17").animateNumbers(-60,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pearth').waypoint(function(direction) {
$("#counter18").animateNumbers(60,true,4000);
    this.destroy()  
    });
});
//Marte contador
  jQuery(document).ready(function ($) {
      $('#pmars').waypoint(function(direction) {
$("#counter19").animateNumbers(227,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pmars').waypoint(function(direction) {
$("#counter20").animateNumbers(687,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#pmars').waypoint(function(direction) {
$("#counter21").animateNumbers(-87,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pmars').waypoint(function(direction) {
$("#counter22").animateNumbers(20,true,4000);
    this.destroy()  
    });
});
//Asteroides/Ceres contador
  jQuery(document).ready(function ($) {
      $('#pasteroids').waypoint(function(direction) {
$("#counter23").animateNumbers(450,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pasteroids').waypoint(function(direction) {
$("#counter24").animateNumbers(4.41,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#pasteroids').waypoint(function(direction) {
$("#counter25").animateNumbers(-105,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pasteroids').waypoint(function(direction) {
$("#counter26").animateNumbers(-38,true,4000);
    this.destroy()  
    });
});
  //Jupiter contador
  jQuery(document).ready(function ($) {
      $('#pjupiter').waypoint(function(direction) {
$("#counter27").animateNumbers(778,true,4300);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pjupiter').waypoint(function(direction) {
$("#counter28").animateNumbers(11,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#pjupiter').waypoint(function(direction) {
$("#counter29").animateNumbers(-163,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pjupiter').waypoint(function(direction) {
$("#counter30").animateNumbers(-75,true,4000);
    this.destroy()  
    });
});
  //Saturn contador
  jQuery(document).ready(function ($) {
      $('#psaturn').waypoint(function(direction) {
$("#counter31").animateNumbers(1429,true,4500);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#psaturn').waypoint(function(direction) {
$("#counter32").animateNumbers(29,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#psaturn').waypoint(function(direction) {
$("#counter33").animateNumbers(-191,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#psaturn').waypoint(function(direction) {
$("#counter34").animateNumbers(-178,true,4000);
    this.destroy()  
    });
});
  //Urano contador
  jQuery(document).ready(function ($) {
      $('#puranus').waypoint(function(direction) {
$("#counter35").animateNumbers(2870,true,5000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#puranus').waypoint(function(direction) {
$("#counter36").animateNumbers(84,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#puranus').waypoint(function(direction) {
$("#counter37").animateNumbers(-214,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#puranus').waypoint(function(direction) {
$("#counter38").animateNumbers(-205,true,4000);
    this.destroy()  
    });
});
  //Neptuno contador
  jQuery(document).ready(function ($) {
      $('#pneptune').waypoint(function(direction) {
$("#counter39").animateNumbers(4504,true,5500);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pneptune').waypoint(function(direction) {
$("#counter40").animateNumbers(164,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#pneptune').waypoint(function(direction) {
$("#counter41").animateNumbers(-223,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#pneptune').waypoint(function(direction) {
$("#counter42").animateNumbers(-217,true,4000);
    this.destroy()  
    });
});
  //Pluton contador
  jQuery(document).ready(function ($) {
      $('#ppluto').waypoint(function(direction) {
$("#counter43").animateNumbers(5913,true,6000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#ppluto').waypoint(function(direction) {
$("#counter44").animateNumbers(284,true,4000);
    this.destroy()  
    });
});  
  jQuery(document).ready(function ($) {
      $('#ppluto').waypoint(function(direction) {
$("#counter45").animateNumbers(-240,true,4000);
    this.destroy()  
    });
});
  jQuery(document).ready(function ($) {
      $('#ppluto').waypoint(function(direction) {
$("#counter46").animateNumbers(-218,true,4000);
    this.destroy()  
    });
});

  // jQuery(document).ready(function ($) {
  //    $('#pmercury').waypoint(function(direction) {
  //      $('#mercuryv')[0].play();
  //      $('#venusv')[0].pause();
  //  });

//});
   //   jQuery(document).ready(function ($) {
   //   $('#pvenus').waypoint(function(direction) {
     //   $('#mercuryv')[0].pause();
      //  $('#venusv')[0].play();
   // });
//});
//