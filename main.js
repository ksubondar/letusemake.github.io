$(window).on("load", function () { 
    $(".hero").vide("./video/clouds", {
        bgColor: "#615555"
    })
});
$(function () {
    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $(".header-menu ul").slideToggle(300, function(){
          if($(this).css("display") === "none"){
            $(this).removeAttr("style"); 
          }
        });
        $('.header-menu ul').css("display", "flex");
        $('.header-menu ul li').on('click', function () {
          $('.header-menu ul').hide(100, function(){
            if ($(this).css('display') === 'none') {
              $(this).removeAttr('style');
              $(".menuToggle").removeClass("active");
              $(".header-menu ul").slideToggle(300);
            }
          });
        });
      });
    $('.hero-arrow, .nav-link').click(function() {
        $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, {
            duration: 1000,
            easing: 'swing'
        });
    return false;
    });
    });
