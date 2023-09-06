$('.menu-icon').click(function(){
    if($(this).hasClass('close-icon')){
      $(this).removeClass('close-icon');
      $('.main-menu').removeClass('open');
    }
    else{
      $(this).addClass('close-icon');
      $('.main-menu').addClass('open');
    }
  });

  $('.main-menu .dropdown-toggle').click(function(){
    if($('.case-item').hasClass('open')){
      $('.case-item').removeClass('open');
    }
    else{
      $('.case-item').addClass('open');
    }
  });