$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}
$(document).ready(function(){
  $('[data-toggle=\'tooltip\']').tooltip();
  var Win_width = $(window).width();
  if(Win_width<570){
    
    $('.home_page_banner').remove();
    /*$.each($('.home_page_banner'),function(){
      console.log($(this).attr('data-mob'));
      $(this).css('background-image',$(this).attr('data-mob'));  
    });*/
    
  }else{
    $('.mobile_page_banner').remove();
    /*$.each($('.home_page_banner'),function(){
      console.log($(this).attr('data-des'));
      $(this).css('background-image',$(this).attr('data-des'));  
    });*/
    
  }

    $('.main_banner_home').slick({
      autoplay: true,
      //pauseOnHover: true,
      autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows : false
          }
        }
      ]
    });
  });

$(document).ready(function(){
   /*$('#search input[name="search"]').click(function() {

                    $(this).prev('input').val('').trigger('change').focus();
                }));*/
  $('.product_banner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
  });
});






// for detail slider
$(document).ready(function(){
    $('.detail_slider_main').slick({
    //infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    asNavFor: '.detail_slider_thumbs',
    responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows : false
          }
        }
      ]
  });
  $('.detail_slider_thumbs').slick({    
    asNavFor: '.detail_slider_main',
    //infinite: true,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
  });
});







// for offcanvas
//$(function () {
//'use strict'

// $('[data-toggle="offcanvas"]').on('click', function () {
  $('[data-toggle="offcanvas"]').on('click', function (e) {
    e.preventDefault();
  //$('.offcanvas-collapse').toggleClass('open')
    $('.filter_area').toggleClass('open')
    $('body').toggleClass('overlay')
});
//})


// for range slider
// With JQuery


// With JQuery
$("#monthly-payment-range").slider({});
//var ex1 = $('#ex1').slider();
function run_Search(){
  var url = $('#search').attr('data-href');
  var value = $('header #search input[name=\'search\']').val();
  if (value) {
    url += '&search=' + encodeURIComponent(value);
  }
  location = url;
}
$('.deleteicon span').on('click', function() {
    $('header #search input[name=\'search\']').val('');
    run_Search();
});
$('#search').find('button').on('click', function() {
  //var url = $('base').attr('href') + 'index.php?route=product/search';
  run_Search();
});
$('#search input[name=\'search\'],#search2 input[name=\'search\']').on('change keyup',function(e){
  //console.log($(this).val());
  if($(this).val()!=''){
    $('.deleteicon span').show();
  }else{
    $('.deleteicon span').hide();
  }
});
$('#search input[name=\'search\']').on('keypress',function(e){
  
  if (e.which == 13) {
    if($(this).val()!=''){
      run_Search();  
    }
    
  }
});

function run_Search2(){
  var url = $('#search2').attr('data-href');
  var value = $('header #search2 input[name=\'search\']').val();
  if (value) {
    url += '&search=' + encodeURIComponent(value);
  }
  location = url;
}
$('#search2 input[name=\'search\']').parent().find('button').on('click', function() {
  //var url = $('base').attr('href') + 'index.php?route=product/search';
  run_Search2();
});
$('#search2 input[name=\'search\']').on('keypress',function(e){

  if (e.which == 13) {
    if($(this).val()!=''){
      run_Search2();  
    }
    
  }
});


// for animating header
// $(function(){
//  var shrinkHeader = 100;
//   $(window).scroll(function() {
//     var scroll = getCurrentScroll();
//       if ( scroll >= 34 ) {
//            $('.main_header nav').addClass('fixed-top');
//            $('.centeral_section').addClass('centeral_section_top_marged');
//         }
//         else {
//             $('.main_header nav').removeClass('fixed-top');
//             $('.centeral_section').removeClass('centeral_section_top_marged');
//         }
//   });
// function getCurrentScroll() {
//     return window.pageYOffset || document.documentElement.scrollTop;
//     }
// });







/* Slick needs no get Reinitialized on window Resize after it was destroyed */
    $(window).on('load resize orientationchange', function() {
        $('.homeKpiSlider').each(function(){
            var $homeKpiSlider = $(this);
            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 991) {
                if ($homeKpiSlider.hasClass('slick-initialized')) {
                    $homeKpiSlider.slick('unslick');
                }
            }
            else{
                if (!$homeKpiSlider.hasClass('slick-initialized')) {
                    $homeKpiSlider.slick({

                        slidesToShow: 1,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        arrows: false,
                        slidesToScroll: 1,
                        mobileFirst: true,
                    });
                }
            }
        });
    });

    /*var wishlist = {
      'add': function(product_id) {
        $.ajax({
          url: 'index.php?route=account/account/add',
          type: 'post',
          data: 'product_id=' + product_id,
          dataType: 'json',
          success: function(json) {
            $('.alert-dismissible').remove();

            if (json['redirect']) {
              location = json['redirect'];
            }

            if (json['success']) {
              $('#content').parent().before('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
            }

            $('#wishlist-total span').html(json['total']);
            $('#wishlist-total').attr('title', json['total']);

            $('html, body').animate({ scrollTop: 0 }, 'slow');
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
          }
        });
      },
      'remove': function() {

      }
    }*/

//$('.star').click(function(e){
var is_Progress=false;
$(document).on('click','.star',function(e){
        e.preventDefault();
  if(is_Progress==false){
    var data_exp = $('header').attr('data-exp');
    $this = $(this);
    var product_id = $(this).attr('id');
    var counter = $('.star-counter').text();
    if($this.hasClass('active_star')){
      action = 'remove';
    }else{
      action = 'add';


    }

    is_Progress=true;
    $.ajax({
      url:  'index.php?route=account/account/add',
      type: 'post',
      dataType: 'json',
      data:  {
        action:action,
        product_id:product_id,
      },
      complete: function(){
        is_Progress=false;
      },
      success: function(data){

        if(data.message != 'success'){
          location.href = data.message;
        }else{
          if($this.hasClass('active_star')){
            $this.removeClass('active_star');
            $('[data-star="'+product_id+'"]').removeClass('active_star');
            counter--;
            $('.star-counter').text(counter);
            if(data_exp=='on'){
              exponea.track('cart_update', {
                action: action,
                id: data.car_id,
                category: 'used-cars',
                product_list: [{item_id: data.car_id, item_quantity:1}],
                total_quantity: 1,
                total_price: data.price2,
                price: data.price2,
                name: data.name,
                product_link: data.link,
              });
            }

          }else{
            $this.addClass('active_star');
            $('[data-star="'+product_id+'"]').addClass('active_star');
            counter++;
            $('.star-counter').text(counter);
            if(data_exp=='on'){
              exponea.track('add item to cart', {
                name: data.name,
                price: data.price2,
                id: data.car_id,
                category: 'used-cars',
              });
            }


          }

        }
      }
    });
    
  }
    });

    $('.remove-star').click(function(e){

        var product_id = $(this).attr('id');
        var counter = $('.star-counter').text();
        $.ajax({
            url:  'index.php?route=account/account/remove_favourite',
            type: 'post',
            data:  {
              product_id:product_id,
            },
            success: function(data){

              counter--;
              $('.star-counter').text(counter);
              $('#remove-'+product_id).remove();
            }
        });
        e.preventDefault();
    });





// SIMILAR CARS SLIDER
/* Slick needs no get Reinitialized on window Resize after it was destroyed */
$(window).on('load resize orientationchange', function() {
    $('.similar_cars_slider').each(function(){
        var $similar_cars_slider = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 991) {
            if ($similar_cars_slider.hasClass('slick-initialized')) {
                $similar_cars_slider.slick('unslick');
            }
        }
        else{
            if (!$similar_cars_slider.hasClass('slick-initialized')) {
                $similar_cars_slider.slick({
                    slidesToShow: 1,
                    dots: false,
                    loop: true,
                    centerMode: true,
                    autoplay: true,
                    pauseOnHover: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                    slidesToScroll: 1,
                    mobileFirst: true, 
                    responsive: [
                                {
                                  breakpoint: 767,
                                  settings: {
                                    slidesToShow: 4,
                                    arrows : true
                                  }
                                },
                                {
                                  breakpoint: 480,
                                  settings: {
                                    slidesToShow: 2,
                                    arrows : true
                                  }
                                }
                              ]                   
                });
            }
        }
    });
});

    



// for testimonial slider
$(document).ready(function(){
  $('.testimonial_slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      infinite: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
});    