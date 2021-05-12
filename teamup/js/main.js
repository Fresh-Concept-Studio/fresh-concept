$(function() {
  if($('.carousel').length > 0){
    $('.carousel').flickity({
      wrapAround: true
    });
  }

  $('.nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.mobile-nav').toggleClass('active');
    $('.utility-nav').toggleClass('active');
    $('.navbar-brand').toggleClass('active');
    $('.navbar').toggleClass('active');
  });

  $('.feature-links').click(function(){
    $('.feature-links ul').toggleClass('active');
  });

  $('.dropdown').click(function(){
    $(this).toggleClass('active');
  });

  $('.dropdown li').click(function(){
    var html = $(this).html();
    $(this).parent().parent().find('.value').html(html);
  });

  $('.row.gbp').hide();

  $('.pricing-table .dropdown li').click(function(){
    var value = $(this).data('value');
    $('.usd, .gbp').hide();
    $('.row.'+value).show();
  });
});