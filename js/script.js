// 메뉴 마우스오버시 하위메뉴
var menu = $('nav > ul > li');

menu.mouseenter(function(){
  var subMenu = $(this).find('.sub-menu');
  var subMenuHeight = subMenu.innerHeight();
  var htmlFont = $('html').css('fontSize').replace('px', '');
  var htmlFontNum = Number(htmlFont);

  $('header .sub-menu').hide();
  subMenu.show();
  $('header').stop().animate({
    height: (subMenuHeight / htmlFontNum) + 4 +'rem',
    borderColor: '#0d2d4f',
    borderBottomWidth : '2px'
  }, 400);
});
menu.mouseleave(function(){
  $('header .sub-menu').hide();
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
  $('html').css({overflow: 'hidden'});
});
sitemapClose.click(function(){
  sitemap.hide();
  $('html').css({overflow: 'auto'});
})

//홈섹션 - 메뉴 클릭시 섹션 이동
$('.page-ani').click(function(e){
  e.preventDefault();
  var pageLink = $(this).attr('href');
  var pageContent = $('section').filter(pageLink).offset().top;

  $('html, body').stop().animate({scrollTop: pageContent});
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

//pager
$('.pager ul li').click(function(e){
  $(this).addClass('on').siblings().removeClass('on');
  
  e.preventDefault();
  var pageLink = $(this).find('a').attr('href');
  var pageContent = $('section').filter(pageLink).offset().top;

  $('html, body').stop().animate({scrollTop: pageContent});
  $('section').removeClass('animation');
  $('section').filter(pageLink).addClass('animation');
});


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
  slidesPerView: 3,
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
  breakpoints: {
    769 : {
      slidesPerView: 4
    },
    901 : {
      slidesPerView: 5
    },
    1201 : {
      slidesPerView: 7
    }
  }
});