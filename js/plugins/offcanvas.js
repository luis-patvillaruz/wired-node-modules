$(function(){
    
  $('[data-toggle="offcanvas"]').on('click', function(event){
      var self    =   $(this),
          target  =   self.data('target'),
          body    =   document.body;

      $(body).toggleClass('offcanvas-open');
      $(target).toggleClass('in');

      return false; 
  }); 

});