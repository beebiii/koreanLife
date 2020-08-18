// 하위메뉴
$('nav > ul > li').mouseenter(function(){
  var subMenu = $(this).find('.sub-menu');
  var subMenuHeight = subMenu.innerHeight();
  console.log(subMenuHeight)
  $('.sub-menu').hide();
  subMenu.show();
  $('header').stop().animate({
    height: subMenuHeight + 80 +'px',
    borderColor: '#0d2d4f',
    borderBottomWidth : '2px'
  }, 400);
});
$('nav > ul > li').mouseleave(function(){
  $('.sub-menu').hide();
  $('header').stop().animate({
    height: 80+'px',
    borderBottomWidth : '1px'
  }, 400);
});