/**
*
*	ZoomMe - jQuery plugin to zoom images with mouse and buttons, similar to Google Maps.
*	by Bärnt & Ärnst 
*
*	UNDER DEVELOPMENT!
*
*   Simply - $(element-container).zoomMe('element-id') 
*
*	Todo:
*	- Integrate touch events aka Pinch-Zoom! perhaps with https://github.com/HotStudio/touchy
*	- Set constraints to drag
*	
*
**/	
(function($) {
  $.fn.zoomMe = function(id,options, width, height, zoom, dragging, self) {
  	options = {
  		speed: 40,
  		allowsmall: false,
  		boundtobox: true,
  		mouseupiconclass: "grab",
  		mousedowniconclass: "grabdown"
  	}
  	self = this;
  	dragging = false;
    return this.each(function() {
		$(this).bind('mousewheel', function(event, delta, deltaX, deltaY, marginleft) {
    		width = $(this).children('#'+id).width();
    		height = $(this).children('#'+id).height();
       		marginleft = ((event.pageX - $(this).children('#'+id).offset().left)/width)*(width-(width*(1+0.01*options.speed)));
    		margintop =  ((event.pageY - $(this).children('#'+id).offset().top)/height)*(height-(height*(1+0.01*options.speed)));	
    		if(delta>0) {
    			$(this).children('#'+id).stop(false, false).animate({ 
    				width: width*(1+0.01*options.speed)+"px",
    				left: '+='+marginleft,
    				top: '+='+margintop
    			 }, 300);
    		}
     		if(delta<0) {
     			if(width*(1-0.01*options.speed) >= $(this).width() || options.allowsmall==true) {
    				$(this).children('#'+id).stop(false, false).animate({ 
    					width: width*(1-0.01*options.speed)+"px",
	    				left: '-='+marginleft,
	    				top: '-='+margintop
    				}, 300);
    			} else {
    				$(this).children('#'+id).stop(false, false).animate({ 
    					width: $(this).width()+"px",
    					left: '0px',
    					top: '0px'
    				}, 300);
    			}
    		}
		});
		$(this).children("#"+id).draggable();
		$(this).bind('mousedown', function(e) {
			$(this).addClass("grabdown");
			$(this).removeClass('grab');
		});
		$(this).bind('mouseup', function(e) {
			$(this).removeClass('grabdown');
			$(this).addClass('grab');
		});
		/*
		$(this).bind('mousedown', function(e, diffx, diffy, startx, starty) {
			startx = e.pageX-parseInt($(self).children("#"+id).css('left'), 10);
			starty = e.pageY-parseInt($(self).children("#"+id).css('top'), 10);;
			$(this).children('#'+id).css('cursor', options.mousedownicon);
			$(window).mousemove(function(event) {
				diffx = event.pageX - startx;
				diffy = event.pageY - starty;
				$(self).children("#"+id).css({ left: diffx+'px'  });
				$(self).children("#"+id).css({ top: diffy+'px'  });
			});
			return false;
		});
		$(this).bind('mouseup', function(e) {
			$(window).unbind("mousemove");
			$(this).children('#'+id).css('cursor', options.mouseupicon);
			return false;
		});
		$(this).children('#'+id).css('cursor', options.mouseupicon); */
		
    }); 
  };
})(jQuery);