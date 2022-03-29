(function ($) {
   
    $.fn.CountUpCircle = function(options){

    	var self = this;
	
		var settings = $.extend({
			duration: 0 //ms
		}, options);

		var toCount = parseInt(this.html());
		console.log("Count up to " + toCount);

		var i 	 = 0;
		var step = settings.duration / toCount;
		console.log("Step duration " + step);

		var displayNumber = function() {
			i= i+5;
			self.html(i);
			if (i < toCount) {
				setTimeout(displayNumber, step);
			}
		};

		displayNumber();
	}

}(jQuery));