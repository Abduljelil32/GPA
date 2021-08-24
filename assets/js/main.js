/**
* Template Name: iPortfolio - v2.0.3
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

var x = 1;
function add_grade(){
x++;
var grade = 'grade_'+x;
var unit ='unit_'+x;
var course ='course_'+x;
$('#inputs').append("<div class='row' style='margin-bottom: 5px;'><div class='col-sm-4 col-md-4 col-xs-4'><input type='text' id='"+course+"' class='form-control' placeholder='Course Code'></div><div class='col-sm-4 col-md-4 col-xs-4'><select class='form-control' id='"+grade+"'><option value='0'>Select Grade & Score</option><option value='4'>A 75- 100</option><option value='3.50'>AB 70-74 </option><option value='3.25'>B 65-69</option><option value='3'>BC 60-64</option><option value='2.75'>C 55-59</option><option value='2.50'>CD 50-54</option><option value='2.25'>D 45-49</option><option value='2.00'>E 40-44</option><option value='0'>F Below 40</option></select></div><div class='col-sm-4 col-md-4 col-xs-4'><select class='form-control' id='"+unit+"'><option value='0'>Unit</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option></select></div></div>");
}

function rem_grade(){
if(x > 1){
$("#inputs .row:last-child").remove();
x--;
}
}

function submit(){
    var cgpi  = parseFloat($("#cgpi").val());
    var gpa   = parseFloat($("#gpa").val());
    var cgpa  = (cgpi+gpa)/2;
        cgpa  = cgpa.toFixed(2);

    if(isNaN(cgpa)){
    $("#cgpa").html("<div class='alert alert-danger'>incorrect data entered for previous gpa and current gpa</div>");
    }else{
    $("#cgpa").html("<button class='btn btn-default form-control' disabled >CGPA= <span id='cg_btn'>"+cgpa+"</span></button>");
    $("#cgp").html("<button class='btn btn-warning' onclick='save()'><span class='glyphicon glyphicon-download'></span>&nbsp;Save CGPA</button>");
}
}

function save(){
    let itemsArray = []
    itemsArray.push($("#cg_btn").text())
    localStorage.setItem('items',itemsArray);
}

function load(){
    $('#gpa').val(localStorage.getItem('items'));
}

function rem(){
    var c = "";
    $('#gpa').val(c);
    localStorage.removeItem('items');
}

function calc_gpa(){
    var sm   = 0;
    var tu   = 0;
    var gpa  = 0;
    for (var i = 1; i <= x; i++) {
        var cs = $('#course_'+i).val();
        var gr = $('#grade_'+i).val();
        var un = $('#unit_'+i).val();
        var grn = gr * un;
        tu +=parseFloat(un);
        sm +=parseFloat(grn);
        }
        gpa = sm/tu;
        gpa = gpa.toFixed(2);
    if(isNaN(gpa)){
    $("#ca").html("<div class='alert alert-danger'>incorrect data entered for course code or unit allocated to course</div>");
    }else{
    $("#ca").html("<button class='btn btn-default form-control' disabled >GPA= <span id='cg_btn'>"+gpa+"</span></button>");
    $("#cp").html("<b>Please note down this GPA if want to calculate CGPA</b>!");
    }
}
