/*
Mouse Parallax Pre Load
==============
A simple jQuery plugin to allow given elements to be used as backgrounds that respond to mouse movement.  Could easily be further extended or modified.
--------------
Author: "Pip Beard Design," Benjamin Alan Robinson
LICENSE: The MIT License (MIT)
*/

(function ( $ ) {
	$.fn.extend({

		mouseParallaxpreload: function(options) {

			var defaults = { moveFactor: 5, zIndexValue: "-1", targetContainer: 'body' };

			var options = $.extend(defaults, options);

			return this.each(function() {
				var o = options;
				var background = $(this);

				$(o.targetContainer).on('mousemove', function(e){

					mouseX = e.pageX;
					mouseY = e.pageY;

					windowWidth = $(window).width();
					windowHeight = $(window).height();

					percentX = ((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/1);
					percentY = ((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/1);

					leftString = (0-percentX-o.moveFactor)+"px";
					rightString = (0-percentX-o.moveFactor)+"px";
					topString = (0-percentY-o.moveFactor)+"px";
					bottomString = (0-percentY-o.moveFactor)+"px";

					background[0].style.left = leftString;
					background[0].style.right = rightString;
					background[0].style.top = topString;
					background[0].style.bottom = bottomString;
					if(o.zIndexValue) {
						background[0].style.zIndex = o.zIndexValue;
					}
				});
			});
		}
	});
} (jQuery) );
