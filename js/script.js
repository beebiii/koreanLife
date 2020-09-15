$(function(){
    $('html, body').stop().animate({scrollTop:0});
});

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
var mobileMenuBtn = $('.mobile-menu-btn');

sitemapBtn.click(function(){
  sitemap.show();
  $('html').css({overflow: 'hidden'});
});
sitemapClose.click(function(){
  if($(this).hasClass('mo')){
    sitemap.removeClass('on');
    $('.layer').removeClass('on');
  } else {
    sitemap.hide();
    $('html').css({overflow: 'auto'});
    $('.layer').removeClass('on');
  }
})
mobileMenuBtn.click(function(){
  sitemap.addClass('on');
  $('.layer').addClass('on');
});
//모바일 사이트맵 아코디언 메뉴
var topMenu = $('.sitemap-content .top-menu > li');
var topMenuTitle = topMenu.find('h2');
var subMenuList = topMenu.find('.sub-menu > li');

topMenuTitle.click(function(){
  $(this).toggleClass('on');
  $(this).siblings('.sub-menu').slideToggle();
  $(this).parent().siblings().find('.sub-menu').hide();
});
subMenuList.click(function(){
  $(this).toggleClass('on');
  $(this).find('.sub-menu2').slideToggle();
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
  var idx = $(this).index();
  var section = $('section').eq(idx);
  var sectionTop = section.offset().top;

  $('html, body').stop().animate({scrollTop: sectionTop}, 400);
  $('section').removeClass('animation');
  section.addClass('animation');
});

//fullpage
var sectionInx = $('section').length;
var height = $(window).height();
var lastSecond = $('section').eq(-2).offset().top;
//var lastSecond = height * 4
//var sectionHeight = $('section').outerHeight();
//var lastHeight = $('section').eq(-1).outerHeight() + $('footer').outerHeight();

//섹션위치에 따른 페이저 active
$(window).scroll(function(){
  var currentScroll = $(window).scrollTop();
  /* if (currentScroll >= height * 0 && currentScroll < height * 1) {
    $('.pager ul li').eq(0).addClass('on').siblings().removeClass('on');
  } else if (currentScroll >= height * 1 && currentScroll < height * 2){
    $('.pager ul li').eq(1).addClass('on').siblings().removeClass('on');
  } else if (currentScroll >= height * 2 && currentScroll < height * 3){
    $('.pager ul li').eq(2).addClass('on').siblings().removeClass('on');
  } else if (currentScroll >= height * 3 && currentScroll < height * 4){
    $('.pager ul li').eq(3).addClass('on').siblings().removeClass('on');
  } else if (currentScroll = height * 4){
    $('.pager ul li').eq(4).addClass('on').siblings().removeClass('on');
  } else if (currentScroll > height * 4){
    $('.pager ul li').removeClass('on');
  } */
  /* if(currentScroll > (height * 4) ) {
    $('.pager ul li').removeClass('on');
  } else {
    for(var i = 0; i < sectionInx; i++){
      if(currentScroll >= height * i && currentScroll < height * (i+1)){
        $('.pager ul li').removeClass('on');
        $('.pager ul li').eq(i).addClass('on');
      }
    }
  } */
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

pageUpDown();
//마우스휠 / 위아래버튼 눌렀을 때
function pageUpDown() {
  $('section').on('mousewheel', function(e){
    var wheelDirect = e.originalEvent.wheelDelta;

    var pageWidth = $(window).outerWidth();
    console.log(pageWidth)
  
    if (pageWidth > 1200 && wheelDirect > 0) {
      var prev = $(this).prev().offset().top;
      if ($(window).scrollTop() > lastSecond) {
        pageUpLast()
      } else {
        $('html, body').stop().animate({
          scrollTop: prev
        }, 400);
        //pageUp();
      }
    } else if (pageWidth > 1200 && wheelDirect < 0){
      var next = $(this).next().offset().top;
      $('html, body').stop().animate({
        scrollTop: next
      }, 400);
      //pageDown();
    }
  });
}
$('.next').click(function(){
  pageDown();
});
$('.prev').click(function(){
  if( $(window).scrollTop() > lastSecond ){
    pageUpLast()
  } else {
    pageUp()
  }
});

function pageDown() {
  $('html, body').stop().animate({scrollTop: $(window).scrollTop() + height}, 400); //화면 높이만큼 더하고 뺌 : offset값이랑 어긋나는 현상 -> 섹션기준으로 이전/다음 섹션의 offset값으로 이동 (섹션이외 영역에서 안 먹힘)
}
function pageUp() {
  $('html, body').stop().animate({scrollTop: $(window).scrollTop() - height}, 400);
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
//탭메뉴 1200이하 첫번째 컨텐츠
var widthSize = $(window).outerWidth();
if(widthSize <= 1200) {
  classAdd(tabButton, 0);
  classAdd(newsContent, 0);
}
$(window).resize(function(){
  var widthSize = $(window).outerWidth();
  if(widthSize > 1200) {
    classAdd(tabButton, 1);
    classAdd(newsContent, 1);
  } else if(widthSize <= 1200) {
    classAdd(tabButton, 0);
    classAdd(newsContent, 0);
  }
});

function classAdd(elem, idx) {
  elem.eq(idx).addClass('on').siblings().removeClass('on');
}

 
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
