$( document ).ready(function() {
  $('.section-nav li').click(function(e){
    var index = $(this).index() + 1;
    var $targetSection = $('body > section:nth-of-type('+index+')');
    var scrollTop = $targetSection.offset().top;
    if (index == 1) {
      scrollTop = 0;
    }
    $([document.documentElement, document.body]).animate({
      scrollTop: scrollTop - 74
    }, 1000);
    $('.section-nav li').removeClass('active');
    $(this).addClass('active');
  });

  $('#super-resolution').addClass('active');
  setTimeout(function(){ $('#super-resolution .left').addClass('active'); }, 1000);
  setTimeout(function(){ $('#super-resolution .right').addClass('active'); }, 1000);

  var scrollCount = 0;
  var lastScrollTop = 0
  var spt = true;
  var spt_video_position = 0;
  var shouldScroll = false;

  document.addEventListener('wheel', function(e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    e.preventDefault();

    console.log("Scroll Top: " + scrollTop + " Scroll Count:" +scrollCount);


    if (scrollCount > -1 && scrollCount < 55) {
      // Begin Super Resolution
      shouldScroll = false;
      $('#super-resolution .image').css('left', 200 + (scrollCount*10)+"px");
      $('#super-resolution .image').css('background-position', "-"+ (200 + (scrollCount*10)) +"px center");
      // End Super Resolution
    } else if (scrollCount > 190 && scrollCount < 650) {
      // Begin SPT
      shouldScroll = false;
      sptAnimation(scrollCount);
      // End SPT
    } else if (scrollCount > 800 && scrollCount < 1200) {
      // Begin Industrialization
      shouldScroll = false;
      // End Industrialization
    } else {
      shouldScroll = true;
    }

    console.log(shouldScroll);

    if (e.deltaY > 0) {
      if (scrollTop != 2387) {
        scrollCount++;
      }
      if (shouldScroll) {
        window.scrollBy(0,7);
      }
    } else {
      if (scrollCount > 0) {
        scrollCount--;
        if (shouldScroll) { window.scrollBy(0,-7); }
      }
    }

    lastScrollTop = scrollTop;
  }, { passive: false });
});

function sptAnimation(scrollCount) {
  if (scrollCount < 240) {
    var slideOneOpacity = (scrollCount - 190) / 50;
    $('#single-particle .slide.two').css('opacity', slideOneOpacity);
  }

  if (scrollCount > 300 && scrollCount < 350) {
    var slideOneOpacity = (350 - scrollCount) / 50;
    $('#single-particle .slide.two').css('opacity', slideOneOpacity);
  }

  // if (scrollCount > 350 && scrollCount < 375) {
  //   var slideOneOpacity = (375 - scrollCount) / 25;
  //   $('#single-particle .slide.one .phase-2').css('opacity', slideOneOpacity);
  // }

  if (scrollCount < 350){
    $('#single-particle .slide.one .phase-1').css('opacity', 1);
  }

  if (scrollCount > 350 && scrollCount < 400) {
    var slideOneOpacity = (scrollCount - 350) / 50;
    $('#single-particle .slide.one .phase-2').css('opacity', slideOneOpacity);
  }

  // if (scrollCount < 350) {
  //   $('#single-particle .slide.one .phase-1').css('opacity', 1);
  //   $('#single-particle .slide.one .phase-2').css('opacity', 0);
  //   $('#single-particle .slide-3').css('opacity', 0);
  //   $('#single-particle .slide-4').css('opacity', 0);
  //   $('#single-particle .slide-5').css('opacity', 0);
  //   $('#single-particle .slide-6').css('opacity', 0);
  // }

  if (scrollCount > 400 && scrollCount < 550) {
    $('#single-particle .slide.two').css('opacity', 0);
    $('#single-particle .slide.one .phase-1').css('opacity', 0);
    $('#single-particle .slide.one .phase-2').css('opacity', 1);
    $('#single-particle .slide-3').css('opacity', 1);
    $('#single-particle .slide-4').css('opacity', 1);
    $('#single-particle .slide-5').css('opacity', 1);
    $('#single-particle .slide-6').css('opacity', 1);
    var slideTop = scrollCount - 550;
    $('#single-particle .slide.one').css('top', (slideTop + 150) * -1);
    $('#single-particle .slide-3').css('top', ((slideTop + 150) * -1)/2);
    $('#single-particle .slide-5').css('top', (slideTop + 150)/2);
    $('#single-particle .slide-6').css('top', slideTop + 150);
  }

  if (scrollCount > 550 && scrollCount < 600) {
    var slideOneOpacity = (scrollCount - 550) / 50;
    $('#single-particle .slide.one .phase-3').css('opacity', slideOneOpacity);
    $('#single-particle .slide-3 .phase-2').css('opacity', slideOneOpacity);
    $('#single-particle .slide-4 .phase-2').css('opacity', slideOneOpacity);
    $('#single-particle .slide-5 .phase-2').css('opacity', slideOneOpacity);
    $('#single-particle .slide-6 .phase-2').css('opacity', slideOneOpacity);
  }
}
