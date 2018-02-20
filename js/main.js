$(document).ready(function(){
    setTimeout(function(){
        $('img[usemap]').rwdImageMaps();
      },1000);
    $("#top").click(function () {
       //1 second of animation time
       //html works for FFX but not Chrome
       //body works for Chrome but not FFX
       //This strange selector seems to work universally
       $("html, body").animate({scrollTop: 0}, 1000);

    });
    $("#sticker").sticky({topSpacing:0});
    $('.navitem').each(function(){
      $(this).on('click',function(){
        $('.navitem').removeClass('active');
        $(this).addClass('active');
      })
    })
  })

$(window).on( 'scroll', function(){
   $('.w-nav-button.w--open').removeClass('w--open');
   $('.w-nav-overlay').slideUp();
   $('#bgg').fadeOut();
});