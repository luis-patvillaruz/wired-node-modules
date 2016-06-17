$(function() {

    /*
     * Offcanvas Menu
     * Replaced Bootstrap's native collapsable menu */
    $('[data-toggle="offcanvas"]').on('click', function(event) {
        var self = $(this),
            target = self.data('target');

        $('body').toggleClass('offcanvas-open');
        $(target).toggleClass('in');

        $(document).on('click', function(e){
		  if( !$(e.target).is(target) || !$(e.target).closest(target).length ) {
        	$('body').removeClass('offcanvas-open');
			$(target).removeClass('in');
	      }
        });

        return false;
    });

    /*
     * Fullscreen Menu
     * Full screen menu navigation */
    $('[data-toggle="fullscreen"]').on('click', function(event) {
        var self = $(this),
            target = self.data('target');

        $('body').toggleClass('fullscreen-open');
        $(target).toggleClass('in');

        $(document).on('click', function(e){
          if( !$(e.target).is(target) || !$(e.target).closest(target).length ) {
            $('body').removeClass('fullscreen-open');
            $(target).removeClass('in');
          }
        });

        return false;
    });

});