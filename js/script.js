// 하위메뉴
$('nav > ul > li').mouseenter(function(){
  var subMenu = $(this).find('.sub-menu');
  var subMenuHeight = subMenu.innerHeight();
  var htmlFont = $('html').css('fontSize').replace('px', '');
  var htmlFontNum = Number(htmlFont);

  $('.sub-menu').hide();
  subMenu.show();
  $('header').stop().animate({
    height: (subMenuHeight / htmlFontNum) + 4 +'rem',
    borderColor: '#0d2d4f',
    borderBottomWidth : '2px'
  }, 400);
});
$('nav > ul > li').mouseleave(function(){
  $('.sub-menu').hide();
  $('header').stop().animate({
    height: 4+'rem',
    borderBottomWidth : '1px'
  }, 400);
});

//lang 버튼
$('.lang').click(function(){
  $(this).toggleClass('on');
});


//swiper 슬라이드
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});