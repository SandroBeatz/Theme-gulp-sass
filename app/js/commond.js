var $btnScroll = $("#header");
$(window).scroll(function(){
    if ( $(this).scrollTop() > 650 && $btnScroll.hasClass("header") ){
        $btnScroll.removeClass("header").addClass("fixed-header");
    } else if($(this).scrollTop() <= 650 && $btnScroll.hasClass("fixed-header")) {
        $btnScroll.removeClass("fixed-header").addClass("header");
    }
});
$(window).scroll(function(){
    if ( $(this).scrollTop() > 650 && $("#fixedBTN").hasClass("block-btn-fixed") ){
        $("#fixedBTN").removeClass("block-btn-fixed").addClass("open-btn-fixed");
    } else if($(this).scrollTop() <= 650 && $("#fixedBTN").hasClass("open-btn-fixed")) {
        $("#fixedBTN").removeClass("open-btn-fixed").addClass("block-btn-fixed");
    }
});

$(window).load(function() {
    $(".loader").fadeOut();
    $(".load-inner").delay(100).fadeOut("slow");
});

$(document).ready(function() {
    // Function Anchor
    $("a.anchor").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 900);
        return false;
    });
    // Function Anchor END

    // Function Slick-Carousel
    // start vars
    var slider = $('.fade_slider');
    var test = $('.test');
    // end vars

    slider.slick ({
        fade: true,
        dots: true,
        autoplaySpeed: 5000,
        autoplay: true
    });
    test.slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
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
    // Function Slick-Carousel END

    // Function PooPup
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
    // Function PooPup END

    $OpenMenu= $('.block_navbar');
    $(".btn_navbar").click(function(e) {
        if ( $OpenMenu.hasClass('active_navbar') ) {
            $OpenMenu.removeClass('active_navbar');
        } else {
            $OpenMenu.removeClass('active_navbar');
            $OpenMenu.addClass('active_navbar');
        }
    });

    $Button_active= $('.btn_navbar');
    $(".togle").click(function(e) {
        if ( $Button_active.hasClass('active__btn_navbar') ) {
            $Button_active.removeClass('active__btn_navbar');
        } else {
            $Button_active.removeClass('active__btn_navbar');
            $Button_active.addClass('active__btn_navbar');
        }
    });
});


var nav = document.getElementById('header');
function openNavbar() {
    nav.classList.toggle('open_navbar');
};


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item__slide");
    var dots = document.getElementsByClassName("dots");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.trasform = "scale(1)";
        slides[i].style.zIndex = "0";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className =  dots[i].className.replace("active", " ");
    }
    slides[slideIndex-1].style.trasform = "scale(1.3)";
    slides[slideIndex-1].style.zIndex = "5";
    dots[slideIndex-1].className+= " active";
};

