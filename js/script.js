// 메뉴 마우스오버시 하위메뉴
var menu = $('nav > ul > li');
var width = $(window).innerWidth();

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

//탑버튼 클릭시 최상단으로 이동
$('.top').click(function(){
  $('html, body').stop().animate({scrollTop : 0}, 400);
});

//pager
$('.pager ul li').click(function(e){
  e.preventDefault();
  $(this).addClass('on').siblings().removeClass('on');
  var idx = $(this).index();
  var section = $('section').eq(idx);
  var sectionTop = section.offset().top;

  $('html, body').stop().animate({scrollTop: sectionTop}, 400);
  $('section').removeClass('animation');
  section.addClass('animation');
});

//fullpage
var lastSecond = $('section').eq(-2).offset().top;
var footerHeight = $('footer').innerHeight();

//섹션위치에 따른 페이저 active
$(window).scroll(function(){
  var currentScroll = $(window).scrollTop();

  $('section').each(function(index){
    $('section').removeClass('animation');
    if(currentScroll > lastSecond) {
      $('.pager ul li').removeClass('on');
    } else if(currentScroll >= $(this).offset().top) {
      $('.pager ul li').eq(index).addClass('on').siblings().removeClass('on');
      $(this).addClass('animation');
    }
  })
});

//마우스휠 / 위아래버튼 눌렀을 때
$('body').on('mousewheel', function(e){
  var wheelDirect = e.originalEvent.wheelDelta;
   
  if ((wheelDirect > 0) && ($(window).scrollTop() > lastSecond)) {
    pageUpLast()
  } else if (wheelDirect < 0){
    pageDown();
  } else {
    pageUp();
  }
})
$('.next').click(function(){
  if( $(window).scrollTop = 0 ){
    return
  } else {
    pageDown();
  }
});
$('.prev').click(function(){
  if( $(window).scrollTop > lastSecond ){
    pageUpLast()
  } else {
    pageUp()
  }
});

function pageDown() {
  $('html, body').stop().animate({
    scrollTop: $(window).scrollTop() + $(window).height()
  }, 400);
}
function pageUp() {
  $('html, body').stop().animate({
    scrollTop: $(window).scrollTop() - $(window).height()
  }, 400);
}
function pageUpLast() {
  $('html, body').stop().animate({
    scrollTop: lastSecond
  }, 400);
}

// 탭메뉴
var tabButton = $('.news-category li');
var newsContent = $('.news-contents-container');

$(tabButton).click(function(){
  $(this).addClass('on').siblings().removeClass('on');
  var tabButtonProp = $(this).attr('aria-controls');
  $(newsContent).filter('#'+tabButtonProp).addClass('on').siblings().removeClass('on');
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