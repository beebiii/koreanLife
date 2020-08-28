// 메뉴 마우스오버시 하위메뉴
var menu = $('nav > ul > li');

menu.mouseenter(function(){
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
menu.mouseleave(function(){
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

//사이트맵 모달창
var sitemapBtn = $('.sitemap-btn');
var sitemap = $('.sitemap-content');
var sitemapClose = sitemap.find('.close');

sitemapBtn.click(function(){
  sitemap.show();
});
sitemapClose.click(function(){
  sitemap.hide();
})

//swiper
//community-banner 슬라이드
var swiper = new Swiper('.banner-slide', {
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

//partner 슬라이드
var swiper = new Swiper('.partner-slide', {
  slidesPerView: 7,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//location button
var locationBtn = $('.location-btn');

$(window).scroll(function(){
  if($(document).scrollTop() > 50) {
    locationBtn.addClass('on');
  } else {
    locationBtn.removeClass('on');
  }
});
$('.top').click(function(){
  $('html, body').stop().animate({scrollTop : 0}, 400);
  return false;
});