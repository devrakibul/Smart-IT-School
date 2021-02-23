$(function(){

    // banner slider js
    $('.banner-slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });

    // navbar scroll js
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }
    });

    // leader slider js
    $('.leader-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows:true,
        autoplaySpeed: 2000,
        prevArrow:'.left2',
        nextArrow:'.right2',
        fade:true,
        speed:1500,
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });

    // $('.ser_slide').slick({
    //     arrows: true,
    //     nextArrow: '.left',
    //     prevArrow: '.right',
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   });

    //   $(document).ready(function(){
    //     $('.venobox').venobox(); 
    //   });

    //   $('.pro_slide').slick({
    //     arrows: true,
    //     nextArrow: '.left_arrow',
    //     prevArrow: '.right_arrow',
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   });

    //   $('.feed_slide').slick({
    //     arrows:false,
    //     dots:true,
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 3,
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 3
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   });
       
    //   $('.sliders').slick({
    //     arrows: false,
    //     dots:true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   });

});