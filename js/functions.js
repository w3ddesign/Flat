$(function() {
  scrollMenu();
  portfolioFilter();
});

// SMOOTH SCROLL LINKS WHEN DOCUMENT IS READY AND ACTIVE LINKS ON SECTIONS

function scrollMenu(){
  var sections = $('section')
    , div = $('div');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top, // 50 is the nav height aprox, it says when each section becomes active
          bottom = top + 50;

      if (cur_pos >= top && cur_pos <= bottom) {
        div.find('.scroll').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        div.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  div.find('.scroll').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 1500);
    return false;
  });

}

// PORTFOLIO FILTER BY CLASS

function portfolioFilter() {
  var selectedClass = "";
		$(".portfolio-nav a").click(function() {
		  selectedClass = $(this).attr("data-rel");
      $("#portfolio-gallery").fadeTo(100, 1);
		  $("#portfolio-gallery li").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#portfolio").fadeTo(300, 1);
    }, 500);
    return false;
	});

  // Add/Remove active class from navbar when click

  $('.filter').click(function() {
    $('.filter').removeClass('filtered');
    $(this).addClass('filtered');
  });

}
